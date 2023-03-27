import ErrorBoundary from '@/components/ErrorBoundary';
import Header from '@/components/Header';
import Head from '@/components/infra/Head';
import Spinner from '@/components/Spinner';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script';
import { Suspense } from 'react';
import { SWRConfig } from 'swr';
import { ContextAppWrapper } from '../contexts/admin/index';

const App = ({ Component, pageProps }: AppProps) => (
  <SWRConfig value={{ refreshInterval: 10 * 60 * 1000 }}>
    <Head>
      <title>{ process.env.NEXT_PUBLIC_CLAN_NAME }</title>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" type="image/png" href="/favicons/16x16.png" sizes="16x16"/>
      <link rel="icon" type="image/png" href="/favicons/32x32.png" sizes="32x32"/>
      <link rel="icon" type="image/png" href="/favicons/96x96.png" sizes="96x96"/>
      <link rel="icon" type="image/png" href="/favicons/192x192.png" sizes="192x192"/>
      <link rel="shortcut icon" href="/favicons/favicon.ico"/>
    </Head>
    <Header/>
    <ErrorBoundary>
      <Suspense fallback={ <Spinner/> }>
        <ContextAppWrapper>
          <Component {...pageProps}/>
        </ContextAppWrapper>
      </Suspense>
    </ErrorBoundary>
    <Script
      src="https://kit.fontawesome.com/22dad4dcbd.js"
      crossOrigin="anonymous"
    />
  </SWRConfig>
);

export default App;
