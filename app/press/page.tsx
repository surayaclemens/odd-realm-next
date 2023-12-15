'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';


function PressPage () {
    const { t } = useTranslation();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    const handleDownload = () => {
  
    }
  
      return(
          <div className='flex min-h-screen flex-col items-center justify-between p-8 lg:px-28 font-sans text-black'>
              <div className='press__header'>
                  <h1 className='press__title'>{t('press kit')}</h1>
                  <h3 className='press__subtitle'>{t('use our assets')}</h3>
              </div>
              <div className='press-text'>
                  <p className='press-text__text'>{t('press kit text 1')}</p>
                  <p className='press-text__text'>{t('press kit text 2')}</p>
                  <p className='press-text__text'>{t('press kit text 3')}</p>
              </div>
              <p className='press-text__text'>{t('press kit text 4')}</p>
              <a className='press__button' href='/press-kit.zip' target="_blank" rel="noopener noreferrer">{t('download')}</a>
          </div>
      );
  }
  
  export default PressPage;