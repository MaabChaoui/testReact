import '@/styles/globals.css';

import type { AppProps } from 'next/app';


function NXT({ Component, pageProps }: AppProps) {
          return <Component {...pageProps} />;
}

export default NXT;
