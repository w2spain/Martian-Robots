const constants = require("./constants");

function move(world, initialPosition, instructions, scentsFound) {
  let result = {
    resultado: "",
    scent: "",
  };

  let position = initialPosition;
  for (let instruction of instructions) {
    const nextPosition = parseInstruction(
      world,
      position,
      instruction,
      scentsFound
    );
    if (isLost(nextPosition, world)) {
      result.resultado = position + " LOST";
      result.isLost = true;
      result.scent = position;
      return result;
    }
    result.isLost = false;
    position = nextPosition;
  }
  result.resultado = position;
  return result;
}

function parseInstruction(world, position, instruction, scentsFound) {
  const splitPosition = position.split(" ");
  switch (instruction) {
    case "L":
      return turnToLeft(splitPosition);
    case "R":
      return turnToRight(splitPosition);
    case "F":
      let nextPosition = moveForward(splitPosition);
      if (isScent(splitPosition, scentsFound) && isLost(nextPosition, world))
        return position;
      else return nextPosition;
  }
}

function turnToLeft(splitPosition) {
  const orientation = splitPosition[2];
  return `${splitPosition[0]} ${splitPosition[1]} ${constants.leftRotations[orientation]}`;
}

function turnToRight(splitPosition) {
  const orientation = splitPosition[2];
  return `${splitPosition[0]} ${splitPosition[1]} ${constants.rightRotations[orientation]}`;
}

function moveForward(splitPosition) {
  const orientation = splitPosition[2];
  const movement = constants.movements[orientation];
  const x = parseInt(splitPosition[0]) + movement[0];
  const y = parseInt(splitPosition[1]) + movement[1];

  return `${x} ${y} ${orientation}`;
}

function isLost(position, world) {
  const splitPosition = position.split(" ");

  return (
    splitPosition[0] < 0 ||
    splitPosition[0] > world[0] ||
    splitPosition[1] < 0 ||
    splitPosition[1] > world[2]
  );
}

function isScent(splitPosition, scents) {
  if (scents != null) {
    let filterScents = scents.filter((obj) => {
      return obj.x === splitPosition[0] && obj.y === splitPosition[1];
    });
    if (filterScents.length > 0) return true;
    else return false;
  } else {
    return false;
  }
}

function lostRobots(robots) {
  let filteredRobots = robots.filter((obj, position) => {
    return obj.isLost === true;
  });
  return filteredRobots;
}

module.exports = { move, lostRobots };
