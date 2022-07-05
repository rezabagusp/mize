import React from 'react';
import cn from 'classnames';

import ConceptCard from './conceptCard';
import styles from './index.module.css';

const CONCPETS = [
  {
    title: 'FLOATING WORLD',
    description: 'It has a capacity of 50~100 people, where people from the Astar community can gather and chat. It is also envisioned as a place where events such as AMAs and presentations can be held. We are also planning to organize limited events that only limited NFT holders can enter.',
  },
  {
    title: 'GROUND world',
    description: 'Ground world may be the most common and most carefree world. People are assumed to have rooms here, and they can customize their rooms and place NFTs in their rooms. They can also invite friends over for tea time.',
  },
  {
    title: 'UNDERWATER world',
    description: 'The specific plan for this space has not yet been decided, but we are planning to create a public space similar to the floating world. Similarly, we plan to organize events that are limited to only those who have the limited NFT.',
  },
];

interface Props {
  className?: string,
}

const ConceptSection = ({
  className,
}: Props) => (
  <div className={cn(
    styles.conceptSection,
    'relative',
    className,
  )}
  >
    <picture className="absolute top-0 left-0 min-w-full">
      <source media="(min-width:768px)" srcSet="/images/concept-bg.png" />
      <img className="w-full" src="/images/concept-bg-mobile.png" alt="team-bg" />
    </picture>
    <div className={styles['conceptSection-transition']} />
    <div className="absolute left-1/2 -translate-x-1/2 top-[64px] w-full">
      <h3 className="text-xl md:text-3xl font-extrabold text-center text-white">
        CONCEPT WORLD
      </h3>
      <div className="px-4 mt-10 lg:max-w-3xl xl:max-w-4xl mx-auto">
        {
          CONCPETS.map((concept, idx) => {
            const key = concept.title;

            return (
              <ConceptCard
                className={cn(
                  idx % 2 === 0 && 'ml-auto mr-0',
                  idx !== 0 && 'mt-14 md:mt-2 xl:mt-4',
                )}
                key={key}
                title={concept.title}
                description={concept.description}
              />
            );
          })
        }
      </div>
    </div>
  </div>
);

export default ConceptSection;
