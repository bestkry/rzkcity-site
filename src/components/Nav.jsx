import React, { useEffect, useState } from 'react';
import Logo from './Logo.jsx';

const links = [
  { href: '#tryby', label: 'Tryby' },
  { href: '#build', label: 'Świat' },
  { href: '#sklep', label: 'Sklep' },
  { href: '#discord', label: 'Discord' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-md bg-ink/70 border-b border-gold/15'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between text-bone">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.18em] uppercase">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-bone/70 hover:text-gold-bright transition-colors duration-300"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-bright transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#discord"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-[12px] tracking-[0.2em] uppercase border border-gold/40 text-gold-bright btn-gold rounded-sm"
        >
          <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" aria-hidden />
          Dołącz
        </a>

        <button
          aria-label="Otwórz menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden p-2 text-bone hover:text-gold-bright transition"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden>
            <rect x="2" y="5" width="18" height="2" fill="currentColor" />
            <rect x="2" y="10" width="18" height="2" fill="currentColor" />
            <rect x="2" y="15" width="18" height="2" fill="currentColor" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gold/10 bg-ink/95 backdrop-blur-md">
          <div className="px-5 py-4 flex flex-col gap-3 text-[14px] tracking-[0.16em] uppercase">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-bone/80 hover:text-gold-bright"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
