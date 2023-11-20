'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n';
import React from 'react';




export default function Home() {
  const { t } = useTranslation();
  document.title=t('Odd Realm | Home')
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{t('terms')}</h1>
      
    </main>
  )
}
