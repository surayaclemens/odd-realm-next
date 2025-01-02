'use client'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../../i18n';
import React from 'react';
import styles from './TypingAnimation.module.css';

const TypingAnimation = () => {
    const { t } = useTranslation();
    const [typedText, setTypedText] = useState('');
    
    useEffect(() => {
      const textToType = t('gameDetails1');
      let index = 0;
      const intervalId = setInterval(() => {
        setTypedText(textToType.substring(0, index));
        index++;
        if (index > textToType.length) {
          clearInterval(intervalId);
        }
      }, 60); // Adjust the interval for typing speed
    
      return () => clearInterval(intervalId);
    }, [t]);
  
    return (
      <div className='lg:mt-8 min-h-full min-w-full overflow-hidden  flex items-center'>
        <p className={`text-2xl lg:text-8xl ${styles.typing}`}>
          {typedText}
        </p>
      </div>
    );
  };
  
  export default TypingAnimation;
  