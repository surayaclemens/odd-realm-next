'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';

import faqList from '../../data/faqs.json';

function FaqPage() {
  const { t } = useTranslation();

  // console.log(faqList);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [questions, setQuestions] = useState(
    faqList.map((item: any) => ({
      question: item.question,
      answer: item.answer,
      showAnswer: false,
    }))
  );

  const toggleAnswer = (index: number) => {
    setQuestions(prevQuestions => {
      console.log('test')
      const updatedQuestions = prevQuestions.map((q, i) =>
        i === index ? { ...q, showAnswer: !q.showAnswer } : q
      );
      return updatedQuestions;
    });
  };

  return (
    <div className='flex min-h-screen flex-col px-8 lg:px-32 xl:px-56 py-8 lg:py-36 font-sans text-white text-center'>
      <h3 className='text-5xl my-2 lg:text-7xl text-center'>{t('frequently asked questions')}</h3>
      <ul className='flex flex-col items-center w-full my-8'>
        {questions.map((item: any, index: number) => (
          <li 
            className='flex justify-between items-center w-full lg:w-4/5 my-2 bg-white bg-opacity-20 border-2 rounded-lg border-white p-2 hover:border-green-light hover:text-green-light cursor-pointer' 
            key={index} 
            onClick={() => toggleAnswer(index)}
          >
            <div className='w-full'>
              <p className='text-2xl'>{item.question}</p>
              {item.showAnswer && <p className='my-2 text-xl'>{item.answer}</p>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FaqPage;
