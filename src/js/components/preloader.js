window.onload = function () {
  document.body.classList.add('preloader-hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('preloader-hiding');
  }, 500);
};
