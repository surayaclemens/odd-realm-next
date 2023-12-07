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
    const isMobile = window.innerWidth <= 768;
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
      return(
         <div className='about'>
  
          <div className='about__section'>
              <h1 className='about__title'>{t('about our world')}</h1>
              <img className='about__hero-image' src=''/>
              <p className='about__text about__text--center'>This is a placeholder sentence</p>
              <p className='about__text about__text--center'>This is another placeholder sentence</p>
          </div>
          {/* THE BASICS */}
          <section className='about__section'>
              <h2 className='about__title'>{t('the basics')}</h2>
              <div className='about__row'>
                  <img className='about__bullet' src='' alt='custom bullet point'/>
                  <p className='about__text'>{t('gameFact1')}</p>
              </div>
              <div className='about__row'>
                  <img className='about__bullet' src='' alt='custom bullet point'/>
                  <p className='about__text'>{t('gameFact2')}</p>
              </div>
              <div className='about__row'>
                  <img className='about__bullet' src='' alt='custom bullet point'/>
                  <p className='about__text'>{t('gameFact3')}</p>
              </div>
              <div className='about__row'>
                  <img className='about__bullet' src='' alt='custom bullet point'/>
                  <p className='about__text'>{t('gameFact4')}</p>
              </div>
              <div className='about__row'>
                  <img className='about__bullet' src='' alt='custom bullet point'/>
                  <p className='about__text'>{t('gameFact5')}</p>
              </div>
              <img className='about-characters' src='' />
          </section>
          {/* HOW TO PLAY */}
          <section className='about__section'>
              <h2 className='about__title'>{t('how to play')}</h2>
                  <div className='about__row'>
                      <img className='about__bullet' src='' alt='custom bullet point'/>
                      <p className='abouto__text'>text point</p>
                  </div>
                  <div className='about__row'>
                      <img className='about__bullet' src='' alt='custom bullet point'/>
                      <p className='about__text'>text point</p>
                  </div>
                  <div className='about__row'>
                      <img className='about__bullet' src='' alt='custom bullet point'/>
                      <p className='about__text'>text point</p>
                  </div>
                  <div className='about__row'>
                      <img className='about__bullet' src='' alt='custom bullet point'/>
                      <p className='about__text'>text point</p>
                  </div>
          </section>
          {/* MEET THE TEAM */}
          <section className='about__section'>
              <h2 className='about__title'>{t('meet the team')}</h2>
              <div className='about__row'>
                  <img className='about-avatar' src=''/>
                  <p className='about__text'><span className='about__text--bold'>Waylon Snedker </span>will have a short bio here. It's a few sentences.</p>
              </div>
              <div className='about__row'>
                  <img className='about-avatar' src=''/>
                  <p className='about__text'><span className='about__text--bold'>Matt Creamer </span>will have a short bio here. It's a few sentences.</p>
              </div>
          </section>
          {/* SOMETHING ELSE */}
          <section className='about__section'>
              <h2 className='about__title'>{t('something else')}</h2>
              <p className='about__text about__text--center'>{t('check out our FAQs1')}
              <Link href="/faq"className='about__text--bold'>{t('FAQs page')}</Link>
              {t('check out our FAQs2')}</p>
          </section>
         </div>
      );
  }
  
  export default AboutPage;