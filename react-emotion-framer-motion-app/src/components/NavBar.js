import styled from '@emotion/styled';
import { css } from '@emotion/css';

import { useRef } from 'react';
import { useDimensions } from '../hooks/useDimensions';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle } from './MenuToggle';
import { Navigation } from './Navigation';

const routeInfoList = [
  {
    href: '/',
    title: 'home',
    icon: 'e88a',
  },
  {
    href: '/about',
    title: 'about',
    icon: 'e87c',
  },
  {
    href: '/contact',
    title: 'contact',
    icon: 'e0ba',
  },
];

function NavBar() {
  const sidebar = {
    open: () => ({
      width: '300px',
    }),
    closed: {
      width: 0,
    },
  };

  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
    >
      <motion.div
        className={css`
          background: #fff;
          bottom: 0;
          left: -40px;
          position: absolute;
          top: 0;
          height: 100000%;
          z-index: 1;
        `}
        transition={{ delay: 0.05 }}
        variants={sidebar}
      />
      <Navigation routeInfoList={routeInfoList} toggle={() => toggleOpen()} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

export { NavBar };
