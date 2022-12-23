import { RevealList } from 'next-reveal';
import React from 'react';
import { BsChatSquareQuote } from 'react-icons/bs';
import { HiBookOpen } from 'react-icons/hi';
import { MdOutlineAnalytics } from 'react-icons/md';

const SectionTwo = () => {
  return (
    <section className="section-two mb-28">
      <h2 className="font-bold text-[2rem]">What We Offer</h2>
      <RevealList interval={100} delay={200} duration={1000} reset={false} className="cards grid grid-cols-12 gap-[6rem] my-6">
        <div className="card col-span-4 h-60 shadow-lg w-full bg-base-200">
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
  );
};

export default SectionTwo;
