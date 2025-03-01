'use client'
import Image from 'next/image';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';

function CommunityPage() {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <div className='flex min-h-screen flex-col px-8 lg:px-32 xl:px-56 py-8 lg:py-36 font-sans text-white text-center'>
            <h1 className='text-5xl my-2 lg:text-7xl lg:normal-case'>{t('Community')}</h1>
            <h2 className='text-sm lg:text-lg uppercase my-2 text-center'>{t('Find odd friends')}</h2>
            <div className='flex flex-col my-4 w-full justify-evenly lg:flex-row items-center'>
                <a className='group flex flex-col justify-between items-center w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] hover:border-green-light hover:text-green-light text-xl bg-white bg-opacity-20 border-2 border-white rounded-lg p-4 my-2' href='https://discord.gg/6bw3k6w' target='_blank'>
                    <div className='flex justify-end w-full'>
                        <div className="relative">
                            <Image className="block" src='/icons/link-external-white.svg' alt='external link icon' width={20} height={20} />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-evenly h-full'>
                        <p className='text-xl lg:text-3xl text-center'>{t('discord details')}</p>
                        <div className="relative">
                            <Image className="block" src='/icons/discord-white.svg' alt='discord icon' width={150} height={150} />
                        </div>
                    </div>
                </a>
                <a className='group flex flex-col justify-between items-center w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] hover:border-green-light hover:text-green-light text-xl bg-white bg-opacity-20 border-2 border-white rounded-lg p-4 my-2' href='https://www.twitch.tv/directory/category/odd-realm' target='_blank'>
                    <div className='flex justify-end w-full'>
                        <div className="relative">
                            <Image className="block" src='/icons/link-external-white.svg' alt='external link icon' width={20} height={20} />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-evenly h-full'>
                        <p className='text-xl lg:text-3xl text-center'>{t('twitch details')}</p>
                        <div className="relative">
                            <Image className="block" src='/icons/twitch-white.svg' alt='twitch icon' width={140} height={140} />
                        </div>
                    </div>
                </a>
                <a className='group flex flex-col justify-between items-center w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] hover:border-green-light hover:text-green-light text-xl bg-white bg-opacity-20 border-2 border-white rounded-lg p-4 my-2' href='https://www.reddit.com/r/oddrealm/' target='_blank'>
                    <div className='flex justify-end w-full'>
                        <div className="relative">
                            <Image className="block" src='/icons/link-external-white.svg' alt='external link icon' width={20} height={20} />
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-evenly h-full'>
                        <p className='text-xl lg:text-3xl text-center'>{t('reddit details')}</p>
                        <div className="relative">
                            <Image className="block" src='/icons/reddit-white.svg' alt='reddit icon' width={140} height={140} />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default CommunityPage;
