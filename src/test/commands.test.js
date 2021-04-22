const { move } = require("../commands");

// Forward Instructions

describe("ROBOT MOVES FORWARD", () => {
  test("when the orientation is North", () => {
    const position = move("5 3", "1 1 N", "F");
    expect(position).toStrictEqual({
      resultado: "1 2 N",
      isLost: false,
      scent: "",
    });
  });

  test("when the orientation is East", () => {
    const position = move("5 3", "1 1 E", "F");
    expect(position).toStrictEqual({
      resultado: "2 1 E",
      isLost: false,
      scent: "",
    });
  });

  test("when the orientation is South", () => {
    const position = move("5 3", "1 1 S", "F");
    expect(position).toStrictEqual({
      resultado: "1 0 S",
      isLost: false,
      scent: "",
    });
  });

  test("when the orientation is West", () => {
    const position = move("5 3", "1 1 W", "F");
    expect(position).toStrictEqual({
      resultado: "0 1 W",
      isLost: false,
      scent: "",
    });
  });
});

/* *********************************************************** */
describe("ROBOT TURNS LEFT", () => {
  test("when the orientation is North", () => {
    const position = move("5 3", "1 1 N", "L");
    expect(position).toStrictEqual({
      resultado: "1 1 W",
      isLost: false,
      scent: "",
    });
  });

  test("when the orientation is South", () => {
    const position = move("5 3", "1 1 S", "L");
    expect(position).toStrictEqual({
      resultado: "1 1 E",
      isLost: false,
      scent: "",
    });
  });

  test("when the orientation is West", () => {
    const position = move("5 3", "1 1 W", "L");
    expect(position).toStrictEqual({
      resultado: "1 1 S",
      isLost: false,
      scent: "",
    });
  });

  test("when the orientation is East", () => {
    const position = move("5 3", "1 1 E", "L");
    expect(position).toStrictEqual({
      resultado: "1 1 N",
      isLost: false,
      scent: "",
    });
  });
});

/* *********************************************************** */
describe("ROBOT TURNS RIGHT", () => {
  test("when the orientation is North", () => {
    const position = move("5 3", "1 1 N", "R");
    expect(position).toStrictEqual({
      resultado: "1 1 E",
      isLost: false,
      scent: "",
    });
  });

  test("when the orientation is South", () => {
    const position = move("5 3", "1 1 S", "R");
    expect(position).toStrictEqual({
      resultado: "1 1 W",
      isLost: false,
      scent: "",
    });
  });

  test("when the orientation is West", () => {
    const position = move("5 3", "1 1 W", "R");
    expect(position).toStrictEqual({
      resultado: "1 1 N",
      isLost: false,
      scent: "",
    });
  });

  test("when the orientation is East", () => {
    const position = move("5 3", "1 1 E", "R");
    expect(position).toStrictEqual({
      resultado: "1 1 S",
      isLost: false,
      scent: "",
    });
  });
});

/* *********************************************************** */
describe("ROBOT IN THE LIMIT OF BOUNDARIES", () => {
  test("moves forward when the orientation is North", () => {
    const position = move("5 3", "5 3 N", "F");
    expect(position).toStrictEqual({
      resultado: "5 3 N LOST",
      isLost: true,
      scent: "5 3 N",
    });
  });

  test("moves forward when the orientation is South", () => {
    const position = move("5 3", "5 3 S", "F");
    expect(position).toStrictEqual({
      resultado: "5 2 S",
      isLost: false,
      scent: "",
    });
  });

  test("moves forward when the orientation is East", () => {
    const position = move("5 3", "5 3 E", "F");
    expect(position).toStrictEqual({
      resultado: "5 3 E LOST",
      isLost: true,
      scent: "5 3 E",
    });
  });

  test("moves forward when the orientation is West", () => {
    const position = move("5 3", "5 3 W", "F");
    expect(position).toStrictEqual({
      resultado: "4 3 W",
      isLost: false,
      scent: "",
    });
  });
});

/* ******************************************************************** */

describe("ROBOT PROCESS MORE THAN ONE INSTRUCTION", () => {
  test("robot moves forward twice when the orientation is North", () => {
    const position = move("5 3", "0 0 N", "FF");
    expect(position).toStrictEqual({
      resultado: "0 2 N",
      isLost: false,
      scent: "",
    });
  });

  test("robot turns right twice when the orientation is North", () => {
    const position = move("5 3", "0 0 N", "RR");
    expect(position).toStrictEqual({
      resultado: "0 0 S",
      isLost: false,
      scent: "",
    });
  });

  test("robot turns right and moves forward when the orientation is North", () => {
    const position = move("5 3", "0 0 N", "RF");
    expect(position).toStrictEqual({
      resultado: "1 0 E",
      isLost: false,
      scent: "",
    });
  });
});
