const net = require("net");
const { IP, PORT } = require("./constants");


// establishes a connection with the game server
const connect =  () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data);
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: SEL");
  });


  return conn; // return conn object so when connect() is called within setupInput() in play.js, input commands can be passed
};

module.exports = { connect };