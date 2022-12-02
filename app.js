const express = require("express");
var http = require("http");
const app = express();
const port = process.env.PORT || 5000;
var server = http.createServer(app);
var io = require("socket.io")(server);

//middlewre
app.use(express.json());
var clients = {};

io.on("connection", (socket) => {
  console.log("connetetd");
  console.log(socket.id, "has joined");
  socket.on("signin", (id) => {
    console.log(id);
    clients[id] = socket;
    console.log(clients);
  });
  socket.on("message", (msg) => {
    console.log(msg);
    let targetId = msg.targetId;
    if (clients[targetId]) clients[targetId].emit("message", msg);
  });
});

server.listen(process.env.PORT || 5000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});


/*****  Funciona ******/
// // Importing express module
// const express = require('express');
// const app = express();
 
// // Getting Request
// app.get('/', (req, res) => {
 
//     // Sending the response
//     res.send('Hello World! 5')
    
//     // Ending the response
//     res.end()
// })
 

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, console.log(`Server started on port ${PORT}`));


