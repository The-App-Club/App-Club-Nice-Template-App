import React from 'react';
import { useState, useEffect } from 'react';
import { decideOrientation } from '@/plugins/shortHandDetectResize.js';
import { decideDeviceType } from '@/plugins/shortHanddetectDeviceType.js';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

import Head from 'next/head';
import { Layout } from '@/components/Layout';

function VideoPage() {
  const meta = {
    title: 'Video Page',
    description: 'Welcome Video Page',
  };

  const [isSp, setSpDeviceState] = useState(false);
  const [isPortrait, setDeviceOrientationState] = useState(false);

  function handleChangeDeviceType() {
    const decideDeviceTypeResult = decideDeviceType();
    switch (decideDeviceTypeResult) {
      case 'isPc':
        setSpDeviceState(false);
        break;

      case 'isTablet':
        setSpDeviceState(false);
        break;

      case 'isMobile':
        setSpDeviceState(true);
        break;

      default:
        break;
    }
  }

  function handleResize(e) {
    setDeviceOrientationState(decideOrientation());
    handleChangeDeviceType();
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    // https://www.pluralsight.com/guides/how-to-cleanup-event-listeners-react
    return function cleanUpListener() {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, []);

  if (isSp) {
    return (
      <Layout params={{ page: 'video-page' }}>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
        </Head>
        <h2>Video Page</h2>
      </Layout>
    );
  } else {
    return (
      <Layout params={{ page: 'video-page' }}>
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
        </Head>
        <h2>Video Page</h2>
      </Layout>
    );
  }
}

export default VideoPage;
