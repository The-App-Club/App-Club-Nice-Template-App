import * as React from 'react';
import { motion } from 'framer-motion';
import { Link, useHistory } from 'react-router-dom';
import { css } from '@emotion/css';

const variants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

const MenuItem = ({ i, routeInfo, toggle }) => {
  const history = useHistory();

  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className={css`
        align-items: center;
        cursor: pointer;
        display: flex;
        list-style: none;
        margin: 10px 0 20px 20px;
        z-index: 2;
      `}
      transition={{ delay: 0.1 }}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
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
        // https://stackoverflow.com/questions/9280258/prevent-body-scrolling-but-allow-overlay-scrolling
        history.push(`${routeInfo.href}`);
      }}
    >
      <div
        className={css`
          position: relative;
          border-radius: 50%;
          margin-right: 20px;
          height: 40px;
          width: 40px;
          &::before {
            position: absolute;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
            content: '\\${routeInfo.icon}';
            font-family: 'Material Icons';
            height: 30px;
            width: 30px;
            font-size: calc(30px);
          }
        `}
        style={style}
      ></div>
      <div
        className={css`
          border-radius: 5px;
          flex: 1;
          font-size: 1.25rem;
          height: 40px;
          width: 200px;
          display: flex;
          justify-content: center;
          align-items: center;
        `}
        style={style}
      >
        <Link
          className={css`
            text-decoration: none;
          `}
          to={routeInfo.href}
        >
          {routeInfo.title}
        </Link>
      </div>
    </motion.li>
  );
};

export { MenuItem };
