import React, { useEffect, useRef } from 'react';
import {
  Swiper,
  Autoplay,
  Pagination,
  Lazy,
  SwiperOptions,
 } from 'swiper';
import cn from 'classnames';

import RoadmapCard from './roadmapCard';
import { ROADMAPS } from './config';
import styles from './index.module.css';

Swiper.use([Autoplay, Pagination, Lazy]);

interface Props {
  className?: string,
}

const RoadmapSection = ({
  className,
}: Props) => {
  const swiperRef = useRef<any>();

  useEffect(() => {
    const swiperConfig = {
      lazy: true,
      spaceBetween: 16,
      centeredSlides: true,
      slidesPerView: 1.25,
      allowTouchMove: true,
      autoplay: {
        delay: 3000,
      },
      direction: 'horizontal',
      loop: true,
      breakpoints: {
        768: {
          slidesPerView: 2.5,
          centeredSlides: false,
          autoplay: false,
          loop: false,
        },
        1024: {
          slidesPerView: 4,
          centeredSlides: false,
        },
      },
    } as SwiperOptions;

    swiperRef.current = new Swiper('.roadmap-swiper', swiperConfig);
  }, []);

  return (
    <div className={cn(
      styles.roadmapSection,
      'relative',
      className,
    )}
    >
      <picture className="absolute top-0 left-0">
        <source media="(min-width:768px)" srcSet="/images/roadmap-bg.png" />
        <img className="w-full" src="/images/roadmap-bg-mobile.png" alt="roadmap-bg" />
      </picture>
      <div className={styles['roadmapSection-transition']} />
      <div className="absolute left-1/2 -translate-x-1/2 top-[57px] w-full">
        <div className="overflow-hidden">
          <h3 className="text-xl md:text-3xl font-extrabold text-center text-white">
            ROADMAP
          </h3>
          <div className="roadmap-swiper px-4 mt-14">
            <div className="swiper-wrapper">
              {
                ROADMAPS.map((roadmap) => {
                  const key = roadmap.title;

                  return (
                    <div
                      key={key}
                      className="swiper-slide"
                    >
                      <RoadmapCard
                        className="bg-red-800"
                        title={roadmap.title}
                        items={roadmap.items}
                      />
                    </div>
                  );
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapSection;
