import * as THREE from 'three';

import {Shape} from './Shape';

class View {
  constructor(canvasElem) {
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvasElem,
      antialias: true,
    });
    this.camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    this.camera.position.z = 15;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.TextureLoader().load(
      './assets/image/SlackImage.png'
    );
    this.torus = new Shape(this.scene);

    // Set initial sizes
    this.onWindowResize(window.innerWidth, window.innerHeight);
  }

  onWindowResize(vpW, vpH) {
    this.renderer.setSize(vpW, vpH);
    this.camera.aspect = vpW / vpH;
    this.camera.updateProjectionMatrix();
  }

  update(secs) {
    this.torus.update(secs);
    this.renderer.render(this.scene, this.camera);
  }
}

export {View};
