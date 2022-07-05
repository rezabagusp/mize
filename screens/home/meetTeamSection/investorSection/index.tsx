import React from 'react';
import cn from 'classnames';

import { Image } from '../../../../types/image';
import InvestorCard from './investorCard';

const SPONSOR_ONE: Image[] = [
  {
    caption: 'Next Web Capital',
    url: '/images/sponsor-next-web.png',
    width: 80,
    height: 80,
  },
  {
    caption: 'DFG',
    url: '/images/sponsor-dfg.png',
    width: 160,
    height: 59,
  },
  {
    caption: 'Long Hash Ventures',
    url: '/images/sponsor-longHash.png',
    width: 180,
    height: 40,
  },
];

const SPONSOR_TWO: Image[] = [
  {
    caption: 'Emoote',
    url: '/images/sponsor-emoote.png',
    width: 80,
    height: 80,
  },
  {
    caption: 'JS Square',
    url: '/images/sponsor-jssquare.png',
    width: 160,
    height: 59,
  },
];

interface Props {
  className?: string,
}

const InvestorSection = ({
  className,
}: Props) => (
  <div className={cn(className)}>
    <h3 className="text-xl md:text-3xl font-extrabold text-center text-white">
      INVESTORS & PARTNERS
    </h3>
    <div className="mt-9 px-4">
      <div className="flex justify-center">
        {
          SPONSOR_ONE.map((sponsor, idx) => {
            const key = sponsor.caption;

            return (
              <div
                key={key}
                className={cn(
                  idx !== 0 && 'ml-4',
                )}
              >
                <InvestorCard
                  investor={sponsor}
                />
              </div>
            );
          })
        }
      </div>
      <div className="flex justify-center mt-4">
        {
          SPONSOR_TWO.map((sponsor, idx) => {
            const key = sponsor.caption;

            return (
              <div
                key={key}
                className={cn(
                  idx !== 0 && 'ml-4',
                )}
              >
                <InvestorCard
                  investor={sponsor}
                />
              </div>
            );
          })
        }
      </div>
    </div>
  </div>
);

export default InvestorSection;
