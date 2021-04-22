const fs = require("fs");
const { move, lostRobots } = require("./commands");
const { validateWorld, validateInstructions } = require("./helpers/validation");
const { exit } = require("process");
require("./helpers/globals");
const constants = require("./constants");

function init() {
  const fileContents = fs.readFileSync("./data/input.txt").toString();
  const inputArray = fileContents.split("\r\n");
  inputArray.remove("");
  let world = inputArray.shift();

  if (!validateWorld(world, constants.worldMaxLength)) {
    exit(0);
  }

  let scents = [];

  var processedInput = [];
  for (let i = 0; i < inputArray.length; i++) {
    let robot = {
      id: "",
      position: "",
      commands: "",
      result: "",
      isLost: false,
      scent: "",
    };

    robot.position = inputArray[i];

    if (
      !validateInstructions(inputArray[i + 1], constants.instructionsMaxLength)
    ) {
      exit(0);
    }
    robot.commands = inputArray[i + 1];

    processedInput.push(robot);
    i++;
  }

  for (let x = 0; x < processedInput.length; x++) {
    let result = move(
      world,
      processedInput[x].position,
      processedInput[x].commands,
      scents
    );

    processedInput[x].id = x;
    processedInput[x].result = result.resultado;
    processedInput[x].isLost = result.isLost;
    processedInput[x].scent = result.scent;
    if (result.scent.length > 0) {
      let scent_coords = processedInput[x].scent.split(" ");
      scents.push({ x: scent_coords[0], y: scent_coords[1] });
    }
  }
  let response = {
    world: world,
    result: processedInput,
    scents: scents,
    lostRobots: lostRobots(processedInput),
  };
  console.log(response);
}

init();
