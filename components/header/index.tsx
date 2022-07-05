import React, { useState } from 'react';
import cn from 'classnames';
import { Link } from 'react-scroll';

import Icon from '../icon';
import LinkWrapper from '../link';
import SocialMedia from '../socialMedia';

import { NAV_MENU } from './config';
import ModalNavMobile from './modalNavMobile';
import styles from './index.module.css';

// TODO:
// - react scroll nav

interface Props {
  className?: string,
}

const Header = ({
  className,
}: Props) => {
  const [showNavMobile, setShowNavMobile] = useState(false);

  const renderDesktopNavMenu = () => (
    <ul className="flex justify-center">
      {
        NAV_MENU.map((menu) => {
          const key = menu.href;

          return (
            <li
              className={cn(
                'uppercase text-xs',
              )}
              key={key}
            >
              <Link
                className={cn(
                  'cursor-pointer',
                  styles['headerBar-nav'],
                )}
                to={menu.href}
                smooth
                offset={-100}
                duration={500}
              >
                {menu.label}
              </Link>
            </li>
          );
        })
      }
    </ul>
  );

  return (
    <div className={cn(className)}>
      {/* // mobile nav modal */}
      {
        showNavMobile && (
          <ModalNavMobile
            onClose={() => setShowNavMobile(false)}
          />
        )
      }
      <div className="relative">
        <div className={cn(
          styles.headerBar,
          'text-white py-4',
          'md:justify-between',
        )}
        >
          <div className="max-w-screen-lg mx-auto md:px-4">
            <div className="flex items-center justify-center md:justify-between">

              <div className="md:hidden">
                <Icon
                  className="absolute top-[21px] left-[16px]"
                  icon="hamburgerMenu"
                  size={25}
                  onClick={() => setShowNavMobile(true)}
                />
              </div>
              <LinkWrapper
                className="block"
                href="/"
              >
                <img
                  src="/images/cosmize-logo.png"
                  alt="cosmize-logo"
                  width={114}
                  height={25}
                />
              </LinkWrapper>
              {/* desktop nav */}
              <div className="hidden md:block">
                {renderDesktopNavMenu()}
              </div>
              {/* social share icons */}
              <div className="hidden md:block">
                <SocialMedia />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
