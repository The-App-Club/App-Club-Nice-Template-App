import * as React from 'react';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { HamburgerIcon } from '../icons/Hamburger';

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const StyledButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  border-radius: 50%;
  cursor: pointer;
  width: 50px;
  height: 50px;
  z-index: 1;
  position: fixed;
  @media screen and (min-width: 769px) {
    top: 0;
    left: 0;
  }
  @media screen and (max-width: 768px) {
    bottom: 10px;
    right: 10px;
  }
`;

const MenuToggle = ({ toggle }) => {
  return (
    <StyledButton
      onClick={() => {
        // https://stackoverflow.com/questions/9280258/prevent-body-scrolling-but-allow-overlay-scrolling
        const state = window
          .getComputedStyle(document.body)
          .getPropertyValue('overflow-y');
        if (state === 'visible') {
          document.body.style.overflowY = 'hidden';
        }
        if (state === 'hidden') {
          document.body.style.overflowY = 'visible';
        }
        toggle();
      }}
    >
      <HamburgerIcon></HamburgerIcon>
    </StyledButton>
  );
};

export { MenuToggle };
