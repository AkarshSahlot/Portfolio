import { useEffect } from 'react';
import Head from "next/head";
import AOS from "aos";

import 'bootstrap/dist/css/bootstrap.css'
import 'aos/dist/aos.css'

import '../styles/globals.scss'

import '/styles/header.scss'
import '/styles/outer.scss'
import '/styles/gooery.scss'
import '/styles/side-element.scss'
import '/styles/myself.scss'
import '/styles/projects.scss'
import '/styles/views-title.scss'
import '/styles/hover-image.scss'
import '/styles/window-screen.scss'
import '/styles/top-scrolled-bar.scss'
import '/styles/contact.scss'
import '/styles/cursor.scss'
import '/styles/pre-loader.scss'


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle");
    import("aos/dist/aos.js");
    AOS.init();
  }, [])
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
        <meta name="description" content="Akarsh Sahlot — Full Stack Developer. Building fast, modern web experiences with React and Next.js." />
        <meta name="keywords" content="Akarsh Sahlot, Full Stack Developer, React, Next.js, JavaScript, Portfolio" />

        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/192.png"
          rel="icon"
          type="image/png"
          sizes="192x192" />
        <link
          href="/icons/512.png"
          rel="icon"
          type="image/png"
          sizes="512x512" />
        <link rel="apple-touch-icon" href="/icons/192.png"></link>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
