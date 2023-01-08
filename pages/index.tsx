import Head from 'next/head';
import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import BackgroundNoise from '../components/BackgroundNoise/BackgroundNoise';
import BackgroundScene from '../components/BackgroundScene/BackgroundScene';
import Community from '../components/Community/Community';
import Example from '../components/Example/Example';
import Footer from '../components/Footer/Footer';
import Free from '../components/Free/Free';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Stats from '../components/Stats/Stats';
import Support from '../components/Support/Support';
import Tariffs from '../components/Tariffs/Tariffs';
import ScrollTriggerProxy from '../utils/ScrollTriggerProxy';

export default function Home() {
  const containerRef = useRef(null);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <ScrollTriggerProxy />
        <main
          ref={containerRef}
          className="main"
          id="smooth-scroll"
          data-scroll-container
        >
          <BackgroundNoise></BackgroundNoise>
          <BackgroundScene></BackgroundScene>
          <Header></Header>
          <Hero></Hero>
          <Stats></Stats>
          <Example></Example>
          <Tariffs></Tariffs>
          <Community></Community>
          <Support></Support>
          <Free></Free>
          <Footer></Footer>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}
