import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

// 화면에 들어오면 아래에서 위로 부드럽게 나타나는 공통 래퍼
function Reveal({ children, delay = 0, className = '', y = 32 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  className: PropTypes.string,
  y: PropTypes.number,
};

export default Reveal;
