import React from 'react';
import PropTypes from 'prop-types';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { LINKS } from '../../data/landing';

const STORES = [
  {
    id: 'appstore',
    href: LINKS.appStore,
    Icon: FaApple,
    caption: 'Download on the',
    name: 'App Store',
  },
  {
    id: 'playstore',
    href: LINKS.playStore,
    Icon: FaGooglePlay,
    caption: 'GET IT ON',
    name: 'Google Play',
  },
];

// 앱 다운로드 CTA 버튼 (밝은 배경 / 어두운 배경 겸용)
function StoreButtons({ variant = 'dark' }) {
  const style =
    variant === 'light'
      ? 'bg-white text-slate-900 ring-1 ring-silver-200 hover:ring-saphy-300'
      : 'bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md hover:bg-white/20';

  return (
    <div className="flex flex-wrap gap-3">
      {STORES.map(({ id, href, Icon, caption, name }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group flex items-center gap-3 rounded-2xl px-5 py-3 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-0.5 ${style}`}
        >
          <Icon className="text-2xl transition duration-300 group-hover:scale-110" />
          <span className="flex flex-col text-left leading-tight">
            <span className="text-[0.65rem] font-medium opacity-70">
              {caption}
            </span>
            <span className="text-base font-semibold">{name}</span>
          </span>
        </a>
      ))}
    </div>
  );
}

StoreButtons.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']),
};

export default StoreButtons;
