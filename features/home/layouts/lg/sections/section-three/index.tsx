import DragCards from '@features/home/components/drag-cards';
import React from 'react';

const SectionThree = () => {
  return (
    <section className="section-three mb-28">
      <h2 className="font-bold text-[2rem]">Our students are our biggest fans.</h2>
      <p className="text-primary prose">
        We don’t like to brag, but we don’t mind letting our students do it for us. Here are a few nice things folks have said about our
        services over the years.
      </p>
      <DragCards></DragCards>
    </section>
  );
};

export default SectionThree;
