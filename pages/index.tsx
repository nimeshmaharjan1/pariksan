import { NextPageWithLayout } from './_app';
import MainHomeLayout from '@features/home/layouts/main';
import React, { ReactElement, ReactNode, useRef, useState } from 'react';

import styles from './home.module.scss';
import { RevealWrapper } from 'next-reveal';

import HeroSm from '@features/home/components/hero/hero-sm';

const SectionOne = dynamic(() => import('@features/home/layouts/lg/sections/section-one'));
const SectionTwo = dynamic(() => import('@features/home/layouts/lg/sections/section-two'));
const SectionThree = dynamic(() => import('@features/home/layouts/lg/sections/section-three'));

import dynamic from 'next/dynamic';

const Home: NextPageWithLayout = () => {
  const [isMounted, setIsMounted] = useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <div className="hidden lg:block">
        <SectionOne></SectionOne>

        <SectionTwo></SectionTwo>

        <SectionThree></SectionThree>
      </div>
      <div className="block lg:hidden">
        <RevealWrapper duration={1000} origin="left">
          <h2 className="font-bold text-4xl prose text-primary text-center">Welcome to Pariksan Portal.</h2>
          <h3 className="font-medium text-lg leading-[2rem] my-2 text-center text-primary ml-2">Nepal{"'"}s #1 Online Mock Test Site.</h3>
        </RevealWrapper>
        <div className="text-center mt-4 mb-0">
          <button className="btn btn-primary uppercase">Sign In</button>
        </div>
        <div className="flex items-center justify-center">
          <HeroSm></HeroSm>
        </div>
      </div>
    </>
  );
};

export default Home;

Home.getLayout = (page: React.ReactElement) => {
  return <MainHomeLayout>{page}</MainHomeLayout>;
};
