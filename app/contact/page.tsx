'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';


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
    const [botDetectField, setBotDetectField] = useState('');
    const [formValid, setFormValid] = useState(false);
  
  // FORM SUBMISSION
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (botDetectField) {
        setError("Spam detected!"); 
        return; 
      }
  
    // Create FormData object
    const formData = new FormData();
    formData.append('firstName', firstName);
    formData.append('lastName', lastName);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);
  
    // Submit the form
    axios.post('https://formspree.io/f/xdkkpaek', formData, {
      headers: {
        'Accept': 'application/json',
      },
    })
      .then((res) => {
        console.log(res);
        setIsSent(true); 
      })
      .catch((err) => console.error(err));
  };
    
  
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
          <div className='flex min-h-screen flex-col px-8 lg:px-32 xl:px-56 py-8 lg:py-36 font-sans text-white text-opacity-90 text-center'>
            <h3 className='text-5xl my-2 lg:text-7xl lg:normal-case'>{t('contact us')}</h3>
            <h2 className='text-sm lg:text-lg uppercase my-2 text-center'>{t('we like to chat')}</h2>
            <div className='flex flex-col justify-between items-center w-full'>
                <form className='flex flex-col w-full my-4 lg:w-2/3 xl:w-2/3' onSubmit={handleSubmit}>
                    <input className='my-2 text-md lg:text-xl bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-sm p-2 focus:outline-green-light' 
                        type='text' 
                        placeholder={t('first name')}
                        minLength={2}
                        maxLength={20}
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <input className='my-2 text-md lg:text-xl bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-sm p-2 focus:outline-green-light' 
                        type='text' 
                        placeholder={t('last name')}
                        minLength={2}
                        maxLength={20}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <input className='my-2 text-md lg:text-xl bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-sm p-2 focus:outline-green-light' 
                        type='email'
                        placeholder={t('youremail@address.com')}
                        required
                        minLength={2}
                        maxLength={50}
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {/* subject */}
                    <div className='flex items-center justify-between w-full'>
                        <input className='w-full my-2 text-md lg:text-xl bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-sm p-2 focus:outline-green-light' 
                            type='text' 
                            placeholder={t('subject')}
                            required
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                        <Image width={48} height={48} className='ml-2 rounded-sm border-white hover:border-green-light border-2' src='/icons/star-white.svg' alt='magic star icon' title="Hate this part? We'll make one up for you :~)" onClick={() => handleSubject()}/>
                    </div>
                    {/* message box */}
                    <textarea className='my-2 text-md bg-white bg-opacity-5 placeholder-placeholder border-2 text-white border-white rounded-sm p-2 lg:text-xl h-[200px] focus:outline-green-light' 
                        placeholder={t('your message here')} 
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    {/* hidden honeypot input to prevent bots*/}
                    <input 
                        type="text" 
                        name="honeypot" 
                        className="hidden" 
                        autoComplete="off" 
                        onChange={(e) => setBotDetectField(e.target.value)}
                    />
                    {/* submit button */}
                    <button className='hover:text-green-light hover:border-green-light text-xl bg-white bg-opacity-20 text-white border-2 border-white rounded-sm py-2 px-3 my-6'>
                    {isSent ? t('sent!') : t('send')}
                    </button>
                </form>
                <h3 className='text-sm lg:text-lg uppercase my-2 text-center'>{t('or send us a message on')}
                    <Link className='text-white hover:text-green-light hover:border-green-light bg-white bg-opacity-20 border-2 border-white rounded-sm mx-2 px-2 text-sm lg:text-lg' href='https://twitter.com/waylonsnedker' target='blank'>{t('twitter')}</Link>
                    <Link className='text-white hover:text-green-light hover:border-green-light bg-white bg-opacity-20 border-2 border-white rounded-sm mx-2 px-2 text-sm lg:text-lg' href='https://discord.gg/6bw3k6w' target='blank'>{t('discord')}</Link>
                    <Link className='text-white hover:text-green-light hover:border-green-light bg-white bg-opacity-20 border-2 border-white rounded-sm mx-2 px-2 text-sm lg:text-lg' href='https://www.instagram.com/oddrealmgame/' target='blank'>{t('instagram')}</Link>
                </h3>
            </div>
          </div>
      );
  }
  
  export default ContactPage;
  

function setError(arg0: string) {
    throw new Error('Function not implemented.');
}
  