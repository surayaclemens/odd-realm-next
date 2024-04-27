'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';


function PressPage () {
    const { t } = useTranslation();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    const handleDownload = () => {
  
    }
  
      return(
          <div className='flex min-h-screen flex-col px-8 lg:px-28 py-8 lg:py-36 font-sans text-black'>
            <h3 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>{t('press kit')}</h3>

            <div className='flex flex-col my-4'>
                <p className='my-1 text-2xl lg:text-4xl'>{t('press kit text 1')}</p>
                <p className='my-1 text-2xl lg:text-4xl'>{t('press kit text 2')}</p>
                <p className='my-1 text-2xl lg:text-4xl'>{t('press kit text 3')}</p>
                <p className='my-4 text-2xl lg:text-4xl'>{t('press kit text 4')}</p>
            </div>
            <a className='hover:text-white hover:border-white text-xl bg-white bg-opacity-20 text-black border-2 border-black rounded-sm py-2 px-3 text-center lg:w-[200px]' href='/press-kit.zip' target="_blank" rel="noopener noreferrer">{t('download')}</a>
          </div>
      );
  }
  
  export default PressPage;