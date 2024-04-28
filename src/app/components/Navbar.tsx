"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from './MenuOverlay';
export const listItems = [
    {
        title: "About",
        link: "#about"
    },
    {
        title: "projects",
        link: "#projects"
    },
    {
        title: "Contact",
        link: "#contact"
    },
]

function Navbar() {

    const [openedBar, setOpenedBar] = useState(false);


    return (
        <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90'>
            <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>EL BCIR<sub>abdo</sub></Link>
                <div className='mobile-menu block md:hidden' >
                    {
                        !openedBar ?
                            <button onClick={()=>setOpenedBar(true)} className='flex items-center px-2 py-2 border rounded border-slate-200 text-slate-200 hover:border-white'>
                                <Bars3Icon/>
                            </button> :
                            <button onClick={()=>setOpenedBar(false)} className='flex items-center px-2 py-2 border rounded border-slate-200 text-slate-200 hover:border-white'>
                                <XMarkIcon/>
                            </button>
                    }
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            listItems.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink item={item} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
            {openedBar?<MenuOverlay/>:null}
        </nav>
    )
}

export default Navbar