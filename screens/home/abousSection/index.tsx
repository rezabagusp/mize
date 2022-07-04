import React from 'react';
import cn from 'classnames';
import styles from './index.module.css';

interface Props {
  className?: string,
}

const AboutSection = ({
  className,
}: Props) => (
  <div className={cn(
    styles.aboutSection,
    className,
  )}
  >
    <div className="max-w-xl mx-auto">
      <h3 className="text-xl md:text-3xl font-extrabold">
        ABOUT US
      </h3>
      <p className="text-sm md:text-lg mt-5">
        COSMIZE name is from Cosmo and Customize where everybody can create and
        customize their own cosmic imagination.
      </p>
    </div>
  </div>
);

export default AboutSection;
