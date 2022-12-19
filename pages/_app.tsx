import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { NextPage } from 'next';

import { ThemeProvider } from 'next-themes'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  // pageProps: { session?: Session };
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <ThemeProvider>
      {/* <AuthProvider session={session}> */}
      {getLayout(<Component {...pageProps} />)}
      {/* </AuthProvider> */}
    </ThemeProvider>
  );
}
export default MyApp