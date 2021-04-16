import Meta from '@components/layout/Meta';
import Showcase from '@components/layout/Showcase';
import TournamentCard from '@components/TournamentCard';

const Konkursy = ({ tournaments }) => {
  return (
    <>
      <Meta
        title={'WPR - Konkursy'}
        keywords={'WPR, konkursy, sejfy, wygrane, nagrody'}
        description={'Konkursy z widzami podzczas transisji na żywo'}
      />
      <Showcase title={'Konkursy'} linkContent={'WPR SHITPOST'} />
      <section>
        {tournaments.map(({ title, href, img }, i) => (
          <TournamentCard key={i} title={title} href={href} img={img} />
        ))}
      </section>
    </>
  );
};

Konkursy.defaultProps = {
  tournaments: [
    {
      title: 'Sejfy',
      href: '/live/konkursy/sejfy',
      img: '/assets/SEJF.png',
    },
  ],
};

export default Konkursy;
