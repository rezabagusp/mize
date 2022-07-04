import React, { ReactElement } from 'react';
import cn from 'classnames';
import Crumb from './crumb';
import styles from './index.module.css';

interface Props {
  className?: string,
  children: ReactElement | ReactElement[],
}

const BreadCrumb = ({ className, children }: Props) => (
  <div className={cn(styles.breadcrumb, className)}>
    <ul>
      {
        React.Children.map(children, (child, index) => React.cloneElement(child, {
          isActive: React.Children.count(children) - 1 === index,
        }))
      }
    </ul>
  </div>
);

export { Crumb };
export default BreadCrumb;
