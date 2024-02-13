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
        <div className='flex min-h-screen flex-col px-8 lg:px-28 py-8 lg:py-36 font-sans text-black'>
            <h3 className='text-md uppercase my-4 lg:text-8xl lg:normal-case'>{t('find odd friends')}</h3>
            {/* need to add translation for below */}
            <h3 className='text-md my-2 lg:text-5xl lg:normal-case'>{t('We have an incredible community of committed mods, bug reporters, etc. Join us!')}</h3>
                {/* LIST OF LINKS */}
                <div className='flex flex-col my-4 w-full justify-between lg:flex-row items-center'>
                    <a className='flex flex-col justify-between items-center w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] hover:border-white hover:text-white text-xl bg-white bg-opacity-20 border-2 border-black rounded-sm p-4 my-2' href='https://discord.gg/6bw3k6w' target='blank'>
                        <div className='flex justify-end w-full'>
                            <Image src='/icons/link-external.svg' alt='external link icon' width={20} height={20}/>
                        </div>
                        <div className='flex flex-col items-center justify-evenly h-full'>
                            <p className='text-xl lg:text-3xl text-center'>{t('discord details')}</p>
                            <Image src='/icons/discord-dark.svg' alt='discord icon' width={150} height={150} />
                        </div>
                    </a>
                    <a className='flex flex-col justify-between items-center w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] hover:border-white hover:text-white text-xl bg-white bg-opacity-20 border-2 border-black rounded-sm p-4 my-2' href='https://www.twitch.tv/directory/category/odd-realm' target='blank'>
                        <div className='flex justify-end w-full'>
                            <Image src='/icons/link-external.svg' alt='external link icon' width={20} height={20}/>
                        </div>
                        <div className='flex flex-col items-center justify-evenly h-full'>
                            <p className='text-xl lg:text-3xl text-center'>{t('twitch details')}</p>
                            <Image src='/icons/twitch-dark.svg' alt='twitch icon' width={140} height={140} />
                        </div>
                    </a>
                    <a className='flex flex-col justify-between items-center w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] hover:border-white hover:text-white text-xl bg-white bg-opacity-20 border-2 border-black rounded-sm p-4 my-2' href='https://www.reddit.com/r/oddrealm/' target='blank'>
                        <div className='flex justify-end w-full'>
                            <Image src='/icons/link-external.svg' alt='external link icon' width={20} height={20}/>
                        </div>
                        <div className='flex flex-col items-center justify-evenly h-full'>
                            <p className='text-xl lg:text-3xl text-center'>{t('reddit details')}</p>
                            <Image src='/icons/reddit-dark.svg' alt='reddit icon' width={140} height={140} />
                        </div>
                    </a>
                </div>
                {/* IMAGE OF CHARACTERS ON TRANSPARENT BG */}
                {/* <Image className='lg:w-1/2' src='/images/characters.svg' alt='characters looking' width={300} height={300}/> */}
        </div>
    );
}

export default CommunityPage;