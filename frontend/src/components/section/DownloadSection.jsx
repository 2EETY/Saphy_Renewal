import React from 'react';
import smartphoneImage from '../../assets/smartphone.jpg';
import Reveal from '../common/Reveal';
import StoreButtons from '../common/StoreButtons';

function DownloadSection() {
  return (
    <section
      id="download"
      className="relative flex min-h-[80vh] items-center overflow-hidden bg-gradient-to-br from-saphy-100 via-saphy-200 to-saphy-300 py-32"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-white/50 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-saphy-700">
            Download
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-snug tracking-tight text-slate-900 sm:text-5xl sm:leading-tight">
            지금 SAPHY에서
            <br />
            안심 거래를 시작하세요
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-slate-700">
            앱을 내려받고 검수를 통과한 중고 전자기기를 만나보세요.
          </p>
          <div className="mt-10">
            <StoreButtons variant="light" />
          </div>
        </Reveal>

        <Reveal delay={0.2} y={48}>
          <div className="relative mx-auto max-w-md overflow-hidden rounded-[2.5rem] border-4 border-white/70 shadow-[0_40px_80px_-30px_rgba(31,43,92,0.5)]">
            {/* 원본의 분홍 배경을 흑백 + 브랜드 블루 톤으로 바꿔 색감 통일 */}
            <img
              src={smartphoneImage}
              alt="스마트폰을 들고 있는 손"
              className="aspect-[4/5] w-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-saphy-200 to-saphy-400 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default DownloadSection;
