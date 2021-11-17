var demo = new Moovie({
  selector: "#Player",
  icons: {
    path: "https://raw.githubusercontent.com/BMSVieira/moovie.js/main/icons/"
  }
});
var video = demo.video;
if (Hls.isSupported()) {
  var hls = new Hls();
  hls.loadSource(
    "https://abra--74cad8b8.api.webtor.io/ac418db33fa5cea4fab11bc58008fe08f291c9be/The%20Shawshank%20Redemption%20(1994)%2FThe%20Shawshank%20Redemption%201994.720p.BRRip.x264.YIFY.mp4~tc/The%20Shawshank%20Redemption%201994.720p.BRRip.x264.YIFY.mp4~vod/hls/3688b4245ba3db4820cd5f8adaed17ee/index.m3u8?user-id=89ee5c41b28a5b320158f38b01c143cf&download-id=02e454184396456706a9b41f10dee125&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIEhlYWRsZXNzQ2hyb21lLzkzLjAuNDU3Ny4wIFNhZmFyaS81MzcuMzYiLCJyZW1vdGVBZGRyZXNzIjoiMTUuMTg1LjExNS4zMCIsImRvbWFpbiI6IndlYnRvci5pbyIsImV4cCI6MTYzNzc2NDAzNCwic2Vzc2lvbklEIjoibW5vaGZpd0FybndkdGhodWhSOTZ2ak5TbkpFNzFRTDciLCJhZHMiOnRydWUsInJhdGUiOiIxME0iLCJyb2xlIjoibm9ib2R5In0.9ZnWHEmgWYIitQVSamY50OyChuQwpElKL6MVBPcrVsc&api-key=8acbcf1e-732c-4574-a3bf-27e6a85b86f1"
  );
  hls.attachMedia(video);
  hls.on(Hls.Events.MANIFEST_PARSED, function () {
    console.log("Ready to play!");
  });
}
