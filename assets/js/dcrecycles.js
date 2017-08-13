document.getElementById('front-video').addEventListener('ended', videoEnd, false);

function videoEnd(e) {
  var videoObj = document.getElementById('front-video');
  var imageObj = document.getElementById('front-image');
  videoObj.classList.add('hidden');
  imageObj.classList.add('video-overlay').remove('hidden');
  //alert('video is over');
}
