import {GLCanvas} from './GLCanvas';

class App {
  constructor({element}) {
    this.element = element;
    this.init();
  }

  init() {
    this.canvas = new GLCanvas({
      container: this.element.querySelector(`[data-canvas="container"]`),
    });
    console.log(this.canvas);

    this.reqID = null;
    // lit風の割り付け方
    this.boundOnAnimationFrame = this.onAnimationFrame.bind(this);
    this.boundOnMouseMove = this.onMouseMove.bind(this);
    this.boundOnResize = this.onResize.bind(this);

    this.addListeners();

    this.onAnimationFrame(performance.now());
  }

  addListeners() {
    window.addEventListener('mousemove', this.boundOnMouseMove);
    window.addEventListener('resize', this.boundOnResize);
  }

  /**
   * RAFループ
   */
  onAnimationFrame(time) {
    const t = time / 1000;
    this.canvas.render(t);
    this.reqID = window.requestAnimationFrame(this.boundOnAnimationFrame);
  }

  onMouseMove({clientX, clientY}) {
    // https://qiita.com/yukiB/items/31a9e9e600dfb1f34f76
    const x = clientX / window.innerWidth;
    const y = 1 - clientY / window.innerHeight;
    this.canvas.setMouse(x, y);
  }

  onResize() {
    this.canvas.resize(
      window.innerWidth,
      window.innerHeight,
      window.devicePixelRatio
    );
  }

  removeListeners() {
    if (this.reqID !== null) {
      window.cancelAnimationFrame(this.reqID);
    }

    window.removeEventListener('mousemove', this.boundOnMouseMove);
    window.removeEventListener('resize', this.boundOnResize);
  }

  destroy() {
    this.removeListeners();
  }
}

export {App};
