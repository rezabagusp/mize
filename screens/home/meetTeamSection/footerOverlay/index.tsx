import React from 'react';
import cn from 'classnames';

import LinkWrapper from '../../../../components/link';

export const NAV_MENU = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Concept',
    href: '#concept',
  },
  {
    label: 'Roadmap',
    href: '#roadmap',
  },
  {
    label: 'Team',
    href: '#team',
  },
  {
    label: 'Investors',
    href: '#investors',
  },
];

interface Props {
  className?: string,
}

const FooterOverlay = ({
  className,
}: Props) => {
  const renderNav = () => (
    <div
      className="text-white w-full max-w-md mx-auto mt-6 hidden md:flex md:justify-between md:items-center"
    >
      {
        NAV_MENU.map((nav) => {
          const key = nav.label;

          return (
            <div
              key={key}
              className="uppercase text-xs"
            >
              <LinkWrapper
                href={nav.href}
              >
                {nav.label}
              </LinkWrapper>
            </div>
          );
        })
      }
    </div>
  );

  const date = new Date();

  return (
    <div className={cn(
      'w-full py-4',
      className,
    )}
    >
      <LinkWrapper
        className="block"
        href="/"
      >
        <img
          className="mx-auto w-[165px] md:w-[255px]"
          src="/images/cosmize-logo-secondary.png"
          alt="cosmize-logo"
          width={255}
          height={40}
        />
      </LinkWrapper>
      {renderNav()}
      <hr className="bg-[#C2D1D9] my-2" />
      <p className="text-white text-sm text-center">
        {`©${date.getFullYear()} - COSMIZE  |   All right reserved`}
      </p>
    </div>
  );
};

export default FooterOverlay;
