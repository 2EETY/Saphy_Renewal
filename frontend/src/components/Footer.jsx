import React from 'react';
import { FaGithub } from 'react-icons/fa';
import saphyLogo from '../assets/Saphy_title_white.svg';
import { LINKS, NAV_ITEMS } from '../data/landing';

function Footer() {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-silver-300">
      <div className="h-px bg-gradient-to-r from-transparent via-saphy-300/50 to-transparent" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <img src={saphyLogo} alt="Saphy Logo" className="h-7" />
          <p className="mt-5 text-sm leading-relaxed">
            안심하고 거래하는 중고 전자기기 플랫폼
          </p>
        </div>

        <nav aria-label="푸터 메뉴">
          <p className="text-sm font-semibold text-white">메뉴</p>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} className="hover:text-saphy-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:text-right">
          <p className="text-sm font-semibold text-white">Saphy</p>
          <p className="mt-5 text-sm">상상기업 프로젝트</p>
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="github"
            className="mt-4 inline-flex items-center gap-2 text-sm hover:text-saphy-300"
          >
            <FaGithub size={18} />
            github.com/2024-Saphy
          </a>
        </div>
      </div>
      <p className="border-t border-white/5 py-6 text-center text-xs text-silver-500">
        Copyright &copy; {thisYear} SAPHY. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
