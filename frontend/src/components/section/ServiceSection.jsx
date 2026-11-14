import React from 'react';
import { HiOutlineShoppingBag, HiOutlineTag } from 'react-icons/hi';
import Reveal from '../common/Reveal';
import SectionHeading from '../common/SectionHeading';
import { SERVICES } from '../../data/landing';

const ICONS = {
  sell: HiOutlineTag,
  buy: HiOutlineShoppingBag,
};

function ServiceSection() {
  return (
    <section
      id="service"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 py-32"
    >
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 rounded-full bg-saphy-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-silver-400/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-6">
        <SectionHeading
          dark
          eyebrow="Service"
          title={
            <>
              판매자와 구매자 모두가
              <br />
              신뢰할 수 있는 거래
            </>
          }
          description="SAPHY는 판매부터 구매까지, 거래의 모든 과정을 안전하게 만듭니다."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {SERVICES.map((service, index) => {
            const Icon = ICONS[service.id];
            return (
              <Reveal key={service.id} delay={index * 0.15}>
                <article className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-8 backdrop-blur-md transition duration-500 hover:border-saphy-300/50 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-saphy-300 text-slate-900">
                      <Icon size={24} />
                    </span>
                    <span className="text-sm font-bold uppercase tracking-widest text-saphy-300">
                      {service.label}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-bold leading-snug text-white">
                    {service.title}
                  </h3>
                  <ul className="mt-8 space-y-4">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 leading-relaxed text-silver-300"
                      >
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-saphy-300" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
