// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
import Typed from 'typed.js';

const heroTyped = () => {
    if (!document.querySelector('.typed')) return;
    let words = document.querySelector('.typed').dataset.words;
    const typed = new Typed('.typed', {
      strings: words.split(','),
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
    });
  };
heroTyped();