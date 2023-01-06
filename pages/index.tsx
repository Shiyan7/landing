import Head from 'next/head';

import BackgroundNoise from '../components/BackgroundNoise/BackgroundNoise';
import BackgroundScene from '../components/BackgroundScene/BackgroundScene';
import Community from '../components/Community/Community';
import Example from '../components/Example/Example';
import Footer from '../components/Footer/Footer';
import Free from '../components/Free/Free';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Support from '../components/Support/Support';
import Tariffs from '../components/Tariffs/Tariffs';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BackgroundNoise></BackgroundNoise>
      <BackgroundScene></BackgroundScene>
      <Header></Header>
      <main className="main">
        <div className="container">
          <Hero></Hero>
          <Example></Example>
          <Tariffs></Tariffs>
          <Community></Community>
          <Support></Support>
          <Free></Free>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}
