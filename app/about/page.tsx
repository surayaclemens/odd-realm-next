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
         <div className='flex min-h-screen flex-col px-8 lg:px-28 py-8 lg:py-48 font-sans text-black'>
          <section className='w-full flex flex-col'>
            <h1 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>{t('about our world')}</h1>
            {/* <h1 className='text-3xl lg:text-4xl my-2'>{t('Inside the Odd Realm')}</h1> */}
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>{t('gameFact1')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>{t('gameFact2')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>{t('gameFact3')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>{t('gameFact4')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>{t('gameFact5')}</p>
              </div>
              <Image width={400} height={50} className='w-full' src='/images/races.png' alt='characters' />
          </section>
          {/* HOW TO PLAY */}
          <section className='w-full my-8 lg:my-16 flex flex-col'>
              <h2 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>{t('how to play')}</h2>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='custom bullet point'/>
                      <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>text point</p>
                  </div>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='custom bullet point'/>
                      <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>text point</p>
                  </div>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='custom bullet point'/>
                      <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>text point</p>
                  </div>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='custom bullet point'/>
                      <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>text point</p>
                  </div>
          </section>
          {/* MEET THE TEAM */}
          <section className='w-full my-8 lg:my-16 flex flex-col'>
              <h2 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>{t('about the team')}</h2>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='team picture'/>
                  <p className='my-4 text-2xl lg:my-2 lg:text-3xl'><span className=''>Waylon Snedker </span>will have a short bio here. It's a few sentences.</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='team picture'/>
                  <p className='my-4 text-2xl lg:my-2 lg:text-3xl'><span className=''>Matt Creamer </span>will have a short bio here. It's a few sentences.</p>
              </div>
          </section>
          {/* SOMETHING ELSE */}
          <section className='w-full my-8 lg:my-16 flex flex-col'>
              <h2 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>{t('something else')}</h2>
              <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>{t('check out our FAQs1')}
              <Link href="/faq" className='underline'>{t('FAQs link')}</Link>
              {t('check out our FAQs2')}</p>
          </section>
         </div>
      );
  }
  
  export default AboutPage;