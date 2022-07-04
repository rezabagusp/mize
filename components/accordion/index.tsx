import React, {
  useState,
  ReactNode,
  useRef,
  useEffect,
} from 'react';
import cn from 'classnames';
import Icon from '../icon';
import styles from './index.module.css';

interface AccordionContent {
  className?: string,
  children: ReactNode,
}

export const AccordionContentLabel = ({
  className,
  children,
}: AccordionContent) => (
  <p className={cn('text-xs text-neutral-60', className)}>
    {children}
  </p>
);

export const AccordionContentValue = ({
  className,
  children,
}: AccordionContent) => (
  <div className={cn('text-sm', className)}>
    {children}
  </div>
);

interface Props {
  className?: string,
  title: ReactNode,
  show?: boolean,
  variant?: 'default' | 'grey',
  children: ReactNode,
}

const Accordion = ({
  className,
  title,
  show: initialShow = false,
  variant = 'default',
  children,
}: Props) => {
  const [show, setShow] = useState<boolean>(initialShow);
  const panelRef = useRef<HTMLDivElement>(null);

  const handleCollapsePaneel = () => {
    if (panelRef?.current) {
      const panelDOM = panelRef?.current;
      if (panelDOM.style.maxHeight) {
        panelDOM.style.maxHeight = '';
      } else {
        panelDOM.style.maxHeight = `${panelDOM.scrollHeight}px`;
      }
    }
  };

  const handleShow = (): void => {
    setShow(!show);
    handleCollapsePaneel();
  };

  useEffect(() => {
    if (initialShow) {
      handleCollapsePaneel();
    }
  }, [initialShow]);

  return (
    <div className={className}>
      <div
        className={cn(
          'flex justify-between items-center bg-neutral-10 cursor-pointer py-4',
          variant === 'grey' && 'bg-neutral-30 !p-3 rounded-lg',
        )}
        onClick={() => handleShow()}
      >
        <div
          className="text-base font-semibold text-neutral-100"
        >
          {title}
        </div>
        <Icon
          icon="chevron"
          className={cn(
            'rotate-90',
            'ml-2',
            'transition-all',
            'min-w-[18px]',
            { '!-rotate-90': show },
          )}
          size={18}
          color="neutral100"
        />
      </div>
      <div
        className={cn(
          styles['accordion-panel'],
        )}
        ref={panelRef}
      >
        <div className="py-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
