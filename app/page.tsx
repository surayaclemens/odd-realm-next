'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';



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
    <Head>
        <title>{t('Odd Realm | Home')}</title>
    </Head>
    <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:px-28 font-sans text-black">
        {/* SECTION 1 - TRAILER */}
        <section className='flex w-full flex-col justify-between lg:flex-row lg:items-center my-8'>
            <div className='flex flex-col'>
                <h1 className='text-6xl lg:text-8xl'>{t('tagline1')}</h1>
                <h1 className='text-6xl lg:text-8xl'>{t('tagline2')}</h1>
                <h1 className='text-6xl lg:text-8xl'>{t('tagline3')}</h1>
            </div>
            <iframe className='rounded-lg my-8 aspect-video lg:my-0 lg:w-full xl:w-4/5 lg:m-8' width="auto" height="auto" src="https://www.youtube.com/embed/g6lDVJFFJ10?si=_0DBe9ou4wefV-nb&autoplay=1" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </section>
        {/* SECTION 2 - ABOUT THE GAME */}
        <section className='my-8 flex flex-col'>
            <h1 className='text-4xl lg:text-6xl'>{t('about the game')}</h1>
            {/* DETAILS 1 */}
            <div className='py-8'>
                <Image className='' src='/images/gameplay-river.png' width={450} height={300} alt='gameplay'/>
                <p className='my-4 text-2xl lg:text-4xl'>{t('gameDetails1')}</p>
            </div>
            {/* DETAILS 2 */}
            <div className='py-8'>
              <Image className='' src='/images/gameplay-island.png' width={450} height={300} alt='gameplay'/>
                <p className='my-4 text-2xl lg:text-4xl'>{t('gameDetails2')}</p>
            </div>
            {/* DETAILS 3 */}
            <div className='py-8'>
              <Image className='' src='/images/gameplay-home.png' width={450} height={300} alt='gameplay'/>
                <p className='my-4 text-2xl lg:text-4xl'>{t('gameDetails3')}</p>
            {/* LEARN MORE */}
            <Link className='w-full flex justify-center my-8' href="/about">
                <button className='w-1/3 hover:text-white hover:border-white text-xl bg-white bg-opacity-20 text-black border-2 border-black rounded-lg p-2'>{t('more')}</button>
            </Link>
            </div>
        </section>

        {/* SECTION 3 - MAILING LIST */}
        <section className='my-8 flex flex-col justify-evenly items-center'>
            <h1 className='text-4xl lg:text-6xl'>{t('join our mailing list')}</h1>
            <h3 className='my-2 text-2xl lg:text-4xl'>{t('receive odd updates')}</h3>
            <input className='w-4/5 my-4 text-md bg-white bg-opacity-20 placeholder-placeholder border-2 text-black border-black rounded-lg p-2' type='email' placeholder={t('youremail@address.com')} onChange={(e) => setUserEmail(e.target.value)} />
            <button className='w-1/2 hover:text-white hover:border-white text-xl bg-white bg-opacity-20 text-black border-2 border-black rounded-lg p-2'onClick={() => handleNewsletter()} >{t('sign up')}</button>  
        </section>
    </main>
  </>
  )
}
