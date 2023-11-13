const {MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY} = require('./constants');

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    connection.write(MOVE_UP_KEY);
  }
  if (key === 'a') {
    connection.write(MOVE_LEFT_KEY);
  }
  if (key === 's') {
    connection.write(MOVE_DOWN_KEY);
  }
  if (key === 'd') {
    connection.write(MOVE_RIGHT_KEY);
  }

  if (key === 'o') {
    connection.write("Say: OOH");
  }

  if (key === 'i') {
    connection.write("Say: NO!");
  }

  if (key === 'p') {
    connection.write("Say: PHEW");
  }
};
// setup interface to handle user input from stdin

let connection;
const setupInput =  (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);


  return stdin;
};

module.exports = {setupInput};