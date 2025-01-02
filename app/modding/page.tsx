'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

function ModPage () {
    const { t } = useTranslation();
    useEffect(() => {
      window.scrollTo(0, 0)
  }, [])
  
      return(
          <div className='flex min-h-screen flex-col px-8 lg:px-32 xl:px-56 py-8 lg:py-36 font-sans text-white'>
             <h3 className='text-5xl my-2 lg:text-7xl text-center'>{t('modding policy')}</h3>
              <div className='flex flex-col my-4'>
                <p className='text-xl'>Coming soon...</p>
              </div>
          </div>
      );
  }
  
  export default ModPage;