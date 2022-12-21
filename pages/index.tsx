import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import { NextPageWithLayout } from './_app';
import MainHomeLayout from '@features/home/layouts/main';
import React, { ReactElement, ReactNode, useRef, useState } from 'react';
import { motion } from 'framer-motion';

import styles from './home.module.scss';
import SmallCard from '@features/home/components/hero/small-card';

import { HiBookOpen } from 'react-icons/hi';
import { BsChatSquareQuote } from 'react-icons/bs';
import { MdOutlineAnalytics } from 'react-icons/md';

import { RevealList, RevealWrapper } from 'next-reveal';

import DragCards from '@features/home/components/drag-cards'

const Home: NextPageWithLayout = () => {
  const [isMounted, setIsMounted] = useState(false)
  const liveTestRef = useRef(null)
  React.useEffect(() => {
    setIsMounted(true)
  }, [])



  if (!isMounted) return null

  return (
    <>
      <section className="section-one grid grid-cols-12 min-h-[90vh]">
        <div className="left col-span-6 flex flex-col items-center justify-center">
          <RevealWrapper duration={1000} origin="left">
            <h2 className="font-bold text-4xl leading-10 text-primary">Welcome to Pariksan Portal.</h2>
            <h3 className="font-medium text-2xl  leading-[3rem] text-primary ml-2">Nepal{"'"}s #1 Online Mock Test Site.</h3>
          </RevealWrapper>
        </div>
        <RevealWrapper duration={1000} origin='right' className="right col-span-6 flex flex-col items-center justify-center">
          <div className={`h-72 w-72 bg-transparent rounded-full shadow-xl relative`}>
            <div className="hero-image absolute bottom-[10px] left-[20px]">
              <Image src="/images/cta.png" className="z-0" alt="hero" width={250} height={250}></Image>
              <SmallCard className="top-40 -left-[105px] w-[8rem]  z-20">
                <p className="text-sm font-bold text-primary">500+</p>
                <p className="text-sm">Free Courses</p>
              </SmallCard>
              <SmallCard className="top-[200px] -right-[105px] w-[8rem] z-20">
                <p className="text-sm font-bold text-primary">1000+</p>
                <p className="text-sm">Institutions</p>
              </SmallCard>
              <SmallCard className="-bottom-[10px] w-[13rem] z-20">
                <p className="text-sm font-bold text-primary">2000+</p>
                <p className="text-sm">Students</p>
              </SmallCard>
            </div>
          </div>
        </RevealWrapper>
        <RevealWrapper duration={1000} origin='bottom' className="flex items-center justify-center col-span-12">
          <div className="flex border-2 rounded">
            <input type="text" className="input outline-none" placeholder="Search..." />
            <button className="btn h-12 btn-ghost rounded-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </RevealWrapper>
      </section>
      <section className="section-two mb-28">
        <h2 className="font-bold text-[2rem]">What We Offer</h2>
        <RevealList interval={100} delay={200} duration={1000} reset={false} className="cards grid grid-cols-12 gap-[6rem] my-6">
          <div className="card col-span-4 h-60 shadow-lg w-full bg-base-200" ref={liveTestRef}>
            <div className="card-body p-2 gap-0">
              <HiBookOpen className="text-primary h-16 w-24"></HiBookOpen>
              <div className="px-5 py-2">
                <p className="text-xl font-bold">Live Test</p>
                <p className="prose py-1 text-primary">
                  Register for the Exam you want to appear. You can register in single click for the exam of your choice from dashboard.
                </p>
              </div>
            </div>
          </div>
          <div className="card col-span-4 h-60 shadow-lg w-full bg-base-200">
            <div className="card-body p-2 gap-0">
              <MdOutlineAnalytics className="text-primary h-16 w-24"></MdOutlineAnalytics>
              <div className="px-5 py-2">
                <p className="text-xl font-bold">High Yield Questions</p>
                <p className="prose py-1 text-primary">
                  Take live test on time, you can take the missed test from dashboard. Live exams link appears only when the exam is live.
                </p>
              </div>
            </div>
          </div>
          <div className="card col-span-4 h-60 shadow-lg w-full bg-base-200">
            <div className="card-body p-2 gap-0">
              <BsChatSquareQuote className="text-primary mt-1 h-14 w-24"></BsChatSquareQuote>
              <div className="px-5 py-2">
                <p className="text-xl font-bold">Insightful Analytics</p>
                <p className="prose py-1 text-primary">
                  Register for the Exam you want to appear. You can register in single click for the exam of your choice from dashboard.
                </p>
              </div>
            </div>
          </div>
        </RevealList>
      </section>
      <section className="section-three mb-28">
        <h2 className="font-bold text-[2rem]">Our students are our biggest fans.</h2>
        <p className="text-primary prose">We don’t like to brag, but we don’t mind letting our students do it for us.
          Here are a few nice things folks have said about our services over the years.</p>
        <DragCards></DragCards>
      </section>
    </>
  );
};

export default Home;

Home.getLayout = (page: React.ReactElement) => {
  return <MainHomeLayout>{page}</MainHomeLayout>;
};
