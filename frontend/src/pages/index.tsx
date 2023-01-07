import React, { FC } from 'react';

import UndrawRemember from '../assets/undraw/undraw_remember.svg'
import UndrawFlashCards from '../assets/undraw/undraw_flash_cards.svg'
import UndrawTranslate from '../assets/undraw/undraw_translate.svg'
import UndrawQutoes from '../assets/undraw/undraw_quotes.svg'
import { user } from 'utils/constans';
import { Link } from 'react-router-dom';

const Index: FC = () => {
  return (
    <main className='flex flex-col items-center p-8 mt-24'>
      <section className='hero-box'>
        <div className='hero-text-element'>
          <h1 className='font-semibold text-8xl'>Storing the texts in your mind</h1>
          <p className='mt-4 text-2xl'>
            Write your texts and translate them with the help of one of the best translators
            - DeepL API, texts are saved in the database and used in later functionalities.
          </p>
          <div className='flex flex-row gap-4 mt-2'>
            { user ? (
              <Link to={'/dashboard'}>
                <button className='button-bg'>Dashboard</button>
              </Link>
            ) : (
              <>
                <Link to={'/auth/login'}>
                  <button className='button'>Login</button>
                </Link>
                <Link to={'/auth/register'}>
                  <button className='button-bg'>Register</button>
                </Link>
              </>
            ) }
          </div>
        </div>
        <div className='hero-image'>
          <img src={UndrawRemember} alt='' />
        </div>
      </section>

      <section className='mt-20 hero-box'>
        <div className='hero-text-element'>
          <h2 className='text-7xl'>Translating and saving texts</h2>
          <p className='mt-4 text-xl'>
            Translate your texts using deepl api and write them down to learn from them.
          </p>
        </div>
        <div className='hero-image'>
          <img src={UndrawTranslate} alt='' />
        </div>
      </section>

      <section className='mt-20 hero-box'>
        <div className='hero-text-element'>
          <h3 className='text-7xl'>Flash cards</h3>
          <p className='mt-4 text-xl'>
            Learn using flashcards, draw words and use flash cards.
          </p>
        </div>
        <div className='hero-image'>
          <img src={UndrawFlashCards} alt='' />
        </div>
      </section>

      <section className='mt-20 hero-box'>
        <div className='hero-text-element'>
          <h4 className='text-7xl'>English quotes and stories</h4>
          <p className='mt-4 text-xl'>
            Read familiar quotes and stories to learn new words and sentence context. Quotes - API ninjas and API shortstories.
          </p>
        </div>
        <div className='hero-image'>
          <img src={UndrawQutoes} alt='' />
        </div>
      </section>
    </main>
  );
};

export default Index;
