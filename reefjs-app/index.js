import Reef from 'reefjs';
import Juicr from 'juicr.js';

const juicr = new Juicr({initialState: {queue: [1, 2, 3, 4, 5]}});

// https://reefjs.com/
// https://github.com/alexfoxy/juicr.js/blob/master/README.md
// https://codepen.io/alexfoxy/pen/wZLWpp

const app = new Reef('#app', {
  data: {},
  template: function (props) {
    var html = `
      <div class="workspace">
      </div>
    `;
    return html;
  },
});

const jobItem = new Reef('.workspace', {
  data: app.data,
  template: (props) => {
    return `<ul class="item-list">
      ${juicr._state.queue
        .map((item) => {
          console.log(item);
          return `<li><div class="item">${item}</div></li>`;
        })
        .join('')}
    </ul>`;
  },
  attachTo: [app],
});

const addButtonDom = document.querySelector('.add');
addButtonDom.addEventListener('click', () => {
  juicr._state.queue.push(Math.random());
  juicr.dispatch('addItem', {
    aaa: 'aaaaaaaaaaa',
    num: 123,
    hoge: {bbb: 'bbbb'},
  });
});

juicr.action('addItem', (state, props) => {
  console.log(state, props, juicr._state.queue);
  jobItem.render();
});

app.render();
