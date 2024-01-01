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
          <div className='flex min-h-screen flex-col items-start justify-start px-8 lg:px-28 font-sans text-black'>
             <h1 className='text-lg uppercase'>{t('modding policy')}</h1>
             <h3 className='text-3xl lg:text-4xl my-2'>{t('modding subtitle')}</h3>
  
              <div className='flex flex-col lg:flex-row my-4'>
                  <ul className='flex flex-col'>
                      <h3 className='text-lg uppercase'>{t('please do')}</h3>
                      <li className='flex flex-row justify-start items-center'>
                          <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='thumbs-up icon'/>
                          <p className='my-2 text-2xl lg:text-4xl'>Point 1</p>
                      </li>
                      <li className='flex flex-row justify-start items-center'>
                          <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='thumbs-up icon'/>
                          <p className='my-2 text-2xl lg:text-4xl'>Point 1</p>
                      </li>
                  </ul>
  
                  <ul className='flex flex-col my-4'>
                      <h3 className='text-lg uppercase'>{t('please dont')}</h3>
                      <li className='flex flex-row justify-start items-center'>
                          <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='thumbs-up icon'/>
                          <p className='my-2 text-2xl lg:text-4xl'>Point 1</p>
                      </li>
                      <li className='flex flex-row justify-start items-center'>
                          <Image width={20} height={20} className='mr-2' src='/images/logo_64_64.png' alt='thumbs-up icon'/>
                          <p className='my-2 text-2xl lg:text-4xl'>Point 1</p>
                      </li>
                  </ul>
              </div>
          </div>
      );
  }
  
  export default ModPage;