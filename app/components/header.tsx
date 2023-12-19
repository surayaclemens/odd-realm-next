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
            <header className="font-sans flex flex-col justify-center items-center p-8 lg:px-16 lg:py-12 text-black">
                <div className="flex w-full justify-between items-center">
                    {/* Odd Realm Logo */}
                    <Link className="w-[60px] lg:w-[150px]" href="/">
                        <Image src="/images/logo.svg" alt="logo" width={150} height={150}/>
                    </Link>
                    {/* Hamburger/Close icons */}
                    {isMobileMenuOpen ?
                        <Image className="w-[32px] lg:w-[60px] cursor-pointer " src='/icons/minus-square.svg' width={60} height={60} alt="menu icon"  onClick={toggleMobileMenu}/>
                    
                        :
                        <Image className="w-[32px] lg:w-[60px] cursor-pointer " src='/icons/plus-square.svg' width={60} height={60} alt="menu icon"  onClick={toggleMobileMenu}/>
                    }
                </div>

                {/* MENU CONTENT */}
                {isMobileMenuOpen && (
                    <div className="w-full py-6 flex flex-col justify-start items-center z-50">
                        <Link className="w-36 rounded-md border-2 border-black bg-white bg-opacity-20 text-md flex justify-center p-2 my-2" href="/" onClick={toggleMobileMenu}>Home</Link>
                        <Link className="w-36 rounded-md border-2 border-black bg-white bg-opacity-20 text-md flex justify-center p-2 my-2" href="/about" onClick={toggleMobileMenu}>About</Link>
                        <Link className="w-36 rounded-md border-2 border-black bg-white bg-opacity-20 text-md flex justify-center p-2 my-2" href="/community" onClick={toggleMobileMenu}>Community</Link>
                        <Link className="w-36 rounded-md border-2 border-black bg-white bg-opacity-20 text-md flex justify-center p-2 my-2" href="/contact" onClick={toggleMobileMenu}>Contact</Link>
                        <Link className="w-36 rounded-md border-2 border-black bg-white bg-opacity-20 text-md flex justify-center p-2 my-2" href="/play" onClick={toggleMobileMenu}>Play!</Link>
                    </div>
                )} 
                
            </header>

            {/* DESKTOP */}
            {/* <header className="hidden lg:flex justify-between items-center py-8 px-16 font-sans">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" width={150} height={120}/>
                </Link>
                <div className="flex justify-evenly">
                    <Link className="bg-white bg-opacity-10 hover:border-white hover:text-white text-lg w-32 flex justify-center rounded-md py-2 border-2 border-black mx-2" href="/about">About</Link>
                    <Link className="bg-white bg-opacity-10 hover:border-white hover:text-white text-lg w-32 flex justify-center rounded-md py-2 border-2 border-black mx-2" href="/community">Community</Link>
                    <Link className="bg-white bg-opacity-10 hover:border-white hover:text-white text-lg w-32 flex justify-center rounded-md py-2 border-2 border-black mx-2" href="/contact">Contact</Link>
                    <Link className="bg-white bg-opacity-10 hover:border-green hover:text-white text-lg w-32 flex justify-center rounded-md py-2 border-2 border-black mx-2" href="/play">Play!</Link>
                </div>
            </header> */}
        </>
    );
  };
  
  export default Header;
  