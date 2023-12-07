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
          <div className='contact'>
              <div className='contact__header'>
                  <h1 className='contact__title contact__title--caps'>{t('contact us')}</h1>
                  <h3 className='contact__title'>{t('with your queries')}</h3>
              </div>
              <form className='form' onSubmit={handleSubmit}>
                  <input className='form__input' 
                      type='text' 
                      placeholder={t('first name')}
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input className='form__input' 
                      type='text' 
                      placeholder={t('last name')}
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                  />
                  <input className='form__input' 
                      type='email'
                      placeholder={t('youremail@address.com')}
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className='subject'>
                      <input className='form__input-subject' 
                          type='text' 
                          placeholder={t('subject')}
                          required
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                      />
                      <img className='tooltip' src='' title="Hate this part? We'll make one up for you :~)" onClick={() => handleSubject()}/>
                  </div>
                  <textarea className='form__box' 
                      placeholder={t('your message here')} 
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button className='form__button'>
                  {isSent ? t('sent!') : t('send')}
                  </button>
              </form>
   
              <div className='prompt'>
                  <div className='prompt__row'>
                      <h3 className='contact__subtitle'>{t('or send us a message on')}</h3>
                  </div>
                  <div className='prompt__row'>
                      <a href='https://twitter.com/waylonsnedker' target='blank'><p className='contact__text'>{t('twitter')}</p></a>
                      <a href='https://discord.gg/6bw3k6w' target='blank'><p className='contact__text'>{t('discord')}</p></a>
                      <a href='https://www.instagram.com/oddrealmgame/' target='blank'><p className='contact__text'>{t('instagram')}</p></a>
                  </div>
              </div>
          </div>
      );
  }
  
  export default ContactPage;
  
  