import React from 'react';
import cn from 'classnames';

import { Checkbox } from '../input';
import { LoadingSpinner } from '../loading';
import type { Option } from '../../types/misc';

interface Props {
  className?: string,
  options: Option[],
  selectedOptions: Option[],
  onChange: (newSelectedOptions: Option[]) => void,
  loading?: boolean,
  selectedAdderMethod?: 'push' | 'unshift',
}

const MultipleOptionList = ({
  className,
  options,
  selectedOptions,
  onChange,
  loading,
  selectedAdderMethod = 'push',
}: Props) => {
  const isOptionSelected = (option: Option) => selectedOptions.some(
    (item) => item.value === option.value,
  );

  const handleChangeCheckOption = (option: Option) => {
    const newSelectedOptions = [...selectedOptions];

    // if item exist then remove
    const isItemExist = newSelectedOptions.some((item) => item.value === option.value);

    if (isItemExist) {
      // find the index of item that will be removed
      const itemIndex = newSelectedOptions.findIndex((item) => item.value === option.value);

      // remove by based on it's index
      newSelectedOptions.splice(itemIndex, 1);
      onChange(newSelectedOptions);
      return;
    }

    // if item doesn't exist put to selected with adder method based on props
    if (selectedAdderMethod === 'unshift') {
      newSelectedOptions.unshift(option);
    } else {
      newSelectedOptions.push(option);
    }

    onChange(newSelectedOptions);
  };

  const renderOptions = () => {
    if (loading) {
      return (
        <div className="w-full flex justify-center">
          <LoadingSpinner className="my-5" size="small" />
        </div>
      );
    }

    if (!options || !options.length) {
      return (
        <p className="font-semibold text-center">No Item found.</p>
      );
    }

    return (
      <ul className="">
        {
          options.map((option, idx) => {
            const key = option.value;

            return (
              <li
                className={cn(
                  'text-sm',
                )}
                key={key}
              >
                <Checkbox
                  className={cn(
                    idx !== 0 && 'mt-6',
                  )}
                  onChange={() => handleChangeCheckOption(option)}
                  checked={isOptionSelected(option)}
                >
                  <span className="ml-2 text-sm">
                    {option.label}
                  </span>
                </Checkbox>
              </li>
            );
          })
        }
      </ul>
    );
  };

  return (
    <div className={cn(className)}>
      {renderOptions()}
    </div>
  );
};

export default MultipleOptionList;
