import Link from 'next/link';

const TournamentCard = ({ title, href, img }) => {
  return (
    <article
      style={{
        width: '600px',
        margin: '0 auto 2rem auto',
        display: 'flex',
      }}
    >
      <div>
        <img src={img} alt="" />
      </div>
      <div
        style={{
          padding: '1.5rem',
          marginLeft: '2rem',
        }}
      >
        <h3
          style={{
            fontSize: '3rem',
            letterSpacing: '2px',
          }}
        >
          {title}
        </h3>
        <Link href={href}>
          <a>
            {`>>>>>`} Zagraj {`<<<<<<`}
          </a>
        </Link>
      </div>
    </article>
  );
};

export default TournamentCard;
