'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import faqList from '../../data/faqs.json';


function FaqPage () {
  const { t } = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
  
 
  const [questions, setQuestions] = useState(
    faqList.map((item: any) => {
      return {
        question: item.question,
        answer: item.answer,
        arrowDown: false
      }
    })
  );

  const dropArrow = (index: number) => {
    setQuestions((prevQuestions: any) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].arrowDown = true;
      return updatedQuestions;
    });
  }
  const resetArrow = (index: number) => {
    setQuestions((prevQuestions: any) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index].arrowDown = false;
      return updatedQuestions;
    });
  }
 

    return(
        <div className='flex min-h-screen flex-col items-center justify-between p-8 lg:px-28 font-sans text-black'>
            <div className='faq__header'>
                <h1 className='faq__title faq__title--caps'>{t('frequently asked questions')}</h1>
            </div>
            <ul className='faq__questions'>
                {questions.map((item: any, index: number) => {
                    return (
                    <li className='question' key={index}>
                        <div className='question__column'>
                            <p className='question__text question__text--bold'>{item.question}</p>
                            {item.arrowDown ? <p className='question__text'>{item.answer}</p>:null}
                        </div>
                        <div className='question__column question__column--clickable'>
                            {item.arrowDown 
                                ? 
                                <img className='question__arrow question__arrow--down' alt='arrow' src='' onClick={() => resetArrow(index)}/>
                                :
                                <img className='question__arrow' alt='arrow' src='' onClick={() => dropArrow(index)}/>
                        }
                        </div>
                    </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default FaqPage;