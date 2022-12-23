import '../styles/globals.scss';
import '../styles/horizontal-scrolling/index.scss';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';

import { ThemeProvider } from 'next-themes';

import { withTRPC } from '@trpc/next';
import { loggerLink } from '@trpc/client/links/loggerLink';
import { httpBatchLink } from '@trpc/client/links/httpBatchLink';
import SuperJSON from 'superjson';

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

export default withTRPC({
  config({ ctx }) {
    const url = process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/pages/api/trpc`
      : 'https://localhost:3000/pages/api/trpc';

    const links = [
      loggerLink(),
      httpBatchLink({
        url,
      }),
    ];
    return {
      links,
      queryClientConfig: {
        defaultOptions: {
          queries: {
            staleTime: 60,
          },
        },
      },
      headers() {
        if (ctx?.req) {
          return {
            ...ctx.req.headers,
            'x-ssr': '1',
          };
        }
        return {};
      },
      transformer: SuperJSON,
    };
  },
  ssr: true,
})(MyApp);
