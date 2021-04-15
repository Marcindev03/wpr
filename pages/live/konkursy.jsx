import Showcase from '../../components/layout/Showcase';
import TournamentCard from '../../components/TournamentCard';

const Konkursy = ({ tournaments }) => {
  return (
    <>
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
      href: '/live/sejfy',
      img: '/assets/SEJF.png',
    },
  ],
};

export default Konkursy;
