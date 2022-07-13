import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './index.module.css';
import Icon from '../../../components/icon';
import ModalBase from '../../../components/modal';

interface Props {
  className?: string,
}

const MidHeroSection = ({
  className,
}: Props) => {
  const [hasVPEvaluted, setHasVPEvaluted] = useState(false);
  const [isMobileVP, setIsMobileVP] = useState(false);
  const [showTeaserDialog, setShowTeaserDialog] = useState(false);

  const handleVP = ():void => {
    setIsMobileVP(!window.matchMedia('(min-width: 768px)').matches);
  };

  useEffect(() => {
    handleVP();
  }, []);

  useEffect(() => {
    setHasVPEvaluted(true);
  }, [isMobileVP]);

  const renderTeaserVidoe = () => (
    <ModalBase
      className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
      onClose={() => setShowTeaserDialog(false)}
    >
      <div className="max-w-3xl mx-auto relative">
        <Icon
          className="absolute right-0 -top-[40px]"
          icon="close"
          onClick={() => setShowTeaserDialog(false)}
        />
        <video autoPlay controls>
          <source
            id="hvid"
            src="/video/video-teaser.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </ModalBase>
  );

  return (
    <div
      className={cn(
        styles.midHeroSection,
        'relative',
        className,
      )}
    >
      {showTeaserDialog && renderTeaserVidoe()}
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
                ? '/video/video-cewe-mobile.mp4'
                : '/video/video-cewe-desktop.mp4'
              }
              type="video/mp4"
            />
          </video>
        )
      }
      <div className={cn(
        styles['midHeroSection-transition'],
        styles['midHeroSection-transition--top'],
      )}
      />
      <div className={cn(
        styles['midHeroSection-transition'],
        styles['midHeroSection-transition--bottom'],
      )}
      />
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full">
        <div className="flex justify-center">
          <Icon
            icon="playButton"
            width={154}
            height={77}
            cursorPointer
            onClick={() => setShowTeaserDialog(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default MidHeroSection;
