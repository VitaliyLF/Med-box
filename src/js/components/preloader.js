// document.addEventListener('DOMContentLoaded', () => {
//   const mediaFiles = document.querySelectorAll('img, video');
//   const preloader = document.querySelector('.js-preloader');
//   const percents = document.querySelector('.js-preloader-precents');

//   let i = 0;

//   mediaFiles.forEach((file, index) => {
//     file.onload = () => {
//       i++;

//       if (i === mediaFiles.length) {
//         preloader.classList.add('preloader--hide');
//         percents.innerHTML = 100;
//       }
//     };
//   });
// });
