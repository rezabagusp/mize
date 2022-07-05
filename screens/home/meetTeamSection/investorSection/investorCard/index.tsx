import React from 'react';
import cn from 'classnames';

import { Image } from '../../../../../types/image';

interface Props {
  className?: string,
  investor: Image,
}

const InvestorCard = ({
  className,
  investor,
}: Props) => (
  <div className={cn(
    'rounded-2xl bg-white p-4 flex justify-center items-center h-[64px] md:h-[160px] md:min-w-[160px]',
    className,
  )}
  >
    <img
      className="max-w-full"
      src={investor.url}
      width={investor.width}
      height={investor.height}
      alt={investor.caption}
    />
  </div>
);

export default InvestorCard;
