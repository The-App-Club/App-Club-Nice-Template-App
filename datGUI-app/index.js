function initialize() {}

let stats;
stats = new Stats();
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = 0;
stats.domElement.style.top = 0;
document.body.appendChild(stats.domElement);

let leafInfoList = [];
let parameter = {
  from: 'center',
  axis: 'both',
  easing: 'none',
  color: `#fff`,
  x: 110,
  y: 110,
  width: 700,
  height: 700,
  minLeafSize: 80,
  maxLeafSize: 100,
};

let controllerInfo = {
  From: parameter.from,
  Axis: parameter.axis,
  Easing: parameter.easing,
  Color: parameter.color,
  'Start OffsetX': parameter.x,
  'Start OffsetY': parameter.y,
  'Workspace Width': parameter.width,
  'Workspace Height': parameter.height,
  'Min Section Size': parameter.minLeafSize,
  'Max Section Size': parameter.maxLeafSize,
  'Workspace Clear': initialize,
  'File Upload': () => {
    // http://zhangwenli.com/blog/2015/05/29/upload-images-with-dat-gui/
    const fileDom = document.querySelector('.file');
    fileDom.addEventListener('change', async (event) => {
      const fileObject = event.target.files[0];
      const webURL = URL.createObjectURL(fileObject);
      URL.revokeObjectURL(webURL);
      for (let i in gui.__controllers) {
        gui.__controllers[i].updateDisplay();
      }
    });
    fileDom.click();
  },
};

const gui = new dat.GUI();
gui.width = 300;
gui.add(controllerInfo, 'Workspace Clear');
gui.add(controllerInfo, 'File Upload');
gui
  .add(controllerInfo, 'From', ['center', 'end', 'edges', 'random'])
  .onChange((event) => {
    detectChangeParameter(event, 'From');
  });

gui.add(controllerInfo, 'Axis', ['both', 'x', 'y']).onChange((event) => {
  detectChangeParameter(event, 'Axis');
});

gui
  .add(controllerInfo, 'Easing', ['none', 'power3.inOut', 'power2.in'])
  .onChange((event) => {
    detectChangeParameter(event, 'Easing');
  });
gui.addColor(controllerInfo, 'Color').onChange((event) => {
  detectChangeParameter(event, 'Color');
});
gui.add(controllerInfo, 'Start OffsetX', 1, 500, 1).onChange((event) => {
  detectChangeParameter(event, 'Start OffsetX');
});
gui.add(controllerInfo, 'Start OffsetY', 1, 500, 1).onChange((event) => {
  detectChangeParameter(event, 'Start OffsetY');
});
gui
  .add(controllerInfo, 'Workspace Width', 1, window.innerWidth, 1)
  .onChange((event) => {
    detectChangeParameter(event, 'Workspace Width');
  });
gui
  .add(controllerInfo, 'Workspace Height', 1, window.innerHeight, 1)
  .onChange((event) => {
    detectChangeParameter(event, 'Workspace Height');
  });
gui
  .add(controllerInfo, 'Min Section Size', 1, window.innerHeight, 1)
  .onChange((event) => {
    detectChangeParameter(event, 'Min Section Size');
  });
gui
  .add(controllerInfo, 'Max Section Size', 1, window.innerHeight, 1)
  .onChange((event) => {
    detectChangeParameter(event, 'Max Section Size');
  });

function detectChangeParameter(event, keyName) {
  if (keyName === 'Color') {
    parameter.color = event;
  }
  if (keyName === 'Start OffsetX') {
    parameter.x = event;
  }
  if (keyName === 'Start OffsetY') {
    parameter.y = event;
  }
  if (keyName === 'Workspace Width') {
    parameter.width = event;
  }
  if (keyName === 'Workspace Height') {
    parameter.height = event;
  }
  if (keyName === 'Min Section Size') {
    parameter.minLeafSize = event;
  }
  if (keyName === 'Max Section Size') {
    parameter.maxLeafSize = event;
  }
  if (keyName === 'From') {
    parameter.from = event;
  }
  if (keyName === 'Axis') {
    if (event === 'both') {
      parameter.axis = null;
    } else {
      parameter.axis = event;
    }
  }
  if (keyName === 'Easing') {
    parameter.easing = event;
  }
}

function loop() {
  requestAnimationFrame(loop);
  stats.begin();
  stats.end();
}

loop();
