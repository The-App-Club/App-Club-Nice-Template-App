import * as THREE from 'three';

import vertexShader from '../shaders/vertex.glsl';
import fragmentShader from '../shaders/fragment.glsl';

class GLCanvas {
  constructor({container}) {
    this.container = container;
    this.init();
  }
  createRenderer = (width, height, dpr) => {
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(dpr, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0.0);
    renderer.outputEncoding = THREE.sRGBEncoding;
    return renderer;
  };

  init() {
    this.width = this.container.clientWidth;
    this.height = this.container.clientHeight;
    this.renderer = this.createRenderer(
      this.width,
      this.height,
      window.devicePixelRatio
    );
    this.canvas = this.renderer.domElement;
    this.container.appendChild(this.canvas);
    this.camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0, 10);
    this.scene = new THREE.Scene();
    this.time = 0;
    this.addObjects();
  }

  /**
   * シーンにオブジェクトを追加
   */
  addObjects() {
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: '#extension GL_OES_standard_derivatives : enable',
      },
      uniforms: {
        time: {value: this.time},
        mouse: {value: new THREE.Vector2(0, 0)},
        resolution: {value: new THREE.Vector2(this.width, this.height)},
      },
      transparent: true,
      vertexShader,
      fragmentShader,
    });
    this.geometry = new THREE.PlaneBufferGeometry(1, 1, 1, 1);
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  render(time) {
    this.time = time;
    this.material.uniforms.time.value = this.time;
    this.renderer.render(this.scene, this.camera);
  }

  setMouse(x, y) {
    this.material.uniforms.mouse.value.set(x, y);
  }

  resize(width, height, dpr) {
    this.width = width;
    this.height = height;
    this.material.uniforms.resolution.value.set(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(dpr, 2));
    this.renderer.setSize(this._width, this.height);
    this.camera.aspect = this.height / this.height;
    this.camera.updateProjectionMatrix();
  }
}

export {GLCanvas};
