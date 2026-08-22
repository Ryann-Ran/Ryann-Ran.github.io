(function () {
  "use strict";

  var characterCodes = [
    121, 117, 114, 97, 110, 119, 97, 110, 103, 50, 53, 64, 115,
    116, 117, 46, 112, 107, 117, 46, 101, 100, 117, 46, 99, 110
  ];

  function drawAddress(canvas) {
    var context = canvas.getContext("2d");
    var parentStyle = window.getComputedStyle(canvas.parentElement);
    var canvasStyle = window.getComputedStyle(canvas);
    var fontSize = parseFloat(parentStyle.fontSize);
    var pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    var address = String.fromCharCode.apply(null, characterCodes);
    var font = "600 " + fontSize + "px " + parentStyle.fontFamily;

    context.font = font;
    var metrics = context.measureText(address);
    var width = Math.ceil(metrics.width + 2);
    var height = Math.ceil(fontSize * 1.45);

    canvas.width = Math.ceil(width * pixelRatio);
    canvas.height = Math.ceil(height * pixelRatio);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    context.scale(pixelRatio, pixelRatio);
    context.font = font;
    context.fillStyle = canvasStyle.color;
    context.textBaseline = "middle";
    context.fillText(address, 1, height / 2);
  }

  function drawAllAddresses() {
    Array.prototype.forEach.call(
      document.querySelectorAll("[data-email-canvas]"),
      drawAddress
    );
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(drawAllAddresses);
  } else {
    drawAllAddresses();
  }

  window.addEventListener("resize", drawAllAddresses);
})();
