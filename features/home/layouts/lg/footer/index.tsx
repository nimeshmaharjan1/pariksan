import MainLogo from '@shared/components/main-logo';
import React from 'react';

const HomeFooter = () => {
  return (
    <>
      {' '}
      <footer className="container drop-shadow-lg border-t-2">
        <div className=" grid grid-cols-12 py-16">
          <div className="col-span-3 flex items-center justify-start">
            <button className="btn btn-ghost h-12 font-bold text-2xl gap-2 text-primary">
              <MainLogo></MainLogo>
              Pariksan
            </button>
          </div>
          <div className="col-span-3">
            <p className="font-bold pb-2 text-lg">Navigation</p>
            <div className="flex flex-col gap-1">
              <p>Test</p>
              <p>Courses</p>
              <p>About Us</p>
              <p>Contact Us</p>
            </div>
          </div>
          <div className="col-span-3">
            <p className="font-bold pb-2 text-lg">Resources</p>
            <div className="flex flex-col gap-1">
              <p>Blogs</p>
              <p>News and Updates</p>
              <p>Career</p>
            </div>
          </div>
          <div className="col-span-3">
            <p className="font-bold pb-2 text-lg">Stay up to date</p>
            <p className="prose">Subscribe to our newsletter to get the latest updates and news.</p>
          </div>
        </div>
      </footer>
      <div className="bg-neutral h-16 text-primary">
        <div className="container grid grid-cols-12 h-full items-center">
          <div className="col-span-8">Pariksan Portal. All rights reserved.</div>
          <div className="col-span-4 flex gap-3">
            <button className="btn btn-ghost">Terms & Conditions</button>
            <button className="btn btn-ghost">Privacy Policy</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeFooter;
