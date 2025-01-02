'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import BuyModal from "./buyModal";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isBuyModalOpen) setIsBuyModalOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  }

  const handleModal = () => {
    setIsBuyModalOpen(!isBuyModalOpen);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };


  return (
    <>
      {/* MOBILE MENU HEADER */}
      <header className="font-sans flex flex-col justify-center items-center p-8 lg:hidden text-white">
        <div className="flex w-full justify-between items-center">
          {/* Odd Realm Logo */}
          <Link className="w-[100px] lg:w-[100px]" href="/" onClick={closeMobileMenu}>
            <Image src="/images/logo.svg" alt="logo" width={120} height={120} />
          </Link>
          {/* Hamburger/Close icons */}
          {isMobileMenuOpen ? (
            <Image className="w-[30px]" src='/icons/close-white.svg' width={100} height={100} alt="menu icon" onClick={toggleMobileMenu} />
          ) : (
            <Image className="w-[30px]" src='/icons/hamburger-white.svg' width={100} height={100} alt="menu icon" onClick={toggleMobileMenu} />
          )}
        </div>
        {/* MENU CONTENT */}
        {isMobileMenuOpen && (
          <div className="w-full py-6 flex flex-col justify-start items-center z-50">
            <Link className="w-40 rounded-sm border-white border-2 text-white text-md text-center p-2 my-4" href="/about" onClick={toggleMobileMenu}>About</Link>
            <Link className="w-40 rounded-sm border-white border-2 text-white text-md text-center p-2 my-4" href="/community" onClick={toggleMobileMenu}>Community</Link>
            <Link className="w-40 rounded-sm border-white border-2 text-white text-md text-center p-2 my-4" href="/contact" onClick={toggleMobileMenu}>Contact</Link>
            <p className="rounded-sm text-md w-40 text-center p-2 my-2 border-white border-2 text-white bg-green cursor-pointer" onClick={handleModal}>Play ✨</p>
          </div>
        )}
      </header>

      {/* DESKTOP MENU HEADER */}
      <header className="hidden lg:flex fixed w-full text-white justify-between items-center lg:px-16 py-8 font-sans z-20">
        <div className="flex justify-center">
          <Link href="/" className="flex">
            <Image className="opacity-90" src="/images/logo.svg" alt="logo" width={120} height={120} />
          </Link>
        </div>
        <div className="flex justify-end items-center uppercase text-white text-opacity-80">
          <Link className="mr-4 text-xl text-center p-2 hover:text-green-light " href="/about">About</Link>
          <Link className="mr-4 text-xl text-center p-2 hover:text-green-light" href="/community">Community</Link>
          <Link className="mr-4 text-xl text-center p-2 hover:text-green-light" href="/contact">Contact</Link>
          <p className="text-xl text-center p-2 text-green cursor-pointer custom-pulse" onClick={handleModal}>Buy</p>
        </div>
        {/* <div className="w-1/3 flex justify-end">
          
        </div> */}
      </header>

      {/* BUY MODAL AT BOTTOM OF SCREEN */}
      {isBuyModalOpen && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleModal}></div>
          <div className="fixed inset-0 z-50 flex justify-center items-center">
            <BuyModal onClose={handleModal} />
          </div>
        </>
      )}
    </>
  );
};

export default Header;
