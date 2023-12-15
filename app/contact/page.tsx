'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import axios from 'axios';
import { error } from 'console';


function ContactPage () {
    const { t } = useTranslation();
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    
  
  // FORM STATE
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false);
    const [formValid, setFormValid] = useState(false);
  
  // FORM SUBMISSION
    const handleSubmit = (e: any) => {
      e.preventDefault();
      const contactFormSubmission = {
          firstName,
          lastName,
          email,
          subject,
          message
      }
      console.log(contactFormSubmission);
      axios.post('url endpoint', contactFormSubmission)
          .then((res: any) => {
              console.log(res);
              setIsSent(true);
          })
          .catch((err: any) => console.error(err));
    }
  
  const subjectOptions = [
      t('subject1'),
      t('subject2'),
      t('subject3'),
      t('subject4'),
      t('subject5'),
      t('subject6'),
      t('subject7'),
      t('subject8'),
      t('subject9')
  ]
  // SUBJECT GENERATOR
  const handleSubject = () => {
      let randomIndex = Math.floor(Math.random() * subjectOptions.length);
      setSubject(subjectOptions[randomIndex]);
  }
  
      return(
          <div className='flex min-h-screen flex-col items-start p-8 lg:px-28 font-sans text-black'>
            <h1 className='text-lg uppercase lg:text-2xl my-2'>{t('contact us')}</h1>
            <form className='flex flex-col w-full' onSubmit={handleSubmit}>
                <input className='my-2 text-md bg-white bg-opacity-20 placeholder-placeholder border-2 text-black border-black rounded-md p-2' 
                    type='text' 
                    placeholder={t('first name')}
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input className='my-2 text-md bg-white bg-opacity-20 placeholder-placeholder border-2 text-black border-black rounded-md p-2' 
                    type='text' 
                    placeholder={t('last name')}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input className='my-2 text-md bg-white bg-opacity-20 placeholder-placeholder border-2 text-black border-black rounded-md p-2' 
                    type='email'
                    placeholder={t('youremail@address.com')}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {/* subject */}
                <div className='flex items-center justify-between w-full'>
                    <input className='w-full my-2 text-md bg-white bg-opacity-20 placeholder-placeholder border-2 text-black border-black rounded-md p-2' 
                        type='text' 
                        placeholder={t('subject')}
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                    <Image width={40} height={40} className='ml-2 rounded-md border-black border-1' src='/icons/star-white.svg' alt='magic star icon' title="Hate this part? We'll make one up for you :~)" onClick={() => handleSubject()}/>
                </div>
                {/* message box */}
                <textarea className='my-2 text-md bg-white bg-opacity-20 placeholder-placeholder border-2 text-black border-black rounded-md p-2' 
                    placeholder={t('your message here')} 
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button className='hover:text-white hover:border-white text-xl bg-white bg-opacity-20 text-black border-2 border-black rounded-md py-2 px-3 my-6'>
                {isSent ? t('sent!') : t('send')}
                </button>
              </form>
   

                <h3 className='text-lg uppercase lg:text-2xl mt-8 my-2'>{t('or send us a message on...')}</h3>
                <div className='flex w-full justify-between'>
                    <a href='https://twitter.com/waylonsnedker' target='blank'><p className='bg-white bg-opacity-20 my-1 hover:border-white hover:text-white text-md flex justify-center rounded-md px-4 py-1 border-1 border-black'>{t('twitter')}</p></a>
                    <a href='https://discord.gg/6bw3k6w' target='blank'><p className='bg-white bg-opacity-20 my-1 hover:border-white hover:text-white text-md flex justify-center rounded-md px-4 py-1 border-1 border-black'>{t('discord')}</p></a>
                    <a href='https://www.instagram.com/oddrealmgame/' target='blank'><p className='bg-white bg-opacity-20 my-1 hover:border-white hover:text-white text-md flex justify-center rounded-md px-4 py-1 border-1 border-black'>{t('instagram')}</p></a>
                </div>
          </div>
      );
  }
  
  export default ContactPage;
  
  