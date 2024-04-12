window.addEventListener('load', function () {
  const loaderWrapper = document.querySelector('.loader-wrapper');
  const content = document.querySelector('.content');

  loaderWrapper.classList.add('loaded');
  setTimeout(() => {
    content.style.display = 'block';
  }, 1500); // Adjust the delay as needed
});
