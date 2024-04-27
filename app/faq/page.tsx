'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';

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
        <div className='flex min-h-screen flex-col px-8 lg:px-28 py-8 lg:py-36 font-sans text-black'>
            <h3 className='text-md uppercase my-2 lg:text-8xl lg:normal-case'>{t('frequently asked questions')}</h3>

            <ul className='flex flex-col w-full my-8'>
                {questions.map((item: any, index: number) => {
                    return (
                    <li className='flex justify-between items-center w-full my-2 bg-white bg-opacity-20 border-1 border-black p-2' key={index}>
                        <div className='w-4/5'>
                            <p className='text-2xl'>{item.question}</p>
                            {item.arrowDown ? <p className='my-2 text-xl'>{item.answer}</p>:null}
                        </div>
                            {item.arrowDown 
                                ? 
                                <Image width={30} height={30} className='cursor-pointer' alt='minus' src='/icons/minus-square.svg' onClick={() => resetArrow(index)}/>
                                :
                                <Image width={30} height={30} className='cursor-pointer' alt='plus' src='/icons/plus-square.svg' onClick={() => dropArrow(index)}/>
                        }
                    </li>
                    );
                })}
            </ul>

        </div>
    );
}

export default FaqPage;