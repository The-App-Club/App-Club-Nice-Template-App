import * as React from 'react';
import { motion } from 'framer-motion';
import { MenuItem } from './MenuItem';
import { css } from '@emotion/css';

const variants = {
  open: {
    zIndex: 1,
    display: 'block',
    transition: { staggerChildren: 0.07 },
  },
  closed: {
    zIndex: -1,
    display: 'none',
    transition: { staggerChildren: 0.05 },
  },
};

const Navigation = ({ routeInfoList, toggle }) => {
  return (
    <motion.ul
      className={css`
        padding: 25px;
        position: absolute;
        top: ${window.scrollY}px;
        width: 230px;
      `}
      variants={variants}
    >
      {routeInfoList.map((routeInfo, i) => (
        <MenuItem i={i} routeInfo={routeInfo} toggle={toggle} key={i} />
      ))}
    </motion.ul>
  );
};

export { Navigation };
