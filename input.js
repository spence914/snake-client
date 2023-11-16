const { MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  SAY_NO_KEY,
  SAY_OOH_KEY,
  SAY_PHEW_KEY } = require('./constants');

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  }

  if (key === SAY_OOH_KEY) { // Messages to send to other players on server
    connection.write("Say: OOH");
  }

  if (key === SAY_NO_KEY) {
    connection.write("Say: NO!");
  }

  if (key === SAY_PHEW_KEY) {
    connection.write("Say: PHEW");
  }
};


// setup interface to handle user input from stdin

let connection;
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);


  return stdin;
};

module.exports = { setupInput };