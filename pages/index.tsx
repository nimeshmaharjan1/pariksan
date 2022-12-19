import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { NextPageWithLayout } from './_app'
import MainHomeLayout from '@features/home/layouts/main'
import React from 'react'

import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

const Home: NextPageWithLayout = () => {
  return (
    <>
      <main className={`py-4 ${inter.className} overflow-x-hidden`}>
        <div className="first min-h-screen">Hello</div>
        <div className="second min-h-screen"><motion.button
          className='btn btn-primary'
          initial={{ opacity: 0 }}
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.2 },
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
        >Hello</motion.button></div>
      </main>
    </>
  )
}

export default Home;

Home.getLayout = (page: React.ReactElement) => {
  return <MainHomeLayout>{page}</MainHomeLayout>
}