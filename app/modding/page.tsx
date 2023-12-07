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
          <div className='mod'>
              <div className='mod__header'>
                  <h1 className='mod__title'>{t('modding policy')}</h1>
                  <h3 className='mod__subtitle'>{t('modding subtitle')}</h3>
              </div>
  
              <div className='mod__body'>
                  <ul className='mod-column'>
                      <h3 className='mod-row__title'>{t('please do')}</h3>
                      <li className='mod-row'>
                          <img className='mod-row__icon' src='' alt='thumbs-up'/>
                          <p className='mod-row__text'>Point 1</p>
                      </li>
                  </ul>
  
                  <ul className='mod-column'>
                      <h3 className='mod-row__title'>{t('please dont')}</h3>
                      <li className='mod-row'>
                          <img className='mod-row__icon' src='' alt='thumbs-up'/>
                          <p className='mod-row__text'>Point 1</p>
                      </li>
                  </ul>
              </div>
          </div>
      );
  }
  
  export default ModPage;