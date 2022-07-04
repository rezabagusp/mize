import React from 'react';
import cn from 'classnames';

import Icon from '../icon';
import LinkWrapper from '../link';
import { NAV_MENU } from './config';
import styles from './index.module.css';

// TODO:
// - mobile nav
// - social share component
interface Props {
  className?: string,
}

const Header = ({
  className,
}: Props) => {
  const renderDesktopNavMenu = () => (
    <ul className="flex">
      {
        NAV_MENU.map((menu, idx) => {
          const key = menu.href;

          return (
            <li
              className={cn(
                idx !== 0 && 'ml-6',
              )}
              key={key}
            >
              <LinkWrapper href={menu.href}>
                {menu.label}
              </LinkWrapper>
            </li>
          );
        })
      }
    </ul>
  );

  return (
    <div className={cn(className)}>
      <div className="relative">
        <div className={cn(
          styles['header-bar'],
          'text-white py-6',
          'md:justify-between',
        )}
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="flex items-center justify-center">

              <Icon
                className="absolute top-[21px] left-[16px] md:hidden"
                icon="hamburgerMenu"
                size={25}
              />
              <img
                src="/images/cosmize-logo.png"
                alt="cosmize-logo"
                width={114}
                height={25}
              />
              {/* desktop nav */}
              <div className="hidden md:block">
                {renderDesktopNavMenu()}
              </div>
              {/* social share icons */}
              <div className="hidden md:block">
                <div className="flex">
                  medium
                  twitter
                  telegram
                  discord
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
