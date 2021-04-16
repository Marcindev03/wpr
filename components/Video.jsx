const Video = ({ src }) => {
  return (
    <article>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <iframe
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="true"
        ></iframe>
      </div>
    </article>
  );
};

export default Video;
