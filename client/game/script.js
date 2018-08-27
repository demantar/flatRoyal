let socket;

let $messageBox;

function setup() {
  let cnv = createCanvas(550, 400);
  cnv.parent("canvasContainer");
  background(100);

  $messageBox = $("#messageBox")

  socket = io();

  socket.on("message", (msg) => {
    console.log(msg)
    $messageBox.html(msg);
  });
}
