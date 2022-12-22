import MainLogo from '@shared/components/main-logo';
import ThemeToggler from '@shared/components/theme-toggler';
import { RevealWrapper } from 'next-reveal';
import React from 'react';

const SmHeader = () => {
  return (
    <RevealWrapper
      origin="top"
      delay={300}
      duration={1500}
      distance="500px"
      reset={false}
      viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
      className="wrapper h-[4rem] shadow sticky z-40 backdrop-blur top-0"
    >
      <div className="grid grid-cols-12 items-center h-full gap-1 overflow-x-hidden">
        <section className="logo col-span-10">
          <button className="btn btn-ghost h-12 font-bold text-xl md:text-2xl gap-2 text-primary">
            <MainLogo></MainLogo>
            Pariksan
          </button>
        </section>
        <nav className="col-span-2 ml-2 flex gap-3">
          <ThemeToggler></ThemeToggler>
        </nav>
      </div>
    </RevealWrapper>
  );
};

export default SmHeader;
