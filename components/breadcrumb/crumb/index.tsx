import React, { ReactNode } from 'react';
import Link from 'next/link';
import Icon from '../../icon';

export interface Props {
  children?: ReactNode,
  isActive?: boolean,
  href?: string,
  as?: string,
  className?: string,
}

const Crumb = ({
  children,
  isActive,
  href = '#',
  as,
  className,
}: Props) => (
  <li
    className="text-xs"
  >
    {
      !isActive
        ? (
          <Link
            href={href}
            as={as}
            passHref
          >
            <a className="font-semibold">
              {children}
              <Icon
                className="absolute top-0 right-2"
                icon="chevron"
                color="neutral100"
                size={16}
              />
            </a>
          </Link>
        )
        : (
          <span className={` text-neutral-60 ${className}`}>
            {children}
          </span>
        )
    }
  </li>
);

export default Crumb;
