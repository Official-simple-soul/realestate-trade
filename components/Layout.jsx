import Head from 'next/head';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer'

export default function Layout({ title, children }) {
  return (
    <>
      <div className="">
        <Head>
          <title>{title ? title : 'real-estate'}</title>
          <meta name="description" content="Real Estate Trade" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="">{children}</main>
        <Footer />
      </div>
    </>
  );
}
