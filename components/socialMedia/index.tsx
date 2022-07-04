import React from 'react';
import cn from 'classnames';

import Icon from '../icon';

const SOCIALS = [
  {
    icon: 'discord',
    href: 'http://discord.gg/xJTq3zbMqN',
  },
  {
    icon: 'twitter',
    href: 'https://twitter.com/cosmize_io',
  },
  {
    icon: 'telegram',
    href: 'http://t.me/cosmize_official',
  },
  {
    icon: 'medium',
    href: 'https://medium.com/@cosmize_io',
  },
];

interface Props {
  className?: string,
  /**
   * in rem value
   */
  gap?: number,
}

const SocialMedia = ({
  className,
  gap = 4,
}: Props) => {
  const renderSocials = () => SOCIALS.map((social, idx) => {
    const key = social.icon;

    const space = `ml-${gap}`;

    return (
      <div
        key={key}
        className={cn(
          gap && idx !== 0 && space,
        )}
      >
        <a
          className="inline-block"
          href={social.href}
          target="_blank"
          rel="noreferrer"
        >
          <Icon
            icon={social.icon}
            size={30}
          />
        </a>
      </div>
    );
  });

  return (
    <div className={cn(
      'flex',
      className,
    )}
    >
      {renderSocials()}
    </div>
  );
};

export default SocialMedia;
