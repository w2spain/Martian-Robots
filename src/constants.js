var constants = {
  leftRotations: { N: "W", S: "E", E: "N", W: "S" },
  rightRotations: { N: "E", S: "W", E: "S", W: "N" },
  movements: {
    N: [0, 1],
    S: [0, -1],
    E: [1, 0],
    W: [-1, 0],
  },
  worldMaxLength: 50,
  instructionsMaxLength: 100,
};

module.exports = constants;
