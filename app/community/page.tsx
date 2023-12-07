'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
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
        <div className='community'>
            <div className='community__header'>
                <h1 className='community__title'>{t('community')}</h1>
                <h3 className='community__subtitle'>{t('find odd friends')}</h3>
            </div>
            {/* CODE WITH REDUX - REFACTOR */}
            {/* <div className='community-links'>
                <div className='community-links__single'>
                    {!isDiscordLinkVisible ?
                        <img className='community-image' src='' alt='door' onClick={() => showDis()}/>
                        :
                        <a href='https://discord.gg/6bw3k6w' target='blank'>
                            <button className='community-links__button'>Discord</button>
                        </a>
                    }
                </div>
                <div className='community-links__single'>
                    {!isTwitchLinkVisible ?
                        <img className='community-image' src='' alt='door'onClick={() => showTwi()}/>
                        :
                        <a href='https://www.twitch.tv/directory/category/odd-realm' target='blank'>
                            <button className='community-links__button'>Twitch</button>
                        </a>
                    }
                </div>
                <div className='community-links__single'>
                    {!isRedditLinkVisible ?
                        <img className='community-image' src='' alt='door'onClick={() => showRed()}/>
                        :
                        <a href='https://www.reddit.com/r/oddrealm/' target='blank'>
                            <button className='community-links__button'>Reddit</button>
                        </a>
                    }
                </div>
            </div> */}
        </div>
    );
}

export default CommunityPage;