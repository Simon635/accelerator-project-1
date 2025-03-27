document.getElementById('play-button').addEventListener('click', () => {
  const videoContainer = document.getElementById('video-container');

  const iframe = document.createElement('iframe');
  iframe.width = '100%';
  iframe.height = '100%';
  iframe.src = 'https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1&rel=0';
  iframe.allow = 'autoplay; encrypted-media';
  iframe.allowFullscreen = true;
  iframe.frameBorder = '0';

  videoContainer.innerHTML = '';
  videoContainer.appendChild(iframe);
});
