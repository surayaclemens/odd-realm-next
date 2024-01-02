'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';

function CommunityPage () {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    return(
        <div className='flex min-h-screen flex-col px-8 lg:px-28 py-8 lg:py-48 font-sans text-black'>
            <h3 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>{t('find odd friends')}</h3>
            <div className='w-full flex flex-col lg:flex-row py-4'>
            <div className='flex flex-col w-full items-start'>
                <p className='my-2 text-2xl lg:text-3xl lg:w-full'>{t('discord details')}</p>
                <Link className='hover:text-white hover:border-white text-xl bg-white bg-opacity-20 text-black border-2 border-black rounded-md my-4 py-2 px-3 uppercase text-center lg:w-[350px]' href='https://discord.gg/6bw3k6w' target='blank'>Discord</Link>
                <p className='my-2 text-2xl lg:text-3xl lg:w-full'>{t('twitch details')}</p>
                <Link className='hover:text-white hover:border-white text-xl bg-white bg-opacity-20 text-black border-2 border-black rounded-md my-4 py-2 px-3 uppercase text-center lg:w-[350px]' href='https://www.twitch.tv/directory/category/odd-realm' target='blank'>Twitch</Link>
                <p className='my-2 text-2xl lg:text-3xl lg:w-full'>{t('reddit details')}</p>
                <Link className='hover:text-white hover:border-white text-xl bg-white bg-opacity-20 text-black border-2 border-black rounded-md my-4 py-2 px-3 uppercase text-center lg:w-[350px]' href='https://www.reddit.com/r/oddrealm/' target='blank'>Reddit</Link>
            </div>
                {/* IMAGE OF CHARACTERS ON TRANSPARENT BG */}
                <Image className='lg:w-1/2' src='/images/characters.svg' alt='characters looking' width={300} height={300}/>
            </div>
        </div>
    );
}

export default CommunityPage;