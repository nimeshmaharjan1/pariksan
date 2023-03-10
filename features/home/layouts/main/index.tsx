import React, { ReactNode } from 'react'
import HomeHeader from '../header'
import HomeFooter from '../footer'
import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const MainHomeLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Head>
                <title>Pariksan</title>
                <link rel="icon" type="image/png" href="/logo/logo-sm.png" />
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className={`flex flex-col justify-between min-h-screen ${inter.className}`}>
                <HomeHeader></HomeHeader>
                <main className='flex-1 py-4 container'>{children}</main>
                <HomeFooter></HomeFooter>
            </div>
        </>
    )
}

export default MainHomeLayout