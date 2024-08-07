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
        
          <div className='flex min-h-screen flex-col px-8 lg:px-32 xl:px-56 lg:py-52 font-sans text-white'>
                <h3 className='text-md uppercase my-2 lg:text-7xl lg:normal-case'>{t('reviews title')}</h3>
                    <div className='flex flex-col my-4 lg:my-8'>

                        {/* links to full articles */}
                        <div className='flex flex-col lg:flex-row justify-between'>
                            <div className='flex flex-col lg:my-16 bg-white bg-opacity-20 rounded-md p-4 lg:p-16'>
                                <p className='text-xl lg:text-5xl italic my-4'>&quot;Odd Realm is a standout Dwarffortresslike. With Z levels...&quot;</p>
                                <button className='hover:text-green hover:border-green bg-white bg-opacity-20 text-white border-2 border-white rounded-md py-2 px-3 text-md lg:text-xl lg:w-56'><a href='https://www.rockpapershotgun.com/odd-realm-is-a-standout-dwarffortresslike-with-z-levels#:~:text=Odd%20Realm%20is%20a%20standout%20Dwarffortresslike.%20With%20Z%20levels' target='_blank'>{t('Read the full article')}</a></button> 
                            </div>

                            <div className='w-[100px]'></div>

                            <div className='flex flex-col my-4 lg:my-16 bg-white bg-opacity-20 rounded-md p-4 lg:p-16'>
                                <p className='text-xl lg:text-5xl italic my-4'>&quot;Fantasy colony sim Odd Realm is quite charming and a bit weird...&quot;</p>
                                <button className='hover:text-green hover:border-green bg-white bg-opacity-20 text-white border-2 border-white rounded-md py-2 px-3 text-md lg:text-xl lg:w-56'><a href='https://www.pcgamer.com/fantasy-colony-sim-odd-realm-is-quite-charming-and-a-bit-weird/' target='_blank'>{t('Read the full article')}</a></button> 
                            </div>
                        </div>

                        {/* long-form steam reviews */}
                        {reviews.map((item, index) => {
                            return (
                                <div className='flex bg-white bg-opacity-20 hover:bg-opacity-40 rounded-md my-2 p-4 lg:px-36 lg:py-8' key={index}>
                                    <p className='text-xl italic'>&quot;{item.text.replace(/"/g, "&quot;")}&quot;</p>
                                </div>
                            )
                        })}
                    </div>
          </div>
      );
  }
  
  export default ReviewsPage;