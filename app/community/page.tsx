'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';

function CommunityPage () {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return(
        <div className='flex min-h-screen flex-col items-center justify-start px-8 lg:px-28 font-sans text-black'>
            <div className='flex flex-col w-full'>
                <h1 className='text-lg uppercase my-2'>{t('find odd friends')}</h1>
            </div>
            <div className='lg:flex lg:justify-between lg:items-center lg:w-full'>
            <div className='flex flex-col w-full justify-evenly lg:items-between'>
                    <a className='my-3 flex justify-between items-center' href='https://discord.gg/6bw3k6w' target='blank'>
                        <p className='w-2/3 my-2 text-2xl lg:text-4xl lg:w-full'>{t('discord details')}</p>
                        <button className='bg-white bg-opacity-20 my-1 hover:border-white hover:text-white text-md flex justify-center rounded-md px-4 py-1 border-1 border-black'>Discord</button>
                    </a>
                    <a className='my-3 flex justify-between items-center' href='https://www.twitch.tv/directory/category/odd-realm' target='blank'>
                        <p className='w-2/3 my-2 text-2xl lg:text-4xl lg:w-full'>{t('twitch details')}</p>
                        <button className='bg-white bg-opacity-20 my-1 hover:border-white hover:text-white text-md flex justify-center rounded-md px-4 py-1 border-1 border-black'>Twitch</button>
                    </a>

                    <a className='my-3 flex justify-between items-center' href='https://www.reddit.com/r/oddrealm/' target='blank'>
                        <p className='w-2/3 my-2 text-2xl lg:text-4xl lg:w-full'>{t('reddit details')}</p>
                        <button className='bg-white bg-opacity-20 my-1 hover:border-white hover:text-white text-md flex justify-center rounded-md px-4 py-1 border-1 border-black'>Reddit</button>
                    </a>
                </div>
                {/* IMAGE OF CHARACTERS ON TRANSPARENT BG */}
                <Image className='lg:w-1/2' src='/images/characters.svg' alt='characters looking' width={320} height={300}/>
            </div>
        </div>
    );
}

export default CommunityPage;