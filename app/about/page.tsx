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
         <div className='flex min-h-screen w-full flex-col justify-center items-center px-8 lg:px-32 xl:px-56 py-8 lg:py-52 font-sans text-white'>
            <h1 className='text-5xl my-4 lg:text-7xl'>{t('About our world')}</h1>
            <div className='flex w-full justify-evenly my-2'>
                <Image className='w-1/4 rounded-md' src="/images/gifs/mining_gif.gif" alt="gameplay farming gif" width={100} height={100}/>
                <Image className='w-1/4 rounded-md' src="/images/gifs/mining_gif.gif" alt="gameplay farming gif" width={100} height={100}/>
                <Image className='w-1/4 rounded-md' src="/images/gifs/mining_gif.gif" alt="gameplay farming gif" width={100} height={100}/>
            </div>
            <section className='w-full my-8 lg:py-8'>
                <h2 className='text-sm lg:text-lg uppercase my-2 text-center'>{t('What you will find')}</h2>
                <div className='flex justify-start items-center my-2'>
                    <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                    <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact1')}</p>
                </div>
                <div className='flex justify-start items-center my-2'>
                    <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                    <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact2')}</p>
                </div>
                <div className='flex justify-start items-center my-2'>
                    <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                    <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact3')}</p>
                </div>
                <div className='flex justify-start items-center my-2'>
                    <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                    <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact4')}</p>
                </div>
                <div className='flex justify-start items-center my-2'>
                    <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                    <p className='text-2xl lg:my-2 lg:text-3xl'>{t('gameFact5')}</p>
                </div>

            </section>
        {/* <div className='mt-16 bg-midnight w-full p-8 flex justify-center items-center z-0 rounded-md'>
            <Image className='w-full lg:w-[900px] rounded-md' src="/images/gifs/mining_gif.gif" alt="gameplay farming gif" width={100} height={100} />
        </div> */}
          {/* HOW TO PLAY */}
          <section className='w-full my-8 lg:my-16 flex flex-col justify-center items-center'>
              <h2 className='text-sm lg:text-lg uppercase my-2'>{t('Goals of the game')}</h2>
                <div className='w-full flex justify-evenly items-center lg:flex-row'>
                    <div className=''>
                        <div className='flex justify-start items-center my-2'>
                            <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                            <p className='text-2xl lg:my-2 lg:text-3xl'>Building a thriving settlement</p>
                        </div>
                        <div className='flex justify-start items-center my-2'>
                            <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                            <p className='text-2xl lg:my-2 lg:text-3xl'>Resource management and optimization</p>
                        </div>
                        <div className='flex justify-start items-center my-2'>
                            <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                            <p className='text-2xl lg:my-2 lg:text-3xl'>Exploration and discovery</p>
                        </div>
                    </div>
                    <div className=''>
                        <div className='flex justify-start items-center my-2'>
                            <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                            <p className='text-2xl lg:my-2 lg:text-3xl'>Advance the colony's technology</p>
                        </div>
                        <div className='flex justify-start items-center my-2'>
                            <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                            <p className='text-2xl lg:my-2 lg:text-3xl'>Survival and adaptation</p>
                        </div>
                        <div className='flex justify-start items-center my-2'>
                            <Image width={15} height={15} className='mr-3' src='/images/logo_64_64.png' alt='custom bullet point'/>
                            <p className='text-2xl lg:my-2 lg:text-3xl'>Defending the colony</p>
                        </div>
                    </div>
                 </div>
          </section>
          {/* MEET THE TEAM */}
          <section className='w-full my-8 lg:my-16 flex flex-col'>
              <h2 className='text-sm lg:text-lg uppercase my-2 text-center'>{t('about the team')}</h2>
              <div className='flex justify-start items-center my-2'>
                  <p className='text-2xl lg:my-2 lg:text-3xl'><a className='hover:underline text-green-light' href='https://www.linkedin.com/in/waylon-snedker-33566230/' target='_blank'>Waylon Snedker</a> is the founder of Unknown Origin Games and creative force behind Odd Realm. After achieving honors in Game Design at Vancouver Film School, he taught himself how to program while working as a technical designer at various local game studios. He then wove these skills together with his lifelong love of fantasy and world-building to complete Odd Realm, his first solo venture as an indie developer.</p>
              </div>
              <div className='flex justify-start items-center my-2'>
                  <p className='text-2xl lg:my-2 lg:text-3xl'><a className='hover:underline text-green-light' href='https://www.linkedin.com/in/mattcreamer/' target='_blank'>Matthew Creamer</a> is who you can thank for Odd Realm's relaxing, immersive score. With 20 years in the industry, he is an accomplished composer and multimedia artist who excels at using music to create emotional experiences in video games and loves collaborating with creative teams who share his passion.</p>
              </div>
          </section>
          {/* SOMETHING ELSE */}
          <section className='w-full my-8 lg:my-16 flex flex-col'>
              <h2 className='text-sm lg:text-lg uppercase my-2 text-center'>{t('something else')}</h2>
              <p className='my-4 text-2xl lg:my-2 lg:text-3xl'>{t('check out our FAQs1')}
              <Link href="/faq" className='hover:underline text-green-light'>{t('FAQs link')}</Link>
              {t('check out our FAQs2')}</p>
          </section>
         </div>
      );
  }
  
  export default AboutPage;