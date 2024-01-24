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

const enterAnimateblockListItem = (item) => {
  gsap.to(item, { opacity: 1, y: 0, duration: 0.6, delay: 0.3, ease: 'back.out(1.8)' });
};

const leaveAnimateblockListItem = (item) => {
  gsap.to(item, { opacity: 0, y: 100, duration: 0.6, delay: 0.3, ease: 'back.out(1.8)' });
};

blockListItem.forEach((blockItem) => {
  gsap.to(blockItem, {
    opacity: 0,
    scrollTrigger: {
      trigger: blockItem,
      markers: true,
      start: 'top 65%',
      end: 'bottom top',
      onEnter: () => enterAnimateblockListItem(blockItem),
      onLeaveBack: () => leaveAnimateblockListItem(blockItem),
    },
  });
});
