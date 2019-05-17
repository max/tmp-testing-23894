const path = (name, suffix='') => {
  return `./static/images/${name}${suffix}.jpg`;
};

export default ({ alt, height, src, width }) => (
  <div>
    <img alt={ alt }
      className='db'
      height={ height }
      src={ path(src) }
      srcSet={ `${path(src)}, ${path(src, '@2x')} 2x` }
      width={ width } />

    <style jsx>{`
      img {
        height: auto;
        width: 100%;
      }
    `}</style>
  </div>
);
