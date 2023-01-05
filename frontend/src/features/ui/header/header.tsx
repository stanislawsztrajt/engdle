import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { user } from 'utils/constans';

const links = [
  {
    route: '/features/texts',
    name: 'Translating texts',
  },
  {
    route: '/features/flash-cards',
    name: 'Texts flash cards',
  },
  {
    route: '/features/quotes',
    name: 'English quotes',
  },
  {
    route: '/features/stories',
    name: 'English stories',
  },
];

const Header: FC = () => {
  const linksMap = links.map((link) => {
    return (
      <li key={link.name} className="text-gray-800 duration-100 hover:text-black">
        <Link to={link.route}>{link.name}</Link>
      </li>
    );
  });

  return (
    <nav className="px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 bg-white border-b">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">Engdle</span>
        </Link>
        <div className="flex md:order-2">
          {user ? (
            <Link to={'/dashboard'}>
              <button
                type="button"
                className="text-white ml-4 bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span className="ml-2">Dashboard</span>
              </button>
            </Link>
          ) : (
            <>
              <Link to={'/auth/login'}>
                <button
                  type="button"
                  className="text-indigo-500 border border-indigo-500 hover:border-indigo-600 hover:text-indigo-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                >
                  <FontAwesomeIcon icon={faRightToBracket} />
                  <span className="ml-2">Sign in</span>
                </button>
              </Link>
              <Link to={'/auth/register'}>
                <button
                  type="button"
                  className="text-white ml-4 bg-indigo-500 hover:bg-indigo-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
                >
                  <FontAwesomeIcon icon={faUserPlus} />
                  <span className="ml-2">Sign up</span>
                </button>
              </Link>
            </>
          )}
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            {linksMap}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
