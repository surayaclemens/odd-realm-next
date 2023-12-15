'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import {showDiscord, showTwitch, showReddit, hideDiscord, hideReddit, hideTwitch} from '../redux/doorLinks';

function CommunityPage () {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // const isDiscordLinkVisible = useSelector((state: { doorLinks: { discord: any; }; }) => state.doorLinks.discord);
    // const isTwitchLinkVisible = useSelector((state: { doorLinks: { twitch: any; }; }) => state.doorLinks.twitch);
    // const isRedditLinkVisible = useSelector((state: { doorLinks: { reddit: any; }; }) => state.doorLinks.reddit);

    // const dispatch = useDispatch();
    
    // useEffect(() => {
    //     dispatch(hideDiscord());
    //     dispatch(hideTwitch());
    //     dispatch(hideReddit());
    // }, [dispatch])
    // const showDis = () => {
    //     dispatch(showDiscord());
    // };
    // const showTwi = () => {
    //     dispatch(showTwitch());
    // };
    // const showRed = () => {
    //     dispatch(showReddit());
    // };

    return(
        <div className='flex min-h-screen flex-col items-center justify-start p-8 lg:px-28 font-sans text-black'>
            <div className='flex flex-col w-full'>
                <h1 className='text-lg uppercase lg:text-2xl my-2'>{t('find odd friends')}</h1>
            </div>
            <div className='flex flex-col w-full justify-evenly'>
                <a className='my-3 flex flex-col justify-between items-start' href='https://discord.gg/6bw3k6w' target='blank'>
                    <p className=''>Talk about blah blah on</p>
                    <button className='bg-white bg-opacity-20 my-1 hover:border-white hover:text-white text-md flex justify-center rounded-md px-4 py-1 border-1 border-black'>Discord</button>
                </a>
                <a className='my-3 flex flex-col justify-between items-start' href='https://www.twitch.tv/directory/category/odd-realm' target='blank'>
                    <p className=''>Talk about blah blah on</p>
                    <button className='bg-white bg-opacity-20 my-1 hover:border-white hover:text-white text-md flex justify-center rounded-md px-4 py-1 border-1 border-black'>Twitch</button>
                </a>

                <a className='my-3 flex flex-col justify-between items-start' href='https://www.reddit.com/r/oddrealm/' target='blank'>
                    <p className=''>Talk about blah blah on</p>
                    <button className='bg-white bg-opacity-20 my-1 hover:border-white hover:text-white text-md flex justify-center rounded-md px-4 py-1 border-1 border-black'>Reddit</button>
                </a>
            </div>
        </div>
    );
}

export default CommunityPage;