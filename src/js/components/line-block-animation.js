import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

ScrollTrigger.defaults({
  toggleActions: 'restart pause resume none',
});

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

const animateBlockListItem = (item, direction) => {
  const opacityValue = direction === 1 ? 1 : 0;
  const yValue = direction === 1 ? 0 : 100;

  gsap.to(item, {
    opacity: opacityValue,
    y: yValue,
    duration: 0.6,
    delay: 0.3,
    ease: 'back.out(1.8)',
  });
};

blockListItem.forEach((blockItem) => {
  gsap.to(blockItem, {
    opacity: 0,
    scrollTrigger: {
      trigger: blockItem,
      start: 'top 65%',
      end: 'bottom top',
      markers: true,
      onToggle: ({ isActive }) => animateBlockListItem(blockItem, isActive ? 1 : -1),
    },
  });
});
