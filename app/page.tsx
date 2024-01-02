'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import React from 'react';
import Link from 'next/link';

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
  <>
    <main className="flex min-h-screen flex-col items-center justify-between px-8 lg:px-24 font-sans text-black">
        {/* <section className='flex w-full flex-col justify-between lg:items-center my-8'> */}
        {/* <h1 className='text-5xl lg:text-9xl lg:py-52 text-red'>{t('tagline1')} {t('tagline2')} {t('tagline3')}</h1> */}
        {/* </section> */}

        <section className='my-8 flex flex-col'>
            {/* INTRO 1 & TRAILER */}
            <div className='lg:flex flex-col items-center'>
              <p className='my-4 lg:my-48 text-2xl lg:text-8xl'>{t('gameDetails1')}</p>
              <iframe className='rounded-md my-8 aspect-video lg:my-4 w-full' width="auto" height="auto" src="https://www.youtube.com/embed/g6lDVJFFJ10?si=_0DBe9ou4wefV-nb&autoplay=1" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            {/* DETAILS 2 */}
            <div className='py-4 lg:py-20'>
              <h1 className='text-sm lg:text-lg uppercase '>{t('about the game')}</h1>
              <p className='my-4 text-2xl lg:text-8xl'>{t('gameDetails2')}</p>
              <Image className='w-full lg:my-2 rounded-md' src='/images/gameplay-island.png' width={450} height={300} alt='gameplay'/>
            </div>
            {/* DETAILS 3 */}
            <div className='py-4'>
                <p className='my-4 text-2xl lg:text-8xl'>{t('gameDetails3')}</p>
                <Image className='w-full lg:my-2 rounded-md' src='/images/gameplay-home.png' width={450} height={300} alt='gameplay'/>
            {/* LEARN MORE */}
            <div className='py-4 flex flex-col items-center justify-center'>
              <p className='my-4 text-2xl lg:text-8xl text-center'>{t('gameDetails4')}</p>
              <Link className='hover:text-white hover:border-white text-xl bg-white bg-opacity-20 text-black border-2 border-black rounded-md my-4 py-2 px-3 uppercase text-center lg:w-[350px]' href="/about">{t('more')}</Link>
            </div>
            </div>
        </section>

        {/* SECTION 3 - MAILING LIST */}
        <section className='my-8 lg:mb-32 flex flex-col justify-evenly items-center'>
            <h1 className='text-sm lg:text-lg uppercase'>{t('join our mailing list')}</h1>
            <h3 className='my-2 text-3xl lg:text-6xl'>{t('receive odd updates')}</h3>
            <input className='w-full lg:w-[350px] my-4 text-md bg-white bg-opacity-20 placeholder-placeholder border-2 text-black border-black rounded-md p-2' type='email' placeholder={t('youremail@address.com')} onChange={(e) => setUserEmail(e.target.value)} />
            <button className='hover:text-white hover:border-white text-xl bg-white bg-opacity-20 text-black border-2 border-black rounded-md py-2 px-3 uppercase lg:w-[350px]'onClick={()=>handleNewsletter()} >{t('sign up')}</button>  
        </section>
    </main>
  </>
  )
}
