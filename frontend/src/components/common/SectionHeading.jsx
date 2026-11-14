import React from 'react';
import PropTypes from 'prop-types';
import Reveal from './Reveal';

function SectionHeading({
  eyebrow,
  title,
  description = '',
  align = 'left',
  dark = false,
}) {
  const alignClass = align === 'center' ? 'mx-auto text-center' : 'text-left';

  return (
    <Reveal className={`max-w-2xl ${alignClass}`}>
      <p
        className={`text-sm font-bold uppercase tracking-[0.3em] ${
          dark ? 'text-saphy-300' : 'text-saphy-500'
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-3xl font-bold leading-snug tracking-tight sm:text-5xl sm:leading-tight ${
          dark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 text-base leading-relaxed sm:text-lg ${
            dark ? 'text-silver-300' : 'text-slate-500'
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

SectionHeading.propTypes = {
  eyebrow: PropTypes.string.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center']),
  dark: PropTypes.bool,
};

export default SectionHeading;
