import React, { useEffect } from 'react';
import { HiCheckCircle } from 'react-icons/hi';
import iphonesImage from '../../assets/iphones.png';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { ABOUT } from '../../data/landing';

function AboutSection() {
  useEffect(() => {
    // 새로고침 시 스크롤을 맨 위로 이동
    const handleBeforeUnload = () => window.scrollTo(0, 0);
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, []);

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-silver-50 via-white to-saphy-50 py-32"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-20 px-6 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1" y={48}>
          <div className="absolute inset-10 rounded-full bg-saphy-200/60 blur-3xl" />
          <div className="relative mx-auto max-w-md rounded-[2.5rem] border border-white bg-gradient-to-br from-white via-silver-100 to-silver-200 p-10 shadow-[0_30px_80px_-30px_rgba(31,43,92,0.35)]">
            <img
              src={iphonesImage}
              alt="iPhones"
              className="mx-auto h-auto w-3/4"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading eyebrow="About Saphy" title={ABOUT.question} />
          <Reveal delay={0.15} className="mt-10 space-y-5">
            {ABOUT.paragraphs.map((text) => (
              <p key={text} className="text-lg leading-[1.9] text-slate-600">
                {text}
              </p>
            ))}
          </Reveal>
          <Reveal delay={0.3}>
            <ul className="mt-10 flex flex-wrap gap-3">
              {ABOUT.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 rounded-full border border-saphy-200 bg-white px-4 py-2 text-sm font-semibold text-saphy-700 shadow-sm"
                >
                  <HiCheckCircle className="text-saphy-400" size={18} />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
