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
          <div className='flex min-h-screen flex-col px-8 lg:px-32 xl:px-56 py-8 lg:py-52 font-sans text-white text-center'>
            <h3 className='text-md uppercase my-2 lg:text-7xl lg:normal-case'>{t('contact us')}</h3>
            <h3 className='text-lg lg:text-2xl my-2 lg:my-4'>
                        {t('Use this form, or send us a message on')}
                        <Link className='text-white hover:text-green hover:border-green bg-white bg-opacity-20 border-2 border-white rounded-md mx-2 px-2 lg:text-xl' href='https://twitter.com/waylonsnedker' target='blank'>{t('twitter')}</Link>
                        <Link className='text-white hover:text-green hover:border-green bg-white bg-opacity-20 border-2 border-white rounded-md mx-2 px-2 lg:text-xl' href='https://discord.gg/6bw3k6w' target='blank'>{t('discord')}</Link>
                        <Link className='text-white hover:text-green hover:border-green bg-white bg-opacity-20 border-2 border-white rounded-md mx-2 px-2 lg:text-xl' href='https://www.instagram.com/oddrealmgame/' target='blank'>{t('instagram')}</Link>
                    </h3>
            <div className='flex flex-col justify-between items-center w-full'>
                <form className='flex flex-col w-full my-4 lg:w-1/2' onSubmit={handleSubmit}>
                    <input className='my-2 text-md lg:text-xl bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-md p-2' 
                        type='text' 
                        placeholder={t('first name')}
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input className='my-2 text-md lg:text-xl bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-md p-2' 
                        type='text' 
                        placeholder={t('last name')}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input className='my-2 text-md lg:text-xl bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-md p-2' 
                        type='email'
                        placeholder={t('youremail@address.com')}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* subject */}
                    <div className='flex items-center justify-between w-full'>
                        <input className='w-full my-2 text-md lg:text-xl bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-md p-2' 
                            type='text' 
                            placeholder={t('subject')}
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <Image width={48} height={48} className='ml-2 rounded-md border-white border-2' src='/icons/star-white.svg' alt='magic star icon' title="Hate this part? We'll make one up for you :~)" onClick={() => handleSubject()}/>
                    </div>
                    {/* message box */}
                    <textarea className='my-2 text-md bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-md p-2 lg:text-xl h-[200px]' 
                        placeholder={t('your message here')} 
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <button className='hover:text-green hover:border-green text-xl bg-white bg-opacity-20 text-white border-2 border-white rounded-md py-2 px-3 my-6'>
                    {isSent ? t('sent!') : t('send')}
                    </button>
                </form>
                {/* <div className='w-[500px] h-[400px] bg-black m-6'> 
                    <Image src='/' alt='pixel art of messaging' width={250} height={250}/>
                </div> */}
            </div>
   


          </div>
      );
  }
  
  export default ContactPage;
  
  