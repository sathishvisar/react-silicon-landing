import React from 'react';
import clsx from 'clsx';
import Menu from './menu';
import { ThemeSwitcher } from '../../ThemeSwitcher';
import { Button } from '../../atoms/Button';
import { Icon } from './../../Icon';

const WebHeader: React.FC = () => {
  return (
    <header className={clsx('container mx-auto py-4 flex justify-between')}>
        <div className={clsx('flex items-center gap-x-12')}>
          <Icon name="Logo" className="w-[44] h-auto" />
          <Menu />
        </div>
        <div className={clsx('flex items-center gap-x-8')}>
          <ThemeSwitcher />
          <div className={clsx('flex gap-x-4')}>
            <Button size="small" shape="rounded" color="secondary" className='gap-1'><Icon name='SignIn'/> Sign in</Button>  
            <Button size="small" shape="rounded" color="blue" className='gap-1'><Icon name='User' /> Sign up</Button>  
          </div>
        </div>
    </header>
  );
};

export default WebHeader;
