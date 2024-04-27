'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import reviews from '../../data/reviews.json';


function ReviewsPage () {
    const { t } = useTranslation();
      useEffect(() => {
          window.scrollTo(0, 0)
      }, []);
  
      return(
        
          <div className='flex min-h-screen flex-col px-8 lg:px-28 py-8 lg:py-36 font-sans text-black'>
                <h3 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>{t('reviews title')}</h3>
                    <div className='flex flex-wrap my-4'>
                        {reviews.map((item, index) => {
                            return (
                                <div className='md:w-1/3'>
                                    <p className='flex-wrap m-2 text-sm bg-white bg-opacity-20 rounded-sm p-2 border-1 border-white text-black' key={index}>{item.text}</p>
                                </div>
                            )
                        })}
                    </div>
          </div>
      );
  }
  
  export default ReviewsPage;