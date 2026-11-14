import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TypingEffect({ text, typingSpeed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < text.length) {
        setDisplayedText((prev) => prev + text[count]);
        setCount((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [count, text, typingSpeed]);

  return (
    <span className="animate-typingCursor border-r-2 border-white">
      {displayedText}
    </span>
  );
}

// PropTypes 정의
TypingEffect.propTypes = {
  text: PropTypes.string.isRequired, // 'text'는 필수 문자열 prop
  typingSpeed: PropTypes.number, // 'typingSpeed'는 선택적 숫자 prop
};

export default TypingEffect;
