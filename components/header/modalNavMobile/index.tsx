import React from 'react';
import cn from 'classnames';

import LinkWrapper from '../../link';
import ModalBase from '../../modal';
import { NAV_MENU } from '../config';
import SocialMedia from '../../socialMedia';
import Icon from '../../icon';

interface Props {
  onClose: () => void,
}

const ModalNavMobile = ({
  onClose,
}: Props) => {
  const renderNav = () => (
    <ul>
      {
        NAV_MENU.map((menu, idx) => {
          const key = menu.href;

          return (
            <li
              className={cn(
                idx !== 0 && 'mt-3',
                'uppercase text-xs',
              )}
              key={key}
            >
              <LinkWrapper
                className="block py-1 hover:no-underline"
                href={menu.href}
              >
                {menu.label}
              </LinkWrapper>
            </li>
          );
        })
      }
    </ul>
  );

  return (
    <ModalBase
      className="top-0"
      onClose={onClose}
    >
      <div className="p-8 pt-16 bg-blue-secondary text-white">
        <div className="max-w-sm mx-auto">
          {renderNav()}
          <div className="flex justify-between mt-10">
            <SocialMedia />
            <Icon
              icon="close"
              size={30}
              onClick={onClose}
              cursorPointer
            />
          </div>
        </div>
      </div>
    </ModalBase>
  );
};

export default ModalNavMobile;
