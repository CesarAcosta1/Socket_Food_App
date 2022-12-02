// const express = require("express");
// var http = require("http");
// const app = express();
// const port = process.env.PORT || 5000;
// var server = http.createServer(app);
// var io = require("socket.io")(server);

// //middlewre
// app.use(express.json());
// var clients = {};

// io.on("connection", (socket) => {
//   console.log("connetetd");
//   console.log(socket.id, "has joined");
//   socket.on("signin", (id) => {
//     console.log(id);
//     clients[id] = socket;
//     console.log(clients);
//   });
//   socket.on("message", (msg) => {
//     console.log(msg);
//     let targetId = msg.targetId;
//     if (clients[targetId]) clients[targetId].emit("message", msg);
//   });
// });

// server.listen(process.env.PORT || 5000, () => {
//   const port = server.address().port;
//   console.log(`Express is working on port ${port}`);
// });



const app = require('express')()
const http = require('http').createServer(app)
app.get('/', (req, res) => {
   res.send("Node Server is running. Yay!!")
})
http.listen(process.env.PORT,() => {
  const port = http.address().port;
  console.log(`Express is working on port ${port}`);
})