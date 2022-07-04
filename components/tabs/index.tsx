import React, { ReactNode } from 'react';
import cn from 'classnames';
import Tab from './tab';
import styles from './index.module.css';

type Props = {
  activeIndex: number,
  className?: string,
  children: ReactNode,
  onTabChange: (index: number) => void,
  tabAlign: 'default' | 'center',
};

const Tabs = ({
  activeIndex,
  className,
  children,
  onTabChange,
  tabAlign,
}: Props) => {
  const renderChildTabs = (): ReactNode => (
    React.Children.map(children, (child, index) => React.cloneElement(child as React.ReactElement, {
      onTabClick: onTabChange,
      tabIndex: index,
      isActive: index === activeIndex,
    }))
  );

  return (
    <div className={cn(styles.tabs, className)}>
      <div className="border-b-2 border-neutral-30">
        <ul className={cn(
          'px-4',
          tabAlign === 'center' && 'flex items-center justify-center',
        )}
        >
          {renderChildTabs()}
        </ul>
      </div>
    </div>
  );
};

export { Tab };
export default Tabs;
