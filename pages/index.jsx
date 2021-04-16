import Video from '@components/Video';
import Showcase from '@components/layout/Showcase';

import style from '@styles/Home.module.scss';

const Home = ({ videos }) => {
  return (
    <>
      <Showcase
        title={'Witaj na oficjalnej stronie kanału'}
        linkContent={'WPR SHITPOST'}
        linkHref={'WPR SHITPOST'}
      />
      <section className={style.videos}>
        <div className={style.videosContainer}>
          {videos.map(({ src }, i) => (
            <Video src={src} key={i} />
          ))}
        </div>
      </section>
    </>
  );
};

Home.defaultProps = {
  videos: [
    {
      src: 'https://www.youtube.com/embed/xaZ7v2NHRfk',
    },
    {
      src: 'https://www.youtube.com/embed/4aFM_A4gUxg',
    },
    {
      src: 'https://www.youtube.com/embed/mRiA1S_8FPw',
    },
    {
      src: 'https://www.youtube.com/embed/a7rpfXo4tDg',
    },
    {
      src: 'https://www.youtube.com/embed/3o4F9Ljt3PA',
    },
    {
      src: 'https://www.youtube.com/embed/m87Tx3D9HnI',
    },
    {
      src: 'https://www.youtube.com/embed/L4HOVuJaPAE',
    },
    {
      src: 'https://www.youtube.com/embed/PCCVsGqjwVg',
    },
  ],
};

// export const getServerSideProps = async (ctx) => {
//   return {
//     props: {
//       videos: data.videos,
//     },
//   };
// };

export default Home;
