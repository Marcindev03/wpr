import Image from 'next/image';
import { useState } from 'react';

import { useSafesContext } from '@context/safesState';

import Meta from '@components/layout/Meta';
import Showcase from '@components/layout/Showcase';

const Sejfy = ({ safes }) => {
  return (
    <>
      <Meta
        title={'WPR - Sejfy WPR'}
        keywords={'sejfy, WPR, konkurs'}
        description={
          'Wszystkim znana gra, wybierz sefj i zobacz co się w nim znajduje'
        }
      />
      <Showcase
        title={'Konkurs Sefjów'}
        linkContent={'WPR'}
        linkHref={'https://tipply.pl/u/wpr'}
      />

      <section
        style={{
          maxWidth: '1440px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridGap: '3rem',
        }}
      >
        {safes.map(({ rewardSrc }, i) => (
          <Sejf key={i} id={i} src={rewardSrc} />
        ))}
      </section>
    </>
  );
};

const Sejf = ({ src }) => {
  const { isSelected, setIsSelected } = useSafesContext();
  const [rewardTrigger, setRewardTrigger] = useState('');

  return (
    <article
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        maxWidth: '300px',
        maxHeight: '300px',
        cursor: isSelected ? '' : 'pointer',
      }}
      onClick={() => {
        if (!isSelected) {
          setRewardTrigger(true);
          setIsSelected(true);
        }
      }}
    >
      {rewardTrigger ? (
        <Image width={300} height={300} src={src} />
      ) : (
        <Image width={300} height={300} src={'/assets/SEJF.png'} />
      )}
    </article>
  );
};

export const getServerSideProps = async () => {
  const popiersie = Math.floor(Math.random() * 2);

  let data = [
    {
      id: 1,
      rewardSrc: popiersie
        ? '/assets/popiersie_papieza.png'
        : '/assets/kosz_krowek.png',
    },
    { id: 2, rewardSrc: '/assets/kosz_krowek.png' },
    { id: 3, rewardSrc: '/assets/krowki.png' },
    { id: 4, rewardSrc: '/assets/krowki.png' },
    { id: 5, rewardSrc: '/assets/krowka.png' },
    { id: 6, rewardSrc: '/assets/krowka.png' },
    { id: 7, rewardSrc: '/assets/krowka.png' },
    { id: 8, rewardSrc: '/assets/krowka.png' },
  ].sort(() => Math.random() - 0.5);

  return {
    props: {
      safes: data,
    },
  };
};

export default Sejfy;
