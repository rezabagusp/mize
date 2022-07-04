import React from 'react';
import cn from 'classnames';

import TeamCard from './teamCard';
import styles from './index.module.css';

const TEAMS = [
  {
    name: 'Ace',
    photo: '/images/person-1.png',
    postion: 'Jabatan',
  },
  {
    name: 'Rocketman',
    photo: '/images/person-2.png',
    postion: 'Jabatan',
  },
  {
    name: 'Cat Lord',
    photo: '/images/person-3.png',
    postion: 'Jabatan',
  },
  {
    name: 'Raize',
    photo: '/images/person-4.png',
    postion: 'Jabatan',
  },
  {
    name: 'Frisk',
    photo: '/images/person-5.png',
    postion: 'Jabatan',
  },
  {
    name: 'Nick',
    photo: '/images/person-6.png',
    postion: 'Jabatan',
  },
  {
    name: 'Tomocci',
    photo: '/images/default-thumbnail.png',
    postion: 'Jabatan',
  },
  {
    name: 'Namirina',
    photo: '/images/default-thumbnail.png',
    postion: 'Jabatan',
  },
];

interface Props {
  className?: string,
}

const MeetTeamSection = ({
  className,
}: Props) => (
  <div className={cn(
    styles.meetTeamSection,
    'relative',
    className,
  )}
  >
    <picture className="absolute top-0 left-0">
      <source media="(min-width:768px)" srcSet="/images/team-bg.png" />
      <img className="w-full" src="/images/team-bg-mobile.png" alt="team-bg" />
    </picture>
    <div className="absolute left-1/2 -translate-x-1/2 top-0 w-full">
      <div className={styles['meetTeamSection-transition']} />
      <h3 className="text-xl md:text-3xl font-extrabold text-center text-white">
        MEET THE TEAM
      </h3>
      <div className="grid grid-cols-2 gap-4 px-4 mt-8 md:mt-16 md:grid-cols-4 md:gap-6">
        {
          TEAMS.map((team) => {
            const key = team.name;

            return (
              <TeamCard
                key={key}
                name={team.name}
                photoUrl={team.photo}
                position={team.postion}
              />
            );
          })
        }
      </div>
    </div>
  </div>
);

export default MeetTeamSection;
