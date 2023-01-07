import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import UndrawRemember from '../assets/undraw/undraw_remember.svg'
import UndrawFlashCards from '../assets/undraw/undraw_flash_cards.svg'
import UndrawTranslate from '../assets/undraw/undraw_translate.svg'
import UndrawQutoes from '../assets/undraw/undraw_quotes.svg'

const cards = [
  {
    route: '/features/texts',
    name: 'Translating texts',
    description: 'Translate your texts using deepl api.',
    image: UndrawTranslate
  },
  {
    route: '/features/flash-cards',
    name: 'Texts flash cards',
    description: 'Draw words and learn by using flash cards',
    image: UndrawFlashCards
  },
  {
    route: '/features/quotes',
    name: 'English quotes',
    description: 'Read quotes to learn new words and sentence context, using Quotes - API ninjas',
    image: UndrawRemember
  },
  {
    route: '/features/stories',
    name: 'English stories',
    description: 'Read stories to learn new words and sentence context, using API shortstories.',
    image: UndrawQutoes
  },
]

const Dashboard: FC = () => {
  const cardsMap = cards.map(card => {
    return (
      <div key={card.route} className='flex flex-col p-4 text-center border rounded-md'>
        <h1 className='text-3xl font-medium'>
          {card.name}
        </h1>
        <Link to={card.route}>
          <button className='mt-2 button-bg'>
            Check out
          </button>
        </Link>
        <p className='mt-8 text-sm font-light'>
          {card.description}
        </p>
        <img className='mt-4 max-h-96' src={card.image} alt="" />
      </div>
    )
  })

  return (
    <main className='flex justify-center mt-24 xl:mt-48'>
      <section className='flex flex-col w-11/12 gap-10 p-2 xl:flex-row'>
        { cardsMap }
      </section>
    </main>
  );
};

export default Dashboard;
