import React, { ReactNode } from 'react';
import cn from 'classnames';

interface Props {
  className?: string,
  children: ReactNode,
}

const ErrorMessage = ({
  className,
  children,
}: Props) => (
  <p
    className={cn(
      'text-[10px] leading-3 text-error font-medium ml-4',
      className,
    )}
  >
    {children}
  </p>
);

export default ErrorMessage;
