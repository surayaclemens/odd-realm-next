'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import reviews from '../../data/reviews.json';


function PlayPage () {
    const { t } = useTranslation();
      useEffect(() => {
          window.scrollTo(0, 0)
      }, []);
  
      return(
          <div className='flex min-h-screen flex-col items-start justify-between px-8 lg:px-28 font-sans text-black'>
             <h3 className='text-lg uppercase lg:text-2xl'>{t('play the game')}</h3>
             <p className='text-3xl lg:text-4xl my-2'>Buy Odd Realm on</p>
              <div className='flex flex-col w-full justify-evenly items-center lg:flex-row my-4'>
                <a className='' href='https://store.steampowered.com/app/688060/Odd_Realm/' target='blank'>
                    <Image width={250} height={100} className='my-1 ' src='/icons/steam-blue.svg' alt='steam icon'/>
                </a>
                <iframe width={200} height={160} className='my-1 cursor-pointer lg:w-full' src="https://itch.io/embed/266192">
                    <a href="https://unknownorigingames.itch.io/oddrealm">Odd Realm by UnknownOriginGames</a>
                </iframe>
                <a className='w-full flex justify-center' href='https://www.gog.com/en/game/odd_realm' target='blank'>
                    <Image width={200} height={100} className='my-1' src='/icons/gog-purple.png' alt='gog icon'/>
                </a>
              </div>

              <div className='my-16'>
                <h3 className='text-lg uppercase lg:text-2xl my-2'>{t('reviews title')}</h3>
                <p className='text-3xl lg:text-4xl my-2'>{t('reviews title 2')}</p>
                <div className='max-w-[320px] md:max-w-[800px] lg:max-w-[1200px]'>
                    <div className='flex justify-start items-center overflow-x-scroll rounded-md p-1'>
                        {reviews.map((item, index) => {
                            return (
                                <p className='min-w-[275px] flex-wrap m-2 text-sm bg-white bg-opacity-20 rounded-md p-2 border-1 border-white text-black' key={index}>"{item.text}"</p>
                            )
                        })}
                    </div>
                </div>
              </div>
          </div>
      );
  }
  
  export default PlayPage;