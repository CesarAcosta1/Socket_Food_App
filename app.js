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


const console = require('console');
const { Console } = require('console');
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.send('Hello World! 7')
});

io.on('connection', (socket) => {

  console.log('Usuario conectado con el id: ', socket.id);

  socket.on('disconnect',function () {
    console.log("Se desconecto el usuario con id: " + socket.id);
  });

  socket.on('msg', (msg) => {
    console.log(msg);
    console.log("Pruebas de alguna cosas");
    // io.emit('chat message', msg);
  });
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log("Aplicacion escuchando en el puerto " + PORT);
  console.log("Presione Ctrl+C para salir");
});