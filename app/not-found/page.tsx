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
        <div className="not-found">
            <h1 className="not-found__title">Sorry, that page cannot be found!</h1>
            <Link href='/'>Back to home</Link>
        </div>

    );
}

export default NotFoundPage;