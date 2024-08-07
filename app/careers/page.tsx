'use client'
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';

const CareersPage = () => {
    const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return(
        <div className="flex min-h-screen flex-col items-start justify-start px-8 lg:px-28 font-sans text-white">
            <h1 className="text-3xl">Thanks for your interest!</h1>
            <h1 className="text-lg">Check back for future openings.</h1>
        </div>

    );
}

export default CareersPage;