import React from 'react';
import cn from 'classnames';
import { Link } from 'react-scroll';

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
                  'cursor-pointer block hover:no-underline py-2',
                )}
                to={menu.href}
                smooth
                offset={-30}
                duration={500}
                onClick={() => onClose()}
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
    <ModalBase
      className="top-0"
      onClose={onClose}
      bodyHidden={false}
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
