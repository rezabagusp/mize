import React, {
  Ref,
  FormEventHandler,
  KeyboardEvent,
  ReactNode,
} from 'react';
import cn from 'classnames';
import styles from './index.module.css';

interface Props {
  className?: string,
  inputClassName?: string,
  disabled?: boolean,
  placeholder?: string,
  type?: string,
  value?: string,
  onChange?: FormEventHandler<HTMLInputElement>,
  onFocus?: FormEventHandler<HTMLInputElement>,
  onBlur?: FormEventHandler<HTMLInputElement>,
  onKeyDown?: (e: KeyboardEvent) => void,
  id?: string,
  maxLength?: number,
  setRef?: Ref<HTMLInputElement>,
  prefixIcon?: ReactNode,
  icon?: ReactNode,
  error?: boolean,
  min?: number,
  [x: string]: any,
}

const filterInputNumberOnKeyDown = (evt: KeyboardEvent) => {
  if (['e', '+', '-'].includes(evt.key)) {
    evt.preventDefault();
  }
};

const TextInput = ({
  className,
  disabled,
  placeholder = 'Please input something...',
  type = 'text',
  value = '',
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  id,
  setRef,
  prefixIcon,
  icon,
  error,
  inputClassName,
  ...restProps
}: Props) => {
  const inputProps = {
    id,
    ref: setRef,
    className: cn(
      'text-base w-full border-none flex-1 font-medium',
      prefixIcon && '!pl-11',
      icon && '!pr-11',
      inputClassName,
    ),
    value,
    onChange,
    onKeyDown: type === 'number' ? filterInputNumberOnKeyDown : onKeyDown,
    onFocus,
    onBlur,
    placeholder,
    type,
    disabled,
    ...restProps,
  };

  return (
    <div className={cn(
      styles.textInput,
      error && styles['is-error'],
      className,
    )}
    >
      <div className="relative">
        {
          prefixIcon && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              {prefixIcon}
            </div>
          )
        }
        <input {...inputProps} />
        {
          icon && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              {icon}
            </div>
          )
        }
      </div>
      {
        disabled && (
          <div className={styles['textInput-disabledOverlay']} />
        )
      }
    </div>
  );
};

export default TextInput;
