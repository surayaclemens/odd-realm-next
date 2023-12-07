'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import reviews from '../../data/reviews.json';


function PlayPage () {
    const { t } = useTranslation();
      useEffect(() => {
          window.scrollTo(0, 0)
      }, []);
  
      return(
          <div className='play'>
              <div className='play__header'>
                  <h1 className='play__title'>{t('play')}</h1>
              </div>
              <div className='play-links'>
                      <a href='https://store.steampowered.com/app/688060/Odd_Realm/' target='blank'>
                          <img className='store-icon' src='' alt='steam icon'/>
                      </a>
                      <iframe className='store-icon store-icon--itch' src="https://itch.io/embed/266192"><a href="https://unknownorigingames.itch.io/oddrealm">Odd Realm by UnknownOriginGames</a></iframe>
                      <a href='https://www.gog.com/en/game/odd_realm' target='blank'>
                          <img className='store-icon' src='' alt='gog icon'/>
                      </a>
                  
              </div>
              <h3 className='play__subtitle'>{t('thanks for all the nice reviews')}</h3>
              <div className='reviews'>
                  {reviews.map((item, index) => {
                      return (
                          <div className='reviews__single' key={index}>
                              <p className='reviews__text'>"{item.text}"</p>
                          </div>
                      )
                  })}
              </div>
          </div>
      );
  }
  
  export default PlayPage;