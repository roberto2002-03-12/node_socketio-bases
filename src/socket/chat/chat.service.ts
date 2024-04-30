import { io } from "../../server";

io.on("connection", socket => {
  socket.on("message", (data) => {
    socket.broadcast.emit("message", {
      body: data,
      from: socket.id.slice(6)
    })
  });
});