import React from 'react';
import { Icon } from './../../Icon';
import { BodyText, Navigation } from '@/components/atoms/Typography';

const manu = [
  { link: '/', name: 'Home' },
  { link: '/pricing', name: 'Pricing' },
  { link: '/docs', name: 'Docs' },
  { link: '/contact', name: 'Contact' },
];

const socialLinks = [
  { link: '/', name: 'Facebook' },
  { link: '/', name: 'LinkedIn' },
  { link: '/', name: 'Youtube' },
  { link: '/', name: 'Twitter' },
];

const WebHeader: React.FC = () => {
  return (
    <header className="container py-24">
        <div className='grid grid-cols-12'>
            <div className='col-span-4'>
                <Icon name="Logo" className="w-[44] h-auto mb-6" />
                <BodyText variant='body-s' className='text-gray-800'>
                    Proin ipsum pharetra, senectus eget scelerisque varius pretium platea velit. Lacus, eget eu vitae nullam proin turpis etiam mi sit. Non feugiat feugiat egestas nulla nec. Arcu tempus, eget elementum dolor ullamcorper sodales ultrices eros. 
                </BodyText>
            </div>
            <div className='col-start-7 col-span-6'>
                <div className="flex flex-row justify-between">
                    <ul className="flex flex-col gap-2">
                        {manu.map((item, index) => (
                            <li key={index}>
                            <Navigation href={item.link} className='text-gray-900'>{item.name}</Navigation>
                            </li>
                        ))}
                    </ul>
                    <ul className="flex flex-col gap-2">
                        {socialLinks.map((item, index) => (
                            <li key={index}>
                            <Navigation href={item.link} className='text-gray-900'>{item.name}</Navigation>
                            </li>
                        ))}
                    </ul>
                    <div className='flex flex-col gap-2'>
                        <Navigation className='text-gray-900'>Contact Us</Navigation>
                        <Navigation href='mailto:example@gmail.com' className='text-gray-900'>example@gmail.com</Navigation>
                    </div>
                </div>
            </div>
            <div className='col-span-12 mt-16'>
                <BodyText variant='body-s' className='text-gray-600'>
                    2021. All rights reserved. Silicon Template
                </BodyText>
            </div>
        </div>
    </header>
  );
};

export default WebHeader;
