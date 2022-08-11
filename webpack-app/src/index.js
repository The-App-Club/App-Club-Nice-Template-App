import './styles/index.scss';

import {Hero} from './library';

import sampleVideo from './assets/video/sample.mp4';

import sampleMusic from './assets/music/IDLMs.mp3';

import Data from './assets/xml/sample.xml';
import Notes from './assets/csv/sample.csv';

import json from './assets/json/sample.json5';

import yaml from './assets/yaml/sample.yaml';

import toml from './assets/toml/sample.toml';

const hero = new Hero('hoge', 12);

console.log(hero.show());

hero.setAge(23);

console.log(hero.show());

const hero2 = new Hero('roro', 22);

console.log(hero2.show());

hero2.setAge(23);

console.log(hero2.show());

console.log(json.title);
console.log(yaml);
console.log(toml);

console.log(Data);
console.log(Notes);

import sampleSvg from './assets/svg/sample.svg';

console.log(sampleSvg);

console.log(sampleMusic);

console.log(sampleVideo);

import SlackImage from './assets/image/SlackImage.png';

console.log('Hello World!');

console.log(SlackImage);

const video = document.createElement('video');
video.controls = 'true';
video.src = sampleVideo;
document.body.appendChild(video);

const audio = new Audio(sampleMusic);
document.body.appendChild(audio);

const myIcon = new Image();

myIcon.src = SlackImage;

document.body.appendChild(myIcon);

console.log('unko');

console.log([...document.querySelectorAll('p')]);
