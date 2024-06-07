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
          <Link className="w-[100px] lg:w-[100px]" href="/">
            <Image src="/images/logo.svg" alt="logo" width={120} height={120} />
          </Link>
          {/* Hamburger/Close icons */}
          {isMobileMenuOpen ? (
            <Image className="w-[50px]" src='/icons/minus-square.svg' width={100} height={100} alt="menu icon" onClick={toggleMobileMenu} />
          ) : (
            <Image className="w-[50px]" src='/icons/plus-square.svg' width={100} height={100} alt="menu icon" onClick={toggleMobileMenu} />
          )}
        </div>
        {/* MENU CONTENT */}
        {isMobileMenuOpen && (
          <div className="w-full py-6 flex flex-col justify-start items-center z-50 uppercase">
            <Link className="w-40 rounded-md bg-white bg-opacity-20 border-black border-2 text-black text-md text-center p-2 my-4" href="/about" onClick={toggleMobileMenu}>About</Link>
            <Link className="w-40 rounded-md bg-white bg-opacity-20 border-black border-2 text-black text-md text-center p-2 my-4" href="/community" onClick={toggleMobileMenu}>Community</Link>
            <Link className="w-40 rounded-md bg-white bg-opacity-20 border-black border-2 text-black text-md text-center p-2 my-4" href="/contact" onClick={toggleMobileMenu}>Contact</Link>
            <p className="rounded-md text-md w-40 text-center p-2 my-2 border-black border-2 text-black bg-pink uppercase cursor-pointer" onClick={handleModal}>Get Odd Realm</p>
          </div>
        )}
      </header>

      {/* DESKTOP MENU HEADER */}
      <header className="hidden lg:flex fixed w-full text-black justify-between items-center lg:px-32 py-4 font-sans bg-white bg-opacity-20">
        <div className="w-1/3 flex justify-start items-center">
          <Link className="w-32 mr-4 rounded-md text-md text-sm text-center p-2 border-black hover:text-white hover:border-white border-2 bg-white bg-opacity-20 text-black" href="/about">About</Link>
          <Link className="w-32 mr-4 rounded-md text-md text-sm text-center p-2 border-black hover:text-white hover:border-white border-2 bg-white bg-opacity-20 text-black" href="/community">Community</Link>
          <Link className="w-32 mr-4 rounded-md text-md text-sm text-center p-2 border-black hover:text-white hover:border-white border-2 bg-white bg-opacity-20 text-black" href="/contact">Contact</Link>
        </div>
        <div className="w-1/3 flex justify-center">
          <Link href="/">
            <Image src="/images/logo.svg" alt="logo" width={110} height={100} />
          </Link>
        </div>
        <div className="w-1/3 flex justify-end">
          <p className="rounded-md w-40 text-sm text-center p-2  bg-pink border-black hover:border-white border-2 hover:text-white cursor-pointer custom-pulse" onClick={handleModal}>Get Odd Realm ✨</p>
        </div>
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
