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
      {/* TYPING TAGLINE */}
      <div className='my-8 lg:mt-24 flex flex-col items-center'>
        <TypingAnimation/>
      </div>
      {/* TRAILER */}
      <div className='my-4 lg:mt-8 lg:mb-24 bg-midnight w-full lg:w-[1000px] p-8 flex justify-center items-center z-0 rounded-md'>
        <iframe className='w-full aspect-video z-10 rounded-md' width="auto" height="auto" src="https://www.youtube.com/embed/opFFQLdP-5M?si=qTKqDGlxW_IxlLPj" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      </div>

    <div className='flex flex-col justify-evenly'>
      {/* SECTION 1 */}
      <section className='my-8 lg:my-16 w-full flex flex-col justify-center items-center'>
        <h1 className='text-sm my-4 lg:text-lg uppercase'>{t('about the game')}</h1>
        <p className='text-2xl lg:text-7xl mb-8 lg:mb-24'>{t('gameDetails2')}</p>
        <div className='bg-midnight w-full p-8 flex justify-center items-center z-0 rounded-md'>
          <Image className='w-full lg:w-[1000px]' src="/images/gifs/green_gif.gif" alt="gameplay farming gif" width={100} height={100} />
        </div>
      </section>

      {/* SECTION 2 */}
      <section className='my-8 lg:my-16 w-full flex flex-col justify-center items-center'>
        <p className='text-2xl lg:text-7xl mb-8 lg:mb-24'>{t('gameDetails3')}</p>
        <div className='bg-midnight w-full p-8 flex justify-center items-center z-0 rounded-md'>
          <Image className='w-full lg:w-[1000px]' src="/images/gifs/grey_gif.gif" alt="gameplay farming gif" width={100} height={100} />
        </div>
      </section>

      {/* SECTION 3 */}
      <section className='my-8 lg:my-16 w-full flex flex-col items-center justify-center'>
        <p className='text-2xl lg:text-7xl mb-8  lg:mb-24'>{t('gameDetails4')}</p>
        <div className='bg-midnight w-full p-8 flex justify-center items-center z-0 rounded-md'>
          <Image className='w-full lg:w-[1000px]' src="/images/gifs/pink_gif.gif" alt="gameplay farming gif" width={100} height={100} />
        </div>
        <Link className='hover:text-green-light hover:border-green-light text-xl bg-white bg-opacity-20 text-white border-2 border-white rounded-md my-8 lg:my-20 py-2 px-3 text-center lg:w-[350px]' href="/about">{t('Get the game')}</Link>
      </section>
    </div>
         
      {/* SECTION 3 - MAILING LIST */}
      <section className='my-8 w-full flex flex-col items-center justify-center'>
          <h1 className='text-sm lg:text-lg uppercase'>{t('join our mailing list')}</h1>
          <p className='my-2 text-3xl lg:text-7xl'>{t('receive odd updates')}</p>
          <input className='w-full lg:w-[350px] my-4 text-md bg-white bg-opacity-20 placeholder-placeholder border-2 text-white border-white focus:outline-green-light rounded-md p-2' type='email' placeholder={t('youremail@address.com')} onChange={(e) => setUserEmail(e.target.value)} />
          <button className='hover:text-green-light hover:border-green-light bg-white bg-opacity-20 text-white border-2 border-white rounded-md py-2 px-3 lg:w-[350px] text-xl'onClick={()=>handleNewsletter()} >{t('sign up')}</button>  
      </section>
    </main>
  )
}
