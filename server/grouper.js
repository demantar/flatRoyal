(() => {
  let roomname = 0;
  let roompop = 0;
  module.exports = async (socket, io) => {
    socket.join(roomname + "");
    roompop ++;
    if (roompop == 2) {
      console.log("group formed");
      io.to(roomname + "").emit("message", "Group found");
      roomname ++;
      roompop = 0;
    }
  };
})();
