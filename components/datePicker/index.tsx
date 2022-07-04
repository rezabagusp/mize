import React, { useState, ReactNode } from 'react';
import {
  isSameDay,
  isSameMonth,
  addMonths,
  format,
  setMonth,
  setYear,
  getMonth,
  isBefore,
} from 'date-fns';
import cn from 'classnames';
import ModalBase from '../modal';
import Icon from '../icon';
import { getDatesOfTheMonth } from '../../lib/date';
import DatePickerYears from './years';
import { MONTH_LIST } from './config';

interface Props {
  className?: string,
  date?: Date,
  onSelectDate: (date: Date) => void,
  onClose: () => void,
  minDate?: Date,
}

const DatePicker = ({
  className,
  date: initialDate,
  onSelectDate,
  onClose,
  minDate,
}: Props) => {
  const [date, setDate] = useState<Date | null>(initialDate || null);
  const [activeMonth, setActiveMonth] = useState<Date>(initialDate || minDate || new Date());
  const [showMonthList, setShowMonthList] = useState<boolean>(false);
  const [showYearList, setShowYearList] = useState<boolean>(false);

  const getDaysSplitByWeek = (listDays: Date[]) => {
    let days: Date[] = [];
    const weeks: any[] = [];
    listDays.forEach((day) => {
      days.push(day);
      const isAlreadyAweek = (days.length % 7 === 0);
      if (isAlreadyAweek) {
        weeks.push(days);
        days = [];
      }
    });
    return weeks;
  };

  const handleSelectDate = (date: Date): void => {
    setDate(date);
    onSelectDate(date);
  };

  const handleNextMonth = () => {
    const nextMonth = addMonths(activeMonth, 1);
    setActiveMonth(nextMonth);
  };

  const handlePrevMonth = () => {
    const prevMonth = addMonths(activeMonth, -1);
    setActiveMonth(prevMonth);
  };

  const handleSetMonth = (monthIdx: number) => {
    const newMonth = setMonth(activeMonth, monthIdx);
    setActiveMonth(newMonth);
    setShowMonthList(false);
  };

  const handleSetYear = (year: number) => {
    const newYear = setYear(activeMonth, year);
    setActiveMonth(newYear);
    setShowYearList(false);
  };

  const isDayDisabled = (day: Date) => {
    const isDifferentMonth = !isSameMonth(day, activeMonth);
    const isBeforeMinDate = minDate ? isBefore(day, minDate) : false;

    return isDifferentMonth || isBeforeMinDate;
  };

  const renderDays = (days: Date[]): ReactNode => days.map((day, dayIndex) => {
    const dayKey = `day-${dayIndex + 1}`;
    const isToday = isSameDay(day, new Date());
    const isSelectedDate = date && isSameDay(day, date);

    const isDisabled = isDayDisabled(day);

    return (
      <div
        key={dayKey}
        className="py-2 px-2 text-primary-main w-full text-center select-none"
        onClick={() => {
          if (!isDisabled) {
            handleSelectDate(day);
          }
        }}
      >
        <div
          className={cn(
            'w-7 h-7',
            isSelectedDate && 'bg-primary-main text-neutral-10 rounded-full',
            isDisabled && 'opacity-50 cursor-default',
            !isDisabled
              && !isSelectedDate
              && 'hover:bg-primary-surface hover:rounded-full cursor-pointer',
            isToday && 'border border-primary-main text-primary-main rounded-full',
          )}
        >
          {day.getDate()}
        </div>
      </div>
    );
  });

  const renderDaysHead = (): ReactNode => (
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((item, idx) => {
      const key = `${item}-${idx + 1}`;
      return (
        <div
          className="py-2 px-2 text-primary-main w-full text-center select-none"
          key={key}
        >
          {item}
        </div>
      );
    })
  );

  const renderWeeks = (): ReactNode => {
    const listDays = getDatesOfTheMonth(activeMonth);

    return getDaysSplitByWeek(listDays).map((week, weekIndex) => {
      const keyWeek = `week-${weekIndex + 1}`;

      return (
        <div key={keyWeek} className="flex justify-between items-center">
          {renderDays(week)}
        </div>
      );
    });
  };

  const renderMonths = () => MONTH_LIST.map((item: string, idx: number) => {
    const key = `month-${item}`;
    const isActive = getMonth(activeMonth) === idx;

    return (
      <div
        key={key}
        className={cn(
          'inline-block w-4/12 text-center p-4 text-xl text-primary-main cursor-pointer hover:bg-neutral-30',
          isActive && 'bg-primary-main text-neutral-10',
        )}
        onClick={() => handleSetMonth(idx)}
      >
        {item}
      </div>
    );
  });

  return (
    <ModalBase
      className="top-1/2 -translate-y-1/2 !max-w-xs"
      onClose={onClose}
    >
      {/* background calendar */}
      <div className={cn('pt-2 pb-4 bg-neutral-10 rounded-lg relative', className)}>
        {/* calendar head */}
        <div className="px-12 py-2">
          {/* year display */}
          <div
            className="text-base text-neutral-10 bg-primary-main text-center rounded-md cursor-pointer hover:opacity-80 select-none"
            onClick={() => setShowYearList(!showYearList)}
          >
            {format(activeMonth, 'yyyy')}
          </div>
          {/* month display with nav */}
          <div
            className="flex justify-center items-center gap-2 mt-2"
          >
            <div className="w-6 h-6 bg-primary-surface flex justify-around rounded-md">
              <Icon
                icon="chevron"
                className="rotate-180 cursor-pointer hover:opacity-80 select-none"
                size={24}
                color="primaryMain"
                onClick={handlePrevMonth}
              />
            </div>
            <div
              className="w-full h-6 bg-primary-surface rounded-md text-center text-primary-main cursor-pointer hover:opacity-80 select-none"
              onClick={() => setShowMonthList(!showMonthList)}
            >
              {format(activeMonth, 'MMMM')}
            </div>
            <div className="w-6 h-6 bg-primary-surface flex justify-around rounded-md">
              <Icon
                icon="chevron"
                className="cursor-pointer hover:opacity-80 select-none"
                size={24}
                color="primaryMain"
                onClick={handleNextMonth}
              />
            </div>
          </div>
        </div>
        {/* calendar body */}
        <div>
          {/* calendar daysHead */}
          <div className="border-t border-b border-neutral-30 flex justify-between items-center">
            {renderDaysHead()}
          </div>
          {/* calendar days tile */}
          {renderWeeks()}
        </div>
        {
          showMonthList && (
            <div className="absolute top-20 left-0 inline-block bg-neutral-10 shadow-lg mx-2 rounded-lg">
              {renderMonths()}
            </div>
          )
        }
        {
          showYearList && (
            <DatePickerYears
              className="absolute top-12 left-0 "
              activeMonth={activeMonth}
              onChangeYear={handleSetYear}
            />
          )
        }
      </div>
    </ModalBase>
  );
};

export default DatePicker;
