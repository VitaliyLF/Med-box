import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

window.addEventListener('load', () => {
  const titleSections = document.querySelectorAll('.title-section');

  const animateTitleSection = (title) => {
    gsap.from(title, { opacity: 0, y: 20, duration: 0.6, delay: 0.3 });
  };

  titleSections.forEach((titleSection) => {
    ScrollTrigger.create({
      trigger: titleSection,
      start: 'top 90%',
      onEnter: () => animateTitleSection(titleSection),
    });
  });
});

const blockListItem = document.querySelectorAll('.block-list-line__item');

const animateblockListItem = (item) => {
  gsap.from(item, { opacity: 0, y: 100, duration: 0.6, delay: 0.3, start: 'top 400px' });
};

blockListItem.forEach((blockItem) => {
  gsap.to(blockListItem, {
    scrollTrigger: {
      trigger: blockItem,
      markers: true,
      scrub: true,
      toggleActions: 'restart pause resume none',
      start: 'top center',
      onEnter: () => animateblockListItem(blockItem),
    },
  });
});
