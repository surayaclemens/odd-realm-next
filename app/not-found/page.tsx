'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const NotFoundPage = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <div className="flex min-h-screen flex-col px-8 lg:px-28xl:px-56 py-8 lg:py-52 font-sans text-white text-center">
            <h1 className="text-lg">Sorry, that page cannot be found!</h1>
            <Link className='text-lg underline' href='/'>Back to home</Link>
        </div>

    );
}

export default NotFoundPage;