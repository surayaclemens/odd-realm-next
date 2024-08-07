'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import React from 'react';
import Link from 'next/link';
import TypingAnimation from './components/typing-animation/typing-animation';
import BuyModal from './components/buyModal';


export default function Home() {
  const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  const [userEmail, setUserEmail] = useState<string>('');

  const handleNewsletter = () => {
    console.log(userEmail);
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 lg:px-32 xl:px-56 font-sans text-white text-center">

        <section className='my-8 lg:my-16 flex flex-col'>
            {/* INTRO 1 & TRAILER */}
            <div className='lg:flex flex-col items-center'>
              {/* INTRO */}
              <TypingAnimation/>
              <div className='bg-midnight w-full lg:w-4/5 p-8 flex justify-center items-center z-0 rounded-md'>
                <iframe className='w-full aspect-video z-10 rounded-md' width="auto" height="auto" src="https://www.youtube.com/embed/opFFQLdP-5M?si=qTKqDGlxW_IxlLPj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
            </div>
            {/* DETAILS 1 */}
            <div className='py-4 lg:py-20'>
              <h1 className='text-sm lg:text-lg uppercase'>{t('about the game')}</h1>
              <p className='my-4 text-2xl lg:text-7xl'>{t('gameDetails2')}</p>
              <Image className='w-4/5 lg:my-12 rounded-md' src='/images/gameplay-island.png' width={420} height={280} alt='gameplay'/>
            </div>
            {/* DETAILS 2 */}
            <div className='py-4'>
              <p className='my-4 text-2xl lg:text-7xl'>{t('gameDetails3')}</p>
              <Image className='w-4/5 lg:my-12 rounded-md' src='/images/gameplay-home.png' width={420} height={280}alt='gameplay'/>
            {/* LEARN MORE */}
            <div className='py-4 flex flex-col items-center justify-center'>
              <p className='my-4 text-2xl lg:text-7xl text-center'>{t('gameDetails4')}</p>
              <Link className='hover:text-green hover:border-green text-xl bg-white bg-opacity-20 text-white border-2 border-white rounded-md my-4 py-2 px-3 text-center lg:w-[350px]' href="/about">{t('more')}</Link>
            </div>
            </div>
        </section>

        {/* SECTION 3 - MAILING LIST */}
        <section className='my-8 lg:mb-32 flex flex-col justify-evenly items-center'>
            <h1 className='text-sm lg:text-lg uppercase'>{t('join our mailing list')}</h1>
            <h3 className='my-2 text-3xl lg:text-7xl'>{t('receive odd updates')}</h3>
            <input className='w-full lg:w-[350px] my-4 text-md bg-white bg-opacity-20 placeholder-placeholder border-2 text-white border-white rounded-md p-2' type='email' placeholder={t('youremail@address.com')} onChange={(e) => setUserEmail(e.target.value)} />
            <button className='hover:text-green hover:border-green bg-white bg-opacity-20 text-white border-2 border-white rounded-md py-2 px-3 lg:w-[350px] text-xl'onClick={()=>handleNewsletter()} >{t('sign up')}</button>  
        </section>
    </main>
  )
}
