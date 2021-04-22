module.exports = {
  validateWorld(world, maxLength) {
    let splittedWorld = world.split(" ");
    if (
      parseInt(splittedWorld[0]) > maxLength ||
      parseInt(splittedWorld[1]) > maxLength
    ) {
      console.log(
        "ERROR: Please verify that the length/heigh of the mars world is shorter than " +
          maxLength
      );
      return false;
    }
    return true;
  },
  validateInstructions(instructions, maxLength) {
    if (instructions.length > 100) {
      console.log(
        "ERROR: Please verify that the number of instructions for any robot must be shorter than " +
          maxLength
      );
      return false;
    }
    return true;
  },
};
