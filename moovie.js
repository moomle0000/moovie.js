document.addEventListener("DOMContentLoaded", function() {
   var demo = new Moovie({
     selector: "#example",
     dimensions: {
          width: "100%"
     }
   });
});
var video = demo.video;
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(document.querySelector("#Player > source").src);
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    console.log("Ready to play!");
  });
}

