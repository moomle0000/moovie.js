var demo = new Moovie({
  selector: "#Player",
  icons: {
    path: "https://raw.githubusercontent.com/BMSVieira/moovie.js/main/icons/"
  }
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
