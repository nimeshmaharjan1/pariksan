import MainLogo from '@shared/components/main-logo';
import ThemeToggler from '@shared/components/theme-toggler';
import { RevealWrapper } from 'next-reveal';
import React, { useEffect, useState } from 'react';

const HomeHeader = () => {
  return (
    <RevealWrapper
      origin="top"
      delay={300}
      duration={1500}
      distance="500px"
      reset={false}
      viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
      className="wrapper h-[5rem] shadow sticky z-40 backdrop-blur top-0"
    >
      <div className="container grid grid-cols-12 items-center h-full gap-1">
        <section className="logo col-span-9">
          <button className="btn btn-ghost h-12 font-bold text-3xl gap-2 text-primary">
            <MainLogo></MainLogo>
            Pariksan
          </button>
        </section>
        <nav className="col-span-3 flex gap-3">
          <button className="btn btn-primary">Sign Up</button>
          <button className="btn btn-ghost">Sign In</button>
          <ThemeToggler></ThemeToggler>
        </nav>
      </div>
    </RevealWrapper>
  );
};

export default HomeHeader;
