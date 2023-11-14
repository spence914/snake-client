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

  // conn.on("connect", () => {  demo to show how to move snake up DELETE BEFORE FINAL SUBMISSION
  //   conn.write("Move: up");

  //   setInterval(() => {
  //     conn.write("Move: up");
  //   }, 50);
  // });



  return conn;
};

module.exports = { connect };