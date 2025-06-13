import React from 'react';
import { Navigation } from './../../atoms/Typography';

const manu = [
  { link: '/', name: 'Home' },
  { link: '/pricing', name: 'Pricing' },
  { link: '/docs', name: 'Docs' },
  { link: '/contact', name: 'Contact' },
];

const Menu: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        {manu.map((item, index) => (
          <li key={index}>
            <Navigation href={item.link} className='text-gray-800'>{item.name}</Navigation>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;