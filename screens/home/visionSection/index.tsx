import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

interface Props {
  className?: string,
}

const VisionSection = ({
  className,
}: Props) => (
  <div className={cn(
    styles.visionSection,
    className,
  )}
  >
    <div className="max-w-xl mx-auto">
      <h3 className="text-xl md:text-3xl font-extrabold">
        VISION
      </h3>
      <p className="text-sm md:text-lg mt-5">
        COSMIZE aims to create an environment where people can express themselves in
        virtual space whitout any restrictions.
      </p>
    </div>
  </div>
);

export default VisionSection;
