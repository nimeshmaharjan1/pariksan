import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { NextPageWithLayout } from './_app'
import MainHomeLayout from '@features/home/layouts/main'
import React from 'react'
import { motion } from "framer-motion";


const Home: NextPageWithLayout = () => {
  return (
    <>
      <button className="btn btn-primary">Hello</button>
    </>
  )
}

export default Home;

Home.getLayout = (page: React.ReactElement) => {
  return <MainHomeLayout>{page}</MainHomeLayout>
}