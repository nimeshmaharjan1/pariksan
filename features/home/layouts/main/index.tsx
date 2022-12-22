import React, { ReactNode } from 'react';
import HomeHeader from '../lg/header';
import HomeFooter from '../lg/footer';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import SmHeader from '../sm/header';
import SmFooter from '../sm/footer';

const inter = Inter({ subsets: ['latin'] });

const MainHomeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Pariksan</title>
        <link rel="icon" type="image/png" href="/logo/logo-sm.png" />
        <meta
          name="description"
          content="Pariksan is a web application through which users are able to take mock tests online or can be used by any organization for their own mock test purposes."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={`hidden lg:flex flex-col justify-between min-h-screen ${inter.className}`}>
        <HomeHeader></HomeHeader>
        <main className="flex-1 py-4 container">{children}</main>
        <HomeFooter></HomeFooter>
      </div>
      <div className={`flex lg:hidden flex-col justify-between min-h-screen ${inter.className}`}>
        <SmHeader></SmHeader>
        <main className="flex-1 py-4 container">{children}</main>
        {/* <SmFooter></SmFooter> */}
      </div>
    </>
  );
};

export default MainHomeLayout;
