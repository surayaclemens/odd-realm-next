'use client'
import Link from "next/link";
import Image from "next/image";
import { useState } from 'react';
import { openModal, closeModal } from '../../redux/modalSlice';
import BuyModal from "./buyModal";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Header: React.FC = () => {
//   const dispatch = useDispatch();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsBuyModalOpen(false);
  };

  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);


  const handleModal = () => {
    console.log('modal toggle')
    setIsBuyModalOpen(!isBuyModalOpen);
    setIsMobileMenuOpen(false);

  };

//   const isModalOpen = useSelector((state:RootState) => state.BuyModal.isOpen);


    return (
        <>
        {/* MOBILE MENU HEADER */}
        <header className="font-sans flex flex-col justify-center items-center p-8 lg:hidden  text-white">
            <div className="flex w-full justify-between items-center">
                {/* Odd Realm Logo */}
                <Link className="w-[100px] lg:w-[100px]" href="/">
                    <Image src="/images/logo.svg" alt="logo" width={120} height={120}/>
                </Link>
                {/* Hamburger/Close icons */}
                {isMobileMenuOpen ?
                    <Image className="w-[50px]" src='/icons/minus-square.svg' width={100} height={100} alt="menu icon"  onClick={toggleMobileMenu}/>
                    :
                    <Image className="w-[50px]" src='/icons/plus-square.svg' width={100} height={100} alt="menu icon"  onClick={toggleMobileMenu}/>
                }
            </div>
            {/* MENU CONTENT */}
            {isMobileMenuOpen && (
                <div className="w-full py-6 flex flex-col justify-start items-center z-50 uppercase">
                    <Link className="w-32 rounded-sm bg-white bg-opacity-20 text-black text-lg text-center p-2 my-2" href="/about" onClick={toggleMobileMenu}>About</Link>
                    <Link className="w-32 rounded-sm bg-white bg-opacity-20 text-black text-lg text-center p-2 my-2" href="/community" onClick={toggleMobileMenu}>Community</Link>
                    <Link className="w-32 rounded-sm bg-white bg-opacity-20 text-black text-lg text-center p-2 my-2" href="/contact" onClick={toggleMobileMenu}>Contact</Link>
                    {/* <Link className="rounded-sm border-2 border-black text-black bg-green-light text-lg text-center p-2 my-2" href="/play" onClick={toggleMobileMenu}>Get Odd Realm</Link> */}
                    <p className="rounded-sm text-lg text-center p-2 my-2 text-black  border-2 border-black bg-green-light hover:border-white hover:text-white uppercase cursor-pointer" onClick={handleModal}>Get Odd Realm</p>
                </div>
                )} 
        </header>

        {/* DESKTOP MENU HEADER*/}
        <header className="hidden lg:flex fixed w-full text-black justify-between items-center px-8 py-4 font-sans">
            <div className="w-1/3 flex justify-evenly items-center uppercase">
                <Link className="w-32 rounded-sm text-md text-center p-2 hover:text-white hover:border-white bg-white bg-opacity-20 text-black" href="/about">About</Link>
                <Link className="w-32 rounded-sm text-md text-center p-2 hover:text-white hover:border-white bg-white bg-opacity-20 text-black" href="/community">Community</Link>
                <Link className="w-32 rounded-sm text-md text-center p-2 hover:text-white hover:border-white bg-white bg-opacity-20 text-black" href="/contact">Contact</Link>
            </div>
            <div className="w-1/3 flex justify-center">
                <Link href="/">
                    <Image src="/images/logo.svg" alt="logo" width={150} height={100}/>
                </Link>
            </div>
            <div className="w-1/3 flex justify-end">
                <p className="rounded-sm text-lg text-center p-2 text-black  border-2 border-black bg-green-light hover:border-white hover:text-white uppercase cursor-pointer" onClick={handleModal}>Get Odd Realm</p>
            </div>
        </header>
        {/* BUY MODAL AT BOTTOM OF SCREEN */}
        {isBuyModalOpen && <BuyModal />}
        </>
    );
  };
  
  export default Header;
  