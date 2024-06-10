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
      const updatedQuestions = prevQuestions.map((q, i) =>
        i === index ? { ...q, showAnswer: !q.showAnswer } : q
      );
      return updatedQuestions;
    });
  };

  return (
    <div className='flex min-h-screen flex-col px-8 lg:px-32 py-8 lg:py-52 font-sans text-black'>
      <h3 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>{t('frequently asked questions')}</h3>
      
      <ul className='flex flex-col items-center w-full my-8'>
        {questions.map((item: any, index: number) => (
          <li 
            className='flex justify-between items-center w-full lg:w-4/5 my-2 bg-white bg-opacity-20 border-2 rounded-md border-black p-2 hover:border-white cursor-pointer' 
            key={index} 
            onClick={() => toggleAnswer(index)}
          >
            <div className='w-4/5'>
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
