function main_io(io) {
  io.on("connection", (socket) => {
    console.log(`NEW SOCKET CONNECTION: ${socket.id}`);

    /**
     * Keep pinging all clients, so that they don't disconnect mid-game
     */
    setInterval(() => {
      io.sockets.emit("ping", "ping");
    }, 5000);

    // attaches lobby related sockets

    socket.on("disconnect", () => {
      // disconnect from lobby
    });
  });
}

export default main_io