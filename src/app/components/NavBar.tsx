"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { Button } from '@/components/ui/button';

const NavBar = () => {
    return (
        <header className='py-8 xl:py-12 text-white'>
            <div className='container mx-auto flex justify-between items-center'>
                <Link href="/">
                    <h1 className='text-4xl font-semibold'>pc<span className='text-secondary'>.</span></h1>
                </Link>

                <div className='hidden xl:flex items-center gap-8'>
                    <NavLink />
                    <a href={"mailto:preethichandran2198@gmail.com"} >
                        {/* <Button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-[#80ffdb] hover:bg-slate-200 text-white">Bring Me On Board</Button> */}
                        <Button>Bring Me On Board</Button>
                    </a>
                </div>
                <div className='xl:hidden'>
                    <MenuOverlay/>
                </div>
            </div>
        </header>
    )
}

export default NavBar