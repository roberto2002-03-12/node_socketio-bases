import { Server as SocketServer } from 'socket.io'
import { Server as HttpServer } from 'http'

export const startSocketIO = (httpServer: HttpServer) => {
  const io = new SocketServer(httpServer, {
    cors: {
      origin: ['http://localhost:5173']
    }
  })
  
  io.on("connection", socket => {
    console.log('user with id: ' + socket.id + ' has connected to the server')
    // const cookie = socket.handshake.headers.cookie;
    // const username = cookie?.split("=").pop();
    // console.log(username);

    socket.on("disconnect", () => {
      console.log();
    })
  });

  return { io };
}