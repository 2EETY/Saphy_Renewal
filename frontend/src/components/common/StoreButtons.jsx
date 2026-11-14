import React from 'react';
import PropTypes from 'prop-types';
import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { APP_RELEASED } from '../../data/landing';

const STORES = [
  {
    id: 'appstore',
    Icon: FaApple,
    caption: 'Download on the',
    name: 'App Store',
  },
  {
    id: 'playstore',
    Icon: FaGooglePlay,
    caption: 'GET IT ON',
    name: 'Google Play',
  },
];

// 앱 다운로드 버튼 (밝은 배경 / 어두운 배경 겸용)
// 앱이 출시되지 않아 링크 대신 '출시 예정' 배지를 함께 표시합니다.
function StoreButtons({ variant = 'dark' }) {
  const style =
    variant === 'light'
      ? 'bg-white text-slate-900 ring-1 ring-silver-200'
      : 'bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md';

  return (
    <div className="flex flex-wrap gap-3">
      {STORES.map(({ id, Icon, caption, name }) => (
        <div
          key={id}
          aria-label={`${name} 출시 예정`}
          className={`relative flex cursor-default items-center gap-3 rounded-2xl px-5 py-3 shadow-lg shadow-black/10 ${style}`}
        >
          <Icon className="text-2xl opacity-80" />
          <span className="flex flex-col text-left leading-tight">
            <span className="text-[0.65rem] font-medium opacity-70">
              {caption}
            </span>
            <span className="text-base font-semibold">{name}</span>
          </span>
          {!APP_RELEASED && (
            <span className="absolute -right-2 -top-2 rounded-full bg-saphy-500 px-2 py-0.5 text-[0.6rem] font-bold text-white shadow">
              출시 예정
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

StoreButtons.propTypes = {
  variant: PropTypes.oneOf(['light', 'dark']),
};

export default StoreButtons;
