import { LazyMotion } from 'framer-motion';
import PlausibleProvider from 'next-plausible';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Footer } from '../components/footer';
import '../styles/globals.css';

const loadFramerMotionFeatures = () => import('../utils/framer-motion-features').then((res) => res.default);

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const PLAUSIBLE_ENABLED = process.env.NEXT_PUBLIC_PLAUSIBLE_ENABLED === 'true';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain={PLAUSIBLE_DOMAIN} enabled={PLAUSIBLE_ENABLED}>
      <div className="min-h-screen grid grid-rows-[auto,1fr,auto]">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover"
          />
        </Head>
        <LazyMotion strict features={loadFramerMotionFeatures}>
          <Component {...pageProps} />

          <Footer />
        </LazyMotion>
      </div>
    </PlausibleProvider>
  );
}
