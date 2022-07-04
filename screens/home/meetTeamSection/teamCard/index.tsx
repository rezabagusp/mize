import React from 'react';
import cn from 'classnames';

import Image from '../../../../components/Image';

interface Props {
  className?: string,
  name: string,
  photoUrl: string,
  position: string,
}

const TeamCard = ({
  className,
  name,
  photoUrl,
  position,
}: Props) => (
  <div className={cn(
    'rounded-xl px-2 py-3 bg-white',
    className,
  )}
  >
    <div className="flex md:flex-col md:items-center">
      <div className="min-w-[50px] md:w-full md:max-w-[80px]">
        <Image
          className="rounded-full"
          classNameImg="rounded-full"
          src={photoUrl}
          width={80}
          height={80}
          alt={name}
        />
      </div>

      <div className="ml-2 md:ml-0 md:mt-4 md:text-center">
        <h4 className="text-[#155D8B] text-sm font-bold line-clamp-2 md:text-xl">
          {name}
        </h4>
        <p className="text-[#3A3535] text-xs line-clamp-2 md:text-base">
          {position}
        </p>
      </div>

    </div>
  </div>
);

export default TeamCard;
