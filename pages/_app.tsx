import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { RestProvider } from './context';
import '@fortawesome/fontawesome-svg-core/styles.css'; //importing font awesome css
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RestProvider>
        <Layout title="Homepage">
          <Component {...pageProps} />
        </Layout>
      </RestProvider>
    </>
  );
}
