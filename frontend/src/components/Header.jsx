import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import saphyLogo from '../assets/Saphy_title_white.svg';
import { LINKS, NAV_ITEMS } from '../data/landing';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
        solid
          ? 'bg-slate-900/85 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6 text-white">
        <Link
          to="/"
          className="transition duration-300 ease-in-out hover:scale-105"
        >
          <img src={saphyLogo} alt="Saphy Logo" className="h-7 sm:h-8" />
        </Link>

        <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="rounded-full px-4 py-2 text-silver-200 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
              className="flex items-center gap-2 rounded-full bg-saphy-300 px-5 py-2.5 font-semibold text-slate-900 transition duration-300 hover:-translate-y-0.5 hover:bg-saphy-200"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label={open ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <HiX size={26} /> : <HiMenuAlt3 size={26} />}
        </button>
      </nav>

      {/* 하단 메탈릭 라인 */}
      <div
        className={`h-px bg-gradient-to-r from-transparent via-saphy-300/70 to-transparent transition-opacity duration-500 ${
          solid ? 'opacity-100' : 'opacity-0'
        }`}
      />

      {open && (
        <ul className="space-y-1 px-6 pb-6 pt-2 text-white md:hidden">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-silver-200 hover:bg-white/10"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-2 rounded-xl bg-saphy-300 px-4 py-3 font-semibold text-slate-900"
            >
              <FaGithub size={18} />
              GitHub
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
