import './styles/index.scss';
import {gsap} from 'gsap';
const removedDomList = [...document.querySelectorAll('.removed')];

// https://greensock.com/docs/v3/GSAP/Timeline

function handleMouseOver(e, decriptionId) {
  const targetDom = e.target;
  if (targetDom.dataset.descriptionId === decriptionId) {
    const asideDom = document.querySelector(
      `aside[data-description-id="${decriptionId}"]`
    );
    gsap.to(asideDom, {opacity: 1});
  }
}

function handleMouseLeave(e, decriptionId) {
  const targetDom = e.target;
  if (targetDom.dataset.descriptionId === decriptionId) {
    const asideDom = document.querySelector(
      `aside[data-description-id="${decriptionId}"]`
    );
    gsap.to(asideDom, {opacity: 0});
  }
}

for (let index = 0; index < removedDomList.length; index++) {
  const removedDom = removedDomList[index];
  const asideDom = document.createElement('aside');
  const description = removedDom.getAttribute('title');
  const descriptionId = `description-${index + 1}`;
  asideDom.setAttribute('data-description-id', descriptionId);
  asideDom.innerHTML = description;
  const removedDomTop = removedDom.getBoundingClientRect().y + window.scrollY;
  asideDom.style.top = `${removedDomTop}px`;
  document.body.appendChild(asideDom);

  removedDom.addEventListener('mouseover', (e) => {
    handleMouseOver(e, descriptionId);
  });
  removedDom.addEventListener('mouseleave', (e) => {
    handleMouseLeave(e, descriptionId);
  });
}
