const express = require('express')
const http = require('http')
const app = express()
const server = http.createServer(app)

const { Server } = require('socket.io')
const io = new Server(server, {
  cors: {
    origin: '*',
  },
})

// const rooms = {}
// const users = {}
const usersInRoom = []

io.on('connection', (socket) => {
  socket.on("join",(params)=>{
    const userId = params.userId
    usersInRoom.push(userId)
    console.log(usersInRoom);
    // users[socket.id] = {
    //   roomId : roomId
    // }
    // if(!rooms[roomId]){
    //   rooms[roomId] = {
    //     roomId,
    //     users : []
    //   }
    // }
    // rooms[roomId].users.push(socket.id)
  })
 
})

server.listen(3001, () => {
  console.log('✔️ Server listening on port 3001')
})