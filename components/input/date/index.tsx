import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import Icon from '../../icon';
import DatePicker from '../../datePicker';

interface Props {
  className?: string,
  date?: Date,
  placeholder?: string,
  onSelectDate?: (date: Date) => void,
  error?: boolean,
  minDate?: Date,
  disabled?: boolean,
}

const DateInput = ({
  className,
  date: initialDate,
  placeholder = 'Select date',
  onSelectDate,
  error,
  minDate,
  disabled,
}: Props) => {
  const [date, setDate] = useState<Date | null>(initialDate || null);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  useEffect(() => {
    setDate(initialDate as Date | null);
  }, [initialDate]);

  const handleSelectDate = (date: Date) => {
    setDate(date);
    if (onSelectDate) {
      onSelectDate(date);
    }
  };

  const renderDisplayDate = () => {
    if (date) {
      const formatedDate = format(date, 'dd/MM/yyyy');
      return (
        <div className="text-base w-full">
          {formatedDate}
        </div>
      );
    }

    // placeholder
    return (
      <div className="text-base w-full text-neutral-60">
        {placeholder}
      </div>
    );
  };

  return (
    <div
      className={cn(
        'relative border border-solid border-neutral-50 rounded-lg mb-1',
        className,
        error && 'border-2 border-error',
      )}
      onClick={() => {
        if (!disabled) {
          setShowDatePicker(true);
        }
      }}
    >
      <div className="py-3 px-4 cursor-pointer">
        <div className="flex justify-between items-center">
          {renderDisplayDate()}
          <Icon
            className="ml-2"
            icon="calendar"
            color="neutral60"
            size={20}
          />
        </div>
      </div>
      {
        disabled && (
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-neutral-60 rounded-lg" />
        )
      }
      {
        showDatePicker && (
          <DatePicker
            date={date as Date}
            onSelectDate={handleSelectDate}
            onClose={() => setShowDatePicker(false)}
            minDate={minDate}
          />
        )
      }
    </div>
  );
};

export default DateInput;
