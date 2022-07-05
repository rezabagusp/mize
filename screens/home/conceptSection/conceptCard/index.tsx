import React from 'react';
import cn from 'classnames';

interface Props {
  className?: string,
  title: string,
  description: string,
}

const ConceptSection = ({
  className,
  title,
  description,
}: Props) => (
  <div className={cn(
    'rounded-2xl bg-white text-[#155D8B] p-5 max-w-[300px] md:max-w-lg',
    className,
  )}
  >
    <h3 className="text-base font-extrabold xl:text-lg">
      {title}
    </h3>
    <p className="text-xs mt-2 xl:text-base">
      {description}
    </p>
  </div>
);

export default ConceptSection;
