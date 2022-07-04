import React from 'react';
import cn from 'classnames';

interface Props {
  className?: string,
  title: string,
  items: string[],
}

const RoadmapCard = ({
  className,
  title,
  items,
}: Props) => (
  <div className={cn('p-5 bg-white rounded-3xl text-[#155D8B]', className)}>
    <h4 className="uppercase text-base font-bold md:text-xl">
      {title}
    </h4>
    <ul className="list-disc ml-6 text-xs mt-3 md:text-lg">
      {
        items.map((item, idx) => {
          const key = `${idx + 1}-idx`;

          return (
            <li
              key={key}
              className={cn(
                idx !== 0 && 'mt-2',
              )}
            >
              {item}
            </li>
          );
        })
      }
    </ul>
  </div>
);

export default RoadmapCard;
