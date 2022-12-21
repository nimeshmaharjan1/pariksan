import MainLogo from '@shared/components/main-logo'
import ThemeToggler from '@shared/components/theme-toggler'
import React, { useEffect, useState } from 'react'

const HomeHeader = () => {
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
        setIsMounted(true)
    }, [])
    if (!isMounted) return
    return (
        <header className='wrapper h-20 shadow'>
            <div className="container grid grid-cols-12 items-center h-full gap-1">
                <section className="logo col-span-9">
                    <button className='btn btn-ghost h-12 font-bold text-2xl gap-2'>
                        <MainLogo></MainLogo>
                        Pariksan</button>
                </section>
                <nav className='col-span-3 flex gap-3'>
                    <button className="btn btn-primary">Sign Up</button>
                    <button className="btn btn-ghost">Sign In</button>
                    <ThemeToggler></ThemeToggler>
                </nav>
            </div>
        </header>
    )
}

export default HomeHeader