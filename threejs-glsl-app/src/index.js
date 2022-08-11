import './styles/index.scss';

import {View} from './webgl/View';

class App {
  constructor() {
    const canvasBox = document.getElementById('webgl-canvas');
    this.view = new View(canvasBox);

    window.addEventListener('resize', this.resize);
    this.update(0);
  }

  resize = () => {
    this.view.onWindowResize(window.innerWidth, window.innerHeight);
  };

  update = (t) => {
    this.view.update(t / 1000);
    requestAnimationFrame(this.update);
  };
}

const app = new App();
