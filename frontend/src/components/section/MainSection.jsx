import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import './MainSection.css';
import saphyLogo from '../../assets/Saphy_title_skyblue.svg';
import iphonesImage from '../../assets/iphones.png';
import StoreButtons from '../common/StoreButtons';
import { HERO } from '../../data/landing';

const FADE_INITIAL = { opacity: 0, y: 24 };
const FADE_ANIMATE = { opacity: 1, y: 0 };
const fadeTransition = (delay) => ({
  duration: 0.9,
  delay,
  ease: [0.22, 1, 0.36, 1],
});

function MainSection() {
  return (
    <section className="animated-background relative flex min-h-[100svh] items-center overflow-hidden text-white">
      <div className="metal-grid pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -right-40 top-1/4 h-[32rem] w-[32rem] rounded-full bg-saphy-300/25 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-6 pb-24 pt-32 lg:grid-cols-[1.2fr_1fr] lg:pt-24">
        <div>
          <motion.p
            initial={FADE_INITIAL}
            animate={FADE_ANIMATE}
            transition={fadeTransition(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm text-silver-100 backdrop-blur-md"
          >
            <span className="h-2 w-2 rounded-full bg-saphy-300" />
            {HERO.eyebrow}
          </motion.p>

          <motion.img
            initial={FADE_INITIAL}
            animate={FADE_ANIMATE}
            transition={fadeTransition(0.1)}
            src={saphyLogo}
            alt="SAPHY"
            className="mt-8 h-14 w-auto drop-shadow-[0_8px_24px_rgba(154,188,255,0.45)] sm:h-20"
          />

          <motion.h1
            initial={FADE_INITIAL}
            animate={FADE_ANIMATE}
            transition={fadeTransition(0.2)}
            className="mt-8 text-4xl font-bold leading-[1.25] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {HERO.title[0]}
            <br />
            <span className="bg-gradient-to-r from-white via-saphy-200 to-silver-300 bg-clip-text text-transparent">
              {HERO.title[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={FADE_INITIAL}
            animate={FADE_ANIMATE}
            transition={fadeTransition(0.35)}
            className="mt-7 max-w-xl text-lg leading-relaxed text-silver-200"
          >
            {HERO.description}
          </motion.p>

          <motion.div
            initial={FADE_INITIAL}
            animate={FADE_ANIMATE}
            transition={fadeTransition(0.5)}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#about"
              className="rounded-2xl bg-saphy-300 px-7 py-4 text-base font-semibold text-slate-900 shadow-xl shadow-saphy-500/30 transition duration-300 hover:-translate-y-0.5 hover:bg-saphy-200"
            >
              SAPHY 알아보기
            </a>
            <StoreButtons />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden w-full max-w-sm lg:block"
        >
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-saphy-300/60 to-silver-300/30 blur-3xl" />
          <div className="relative animate-float rounded-[2.5rem] bg-gradient-to-br from-white/90 via-silver-100 to-silver-300 p-6 shadow-2xl shadow-black/40">
            <img
              src={iphonesImage}
              alt="SAPHY에서 거래되는 스마트폰"
              className="mx-auto h-auto w-4/5"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="아래로 스크롤"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full border border-white/20 p-3 text-silver-200 transition hover:bg-white/10"
      >
        <HiArrowDown className="animate-bounce" size={20} />
      </a>
    </section>
  );
}

export default MainSection;
