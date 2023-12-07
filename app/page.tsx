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
    <main className="flex min-h-screen flex-col items-center justify-between p-16 lg:px-32 font-sans text-white">
        {/* SECTION 1 - TRAILER */}
        <section className='flex flex-col lg:flex-row'>
            <div className='flex flex-col'>
                <h1 className='text-6xl lg:text-8xl'>{t('tagline1')}</h1>
                <h1 className='text-6xl lg:text-8xl'>{t('tagline2')}</h1>
                <h1 className='text-6xl lg:text-8xl'>{t('tagline3')}</h1>
            </div>
            <Image className='rounded-lg' src={'/images/game_intro.png'} width={500} height={200} alt='game art'></Image>
        </section>
        <div className='flex justify-center w-full my-16'>
          <iframe className='rounded-lg' width="900" height="500" src="https://www.youtube.com/embed/g6lDVJFFJ10?si=_0DBe9ou4wefV-nb&autoplay=1" title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        {/* SECTION 2 - ABOUT THE GAME */}
        <section className=''>
            <h1 className='text-4xl lg:text-6xl'>{t('about the game')}</h1>
            {/* DETAILS 1 */}
            <div className='py-8'>
                <Image className='' src='/images/gameplay-river.png' width={450} height={300} alt='gameplay'/>
                <p className='text-2xl lg:text-4xl'>{t('gameDetails1')}</p>
            </div>
            {/* DETAILS 2 */}
            <div className='py-8'>
              <Image className='' src='/images/gameplay-island.png' width={450} height={300} alt='gameplay'/>
                <p className='text-2xl lg:text-4xl'>{t('gameDetails2')}</p>
            </div>
            {/* DETAILS 3 */}
            <div className='py-8'>
              <Image className='' src='/images/gameplay-home.png' width={450} height={300} alt='gameplay'/>
                <p className='text-2xl lg:text-4xl'>{t('gameDetails3')}</p>
            {/* LEARN MORE */}
            <Link href="/about">
                <button className='text-xl bg-black rounded-lg p-2'>{t('more')}</button>
            </Link>
            </div>
        </section>

        {/* SECTION 3 - MAILING LIST */}
        <section className=''>
            <h1 className='text-4xl lg:text-6xl'>{t('join our mailing list')}</h1>
            <div className=''>
                <h3 className='text-2xl lg:text-4xl'>{t('receive odd updates')}</h3>
                <input className='text-lg bg-black rounded-lg p-2' type='email' placeholder={t('youremail@address.com')} onChange={(e) => setUserEmail(e.target.value)} />
                <button className='text-xl bg-black rounded-lg p-2' onClick={() => handleNewsletter()} >{t('sign up')}</button>  
            </div>
        </section>
    </main>
  </>
  )
}
