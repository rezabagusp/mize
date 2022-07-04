import React, { useEffect, useRef } from 'react';
import cn from 'classnames';
import { getYear } from 'date-fns';
import { getYearList } from '../../../lib/utils';

interface Props {
  className?: string,
  activeMonth: Date,
  onChangeYear: (year: number) => void,
}

const DatePickerYears = ({
  className,
  activeMonth,
  onChangeYear,
}: Props) => {
  const activaYearDivRef = useRef<HTMLDivElement>(null);
  const yearWrapperDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      activaYearDivRef?.current && yearWrapperDivRef?.current
    ) {
      const offsetTopActiveYear = activaYearDivRef.current?.offsetTop;

      // scroll to active year
      yearWrapperDivRef.current.scrollTop = offsetTopActiveYear - 60;
    }
  }, []);

  const renderYears = () => getYearList().map((item: number) => {
    const key = `year-${item}`;
    const isActiveYear = getYear(activeMonth) === item;

    return (
      <div
        key={key}
        ref={isActiveYear ? activaYearDivRef : undefined}
        className={cn(
          'inline-block w-4/12 text-center p-4 text-xl text-primary-main cursor-pointer hover:bg-neutral-30',
          isActiveYear && 'bg-primary-main text-neutral-10',
        )}
        onClick={() => onChangeYear(item)}
      >
        {item}
      </div>
    );
  });

  return (
    <div
      className={cn(
        'inline-block bg-neutral-10 shadow-lg mx-2 overflow-y-scroll max-h-72 rounded-lg',
        className,
      )}
      ref={yearWrapperDivRef}
    >
      {renderYears()}
    </div>
  );
};

export default DatePickerYears;
