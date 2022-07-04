import React, {
  useState,
  useRef,
  ChangeEvent,
  useEffect,
} from 'react';
import cn from 'classnames';
import { useDebouncedCallback } from 'use-debounce';

import SearchBoxInput from '../searchBox';
import Icon from '../../icon';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import OptionList from '../../optionList';
import ModalBase from '../../modal';
import type { Option } from '../../../types/misc';

export interface RendererEmptyStateProps {
  keyword: string,
  handleSelect: (newValue: Option | null) => void,
}

interface Props {
  className?: string,
  value: Option | null,
  title?: string,
  placeholder?: string,
  options: (Option)[],
  onChange: (newValue: Option | null) => void,
  error?: boolean,
  disabled?: boolean,
  loading?: boolean,
  searchable?: boolean,
  renderEmptyState?: (props: RendererEmptyStateProps) => JSX.Element,
  /**
   * the next props will be working if infiniteLoading true
   */
  infiniteLoading?: boolean,
  hasMoreData?: boolean,
  loadingMore?: boolean,
  onLoadMore?: () => void,
  onRefetch?: (keyword: string) => void,
}

const SelectOptionBox = ({
  className,
  value = null,
  title,
  placeholder = 'Select...',
  options,
  onChange,
  error,
  disabled,
  loading,
  searchable = false,
  renderEmptyState,
  infiniteLoading = true,
  hasMoreData,
  loadingMore,
  onLoadMore,
  onRefetch,
}: Props) => {
  const [keyword, setKeyword] = useState<string>(value?.label || '');
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const searchBoxRef = useRef<HTMLInputElement>(null);
  const menuNodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (showOptions && searchable && searchBoxRef?.current) {
      searchBoxRef.current.focus();
    }
  }, [searchable, showOptions]);

  useOnClickOutside(menuNodeRef, () => setShowOptions(false));

  const debounced = useDebouncedCallback(
    (searchKeyword: string) => {
      if (!onRefetch) {
        throw new Error('onRefetch Prop should be provided');
      }
      onRefetch(searchKeyword);
    },
    500,
  );

  const handleSelect = (option: Option | null): void => {
    setShowOptions(false);
    onChange(option);
  };

  const handleShowOptions = (): void => {
    setShowOptions(true);
  };

  const handleChangeKeyword = (newKeyword: string) => {
    setKeyword(newKeyword);
    debounced(newKeyword);
  };

  const renderSelectInputContent = () => (
    <div
      className={cn(
        'px-4 py-3 border border-neutral-50 rounded-lg',
        error && 'border-2 border-error',
        !disabled && 'cursor-pointer',
      )}
      onClick={() => !disabled && handleShowOptions()}
    >
      <div className="flex items-center justify-between">
        {
          value
            ? (
              <p>
                {value.label}
              </p>
            )
            : (
              <p className="text-neutral-60">
                {placeholder}
              </p>
            )
        }
      </div>
      {
        disabled && (
          <div className="absolute top-0 left-0 w-full h-full opacity-30 bg-neutral-60 rounded-lg" />
        )
      }
    </div>
  );

  const rendererEmptyState = () => {
    if (renderEmptyState) {
      return renderEmptyState({ keyword, handleSelect });
    }
    return undefined;
  };

  return (
    <div
      className={cn(
        'relative text-base font-medium',
        className,
      )}
      ref={menuNodeRef}
    >
      {renderSelectInputContent()}
      {
        showOptions && (
          <ModalBase onClose={() => setShowOptions(false)}>
            <div className="bg-neutral-10 max-w-md fixed left-1/2 -translate-x-1/2 bottom-0 w-full pt-5 rounded-tl-lg rounded-tr-lg">
              <div className="px-4">
                <Icon
                  className="cursor-pointer"
                  icon="close"
                  color="neutral100"
                  onClick={() => setShowOptions(false)}
                  size={24}
                />
              </div>
              {title && (
                <h3 className="text-lg font-bold px-4 mt-5">{title}</h3>
              )}
              {
                searchable && (
                  <div className="px-4">
                    <SearchBoxInput
                      className="mt-5"
                      value={keyword}
                      onChange={(
                        e: ChangeEvent<HTMLInputElement>,
                      ) => handleChangeKeyword(e.target.value)}
                      setRef={searchBoxRef}
                      placeholder={placeholder}
                    />
                  </div>
                )
              }
              <OptionList
                className="mt-5 shadow-inner"
                value={value}
                options={options}
                onChange={handleSelect}
                loading={loading}
                infiniteLoading={infiniteLoading}
                hasMoreData={hasMoreData}
                loadingMore={loadingMore}
                onLoadMore={onLoadMore}
                renderEmptyState={rendererEmptyState as () => JSX.Element}
              />
            </div>
          </ModalBase>
        )
      }
    </div>
  );
};

export default SelectOptionBox;
