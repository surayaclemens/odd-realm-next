'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

    return (
        <>
            {/* MENU HEADER */}
            <header className="font-sans flex flex-col justify-center items-center p-8 lg:hidden  text-white bg-black">
                <div className="flex w-full justify-between items-center">
                    {/* Odd Realm Logo */}
                    <Link className="w-[60px] lg:w-[100px]" href="/">
                        <Image src="/images/logo.svg" alt="logo" width={120} height={120}/>
                    </Link>

                    {/* Hamburger/Close icons */}
                    {isMobileMenuOpen ?
                        <Image className="w-[32px] lg:w-[45px] cursor-pointer " src='/icons/minus-square-white.svg' width={50} height={50} alt="menu icon"  onClick={toggleMobileMenu}/>
                    
                        :
                        <Image className="w-[28px] lg:w-[45px] cursor-pointer " src='/icons/plus-square-white.svg' width={50} height={50} alt="menu icon"  onClick={toggleMobileMenu}/>
                    }
                </div>
                {/* MENU CONTENT */}
                {isMobileMenuOpen && (
                        <div className="w-full py-6 flex flex-col justify-start items-center z-50 uppercase">
                            <Link className="w-32 rounded-md border-white border-2 bg-white bg-opacity-10 text-lg text-center p-2 my-2" href="/about" onClick={toggleMobileMenu}>About</Link>
                            <Link className="w-32 rounded-md border-white border-2 bg-white bg-opacity-10 text-lg text-center p-2 my-2" href="/community" onClick={toggleMobileMenu}>Community</Link>
                            <Link className="w-32 rounded-md border-white border-2 bg-white bg-opacity-10 text-lg text-center p-2 my-2" href="/contact" onClick={toggleMobileMenu}>Contact</Link>
                            <Link className="rounded-md border-white border-2 bg-green text-lg text-center p-2 my-2" href="/play" onClick={toggleMobileMenu}>Get Odd Realm</Link>
                        </div>
                    )} 
            </header>

            {/* DESKTOP */}
            <header className="hidden lg:flex fixed w-full text-white bg-black justify-between items-center px-8 font-sans">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" width={110} height={110}/>
                </Link>
                <div className="py-6 flex justify-evenly items-center uppercase text-white">
                    <Link className="w-24 rounded-md border-placeholder border-2 bg-white bg-opacity-10 text-sm text-center p-2 mx-2 hover:border-white hover:text-white" href="/about" onClick={toggleMobileMenu}>About</Link>
                    <Link className="w-24 rounded-md border-placeholder border-2 bg-white bg-opacity-10 text-sm text-center p-2 mx-2 hover:border-white hover:text-white" href="/community" onClick={toggleMobileMenu}>Community</Link>
                    <Link className="w-24 rounded-md  border-placeholder border-2 bg-white bg-opacity-10 text-sm text-center p-2 mx-2 hover:border-white hover:text-white" href="/contact" onClick={toggleMobileMenu}>Contact</Link>
                    <Link className="rounded-md border-placeholder border-2 bg-green text-sm text-center p-2 mx-2 text-white hover:border-white" href="/play" onClick={toggleMobileMenu}>Get Odd Realm</Link>
                </div>
            </header>
        </>
    );
  };
  
  export default Header;
  