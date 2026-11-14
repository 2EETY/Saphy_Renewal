import React from 'react';
import { MdPersonSearch, MdOutlinePriceChange } from 'react-icons/md';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import iphonesFourImage from '../../assets/iphones_four.jpg';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { FEATURES } from '../../data/landing';

const ICONS = {
  quality: MdPersonSearch,
  price: MdOutlinePriceChange,
  transparency: HiOutlineClipboardCheck,
};

function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative flex min-h-screen items-center bg-white py-32"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Our Features"
          title="SAPHY가 가진 특징"
          description="품질, 가격, 투명성. 중고 전자기기 거래에서 가장 중요한 세 가지를 지킵니다."
        />

        <Reveal delay={0.1} className="mt-16">
          <div className="relative overflow-hidden rounded-[2rem] p-1.5 shadow-[0_40px_80px_-40px_rgba(31,43,92,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-br from-silver-200 via-white to-saphy-300" />
            <div className="relative h-64 overflow-hidden rounded-[1.7rem] sm:h-96">
              <img
                src={iphonesFourImage}
                alt="여러 대의 스마트폰"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-saphy-900/50 to-transparent" />
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const Icon = ICONS[feature.id];
            return (
              <Reveal key={feature.id} delay={index * 0.15}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-silver-200 bg-gradient-to-b from-white to-silver-50 p-8 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-saphy-300 hover:shadow-[0_30px_60px_-30px_rgba(91,134,238,0.5)]">
                  <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-saphy-300 to-silver-400 transition duration-500 group-hover:scale-x-100" />
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-saphy-200 to-saphy-400 text-white shadow-lg shadow-saphy-400/40">
                    <Icon size={34} />
                  </div>
                  <h3 className="mt-8 text-2xl font-bold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-4 leading-[1.85] text-slate-600">
                    {feature.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
