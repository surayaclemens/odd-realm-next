'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function AboutPage () {
    const { t } = useTranslation();
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
      return(
         <div className='flex min-h-screen flex-col items-center justify-between p-8 lg:px-28 font-sans text-black'>
          <div className='flex flex-col w-full'>
              <h1 className='text-lg uppercase lg:text-2xl my-2'>{t('about our world')}</h1>
              {/* <Image width={20} height={20} className='about__hero-image' src=''/> */}
              <div className=''>
              <p className=''>This is a placeholder sentence</p>
                <p className=''>This is another placeholder sentence</p>
              </div>
          </div>
          {/* THE BASICS */}
          <section className='w-full my-4'>
              <h2 className='text-lg uppercase lg:text-2xl my-2'>{t('the basics')}</h2>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='' src='' alt='custom bullet point'/>
                  <p className='mx-2'>{t('gameFact1')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='' src='' alt='custom bullet point'/>
                  <p className='mx-2'>{t('gameFact2')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='' src='' alt='custom bullet point'/>
                  <p className='mx-2'>{t('gameFact3')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='' src='' alt='custom bullet point'/>
                  <p className='mx-2'>{t('gameFact4')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='' src='' alt='custom bullet point'/>
                  <p className='mx-2'>{t('gameFact5')}</p>
              </div>
              <Image width={300} height={50} className='' src='/images/races.png' alt='characters' />
          </section>
          {/* HOW TO PLAY */}
          <section className='w-full my-4'>
              <h2 className='text-lg uppercase lg:text-2xl'>{t('how to play')}</h2>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='' src='' alt='custom bullet point'/>
                      <p className='mx-2'>text point</p>
                  </div>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='' src='' alt='custom bullet point'/>
                      <p className='mx-2'>text point</p>
                  </div>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='' src='' alt='custom bullet point'/>
                      <p className='mx-2'>text point</p>
                  </div>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='' src='' alt='custom bullet point'/>
                      <p className='mx-2'>text point</p>
                  </div>
          </section>
          {/* MEET THE TEAM */}
          <section className='w-full my-4'>
              <h2 className='text-lg uppercase lg:text-2xl'>{t('meet the team')}</h2>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='' src='' alt='team picture'/>
                  <p className='mx-2'><span className=''>Waylon Snedker </span>will have a short bio here. It's a few sentences.</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='' src='' alt='team picture'/>
                  <p className='mx-2'><span className=''>Matt Creamer </span>will have a short bio here. It's a few sentences.</p>
              </div>
          </section>
          {/* SOMETHING ELSE */}
          <section className='w-full my-4'>
              <h2 className='text-lg uppercase lg:text-2xl'>{t('something else')}</h2>
              <p className='my-2'>{t('check out our FAQs1')}
              <Link href="/faq"className=''>{t('FAQs page')}</Link>
              {t('check out our FAQs2')}</p>
          </section>
         </div>
      );
  }
  
  export default AboutPage;