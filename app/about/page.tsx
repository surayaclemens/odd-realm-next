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
         <div className='flex min-h-screen flex-col px-8 lg:px-32 xl:px-56 py-8 lg:py-52 font-sans text-white text-center'>
            <h1 className='text-md uppercase my-2 lg:text-7xl lg:normal-case'>{t('about our world')}</h1>
            <section className='w-full flex flex-col lg:py-8'>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact1')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact2')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact3')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact4')}</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                  <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact5')}</p>
              </div>
          </section>
            <Image width={400} height={50} className='w-full' src='' alt='gallery of game play shots' />
          {/* HOW TO PLAY */}
          <section className='w-full my-8 lg:my-16 flex flex-col'>
              <h2 className='text-md uppercase my-2 lg:text-7xl lg:normal-case'>{t('how to play')}</h2>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                      <p className='text-2xl lg:my-2 lg:text-3xl'>text point</p>
                  </div>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                      <p className='text-2xl lg:my-2 lg:text-3xl'>text point</p>
                  </div>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                      <p className='text-2xl lg:my-2 lg:text-3xl'>text point</p>
                  </div>
                  <div className='flex justify-start items-center my-2'>
                      <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                      <p className='text-2xl lg:my-2 lg:text-3xl'>text point</p>
                  </div>
          </section>
          {/* MEET THE TEAM */}
          <section className='w-full my-8 lg:my-16 flex flex-col'>
              <h2 className='text-md uppercase my-2 lg:text-7xl lg:normal-case'>{t('about the team')}</h2>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='team picture'/>
                  <p className='text-2xl lg:my-2 lg:text-3xl'><span>Waylon Snedker </span>is the founder of Unknown Origin Games and creative force behind Odd Realm. After achieving honors in Game Design at Vancouver Film School, he taught himself how to program while working as a technical designer at various local game studios. He then wove these skills together with his lifelong love of fantasy and world-building to complete Odd Realm, his first solo venture as an indie developer.</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <Image width={20} height={20} className='mr-3' src='/images/logo_64_64.png' alt='team picture'/>
                  <p className='text-2xl lg:my-2 lg:text-3xl'><span>Matthew Creamer </span>is who you can thank for Odd Realm's relaxing, immersive score. With 20 years in the industry, he is an accomplished composer and multimedia artist who excels at using music to create emotional experiences in video games and loves collaborating with creative teams who share his passion.</p>
              </div>
          </section>
          {/* SOMETHING ELSE */}
          <section className='w-full my-8 lg:my-16 flex flex-col'>
              <h2 className='text-md uppercase my-2 lg:text-7xl lg:normal-case'>{t('something else')}</h2>
              <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>{t('check out our FAQs1')}
              <Link href="/faq" className='underline'>{t('FAQs link')}</Link>
              {t('check out our FAQs2')}</p>
          </section>
         </div>
      );
  }
  
  export default AboutPage;