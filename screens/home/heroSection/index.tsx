import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './index.module.css';

interface Props {
  className?: string,
}

const HeroSection = ({
  className,
}: Props) => {
  const [hasVPEvaluted, setHasVPEvaluted] = useState(false);
  const [isMobileVP, setIsMobileVP] = useState(false);

  const handleVP = ():void => {
    setIsMobileVP(!window.matchMedia('(min-width: 768px)').matches);
  };

  useEffect(() => {
    handleVP();
  }, []);

  useEffect(() => {
    setHasVPEvaluted(true);
  }, [isMobileVP]);

  return (
    <div
      className={cn(
        styles.heroSection,
        'relative',
        className,
      )}
    >
      {
        hasVPEvaluted && (
          <video
            className="absolute top-0 left-0 min-w-full"
            loop
            muted
            autoPlay
          >
            <source
              id="hvid"
              src={
                isMobileVP
                ? '/video/video-hero-mobile.mp4'
                : '/video/video-hero-desktop.mp4'
              }
              type="video/mp4"
            />
          </video>
        )
      }
      <div className="absolute left-1/2 -translate-x-1/2 bottom-12 md:bottom-16 w-full">
        <h1 className="text-5xl md:text-7xl font-extrabold text-center text-white tracking-widest">
          COSMIZE
        </h1>
        <p className="text-base md:text-2xl text-center text-white">
          Astar's 1st metaverse project!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
