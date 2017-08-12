document.getElementById('front-video').addEventListener('ended', videoEnd, false);

function videoEnd(e) {
  alert('video is over');
}
