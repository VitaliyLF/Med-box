import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

(function () {
  const burger = document.querySelector('[data-burger]');
  const menu = document.querySelector('[data-menu]');
  const menuItems = document.querySelectorAll('[data-menu-item]');
  const menuText = document.querySelector('[data-menu-text]');

  burger.addEventListener('click', (e) => {
    burger.classList.toggle('header__burger--active');
    menu.classList.toggle('header__nav--active');

    if (menu.classList.contains('header__nav--active')) {
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Close menu');
      menuText.classList.add('is-hidden');

      setTimeout(() => {
        menuText.textContent = 'Close';
        menuText.classList.remove('is-hidden');
      }, 300);

      disableScroll();
    } else {
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Open menu');
      menuText.classList.add('is-hidden');

      setTimeout(() => {
        menuText.textContent = 'Menu';
        menuText.classList.remove('is-hidden');
      }, 300);

      enableScroll();
    }
  });

  menuItems.forEach((el) => {
    el.addEventListener('click', () => {
      closeMenu();
    });
  });

  const closeMenu = () => {
    burger.setAttribute('aria-expanded', 'false');
    burger.setAttribute('aria-label', 'Open menu');
    burger.classList.remove('header__burger--active');
    menu.classList.remove('header__nav--active');
    menuText.textContent = 'Menu';
    enableScroll();
  };
})();
