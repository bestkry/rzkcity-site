import React, { useState } from 'react';
import Logo from './Logo.jsx';

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText('rzkcity.pl');
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <footer className="relative border-t border-gold/15 mt-20">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-16 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Logo />
          <p className="mt-5 max-w-sm text-bone/55 text-[14px] leading-relaxed">
            RZKCITY — polski serwer Minecraft. Tryby: RZKSMP i Skyblock.
            Zrobiony bez ściemy, z dbałością o detal.
          </p>
        </div>

        <div className="lg:col-span-3">
          <div className="font-mono text-[10px] tracking-widest uppercase text-gold/70 mb-3">
            // serwer
          </div>
          <button
            onClick={copyIp}
            className="ip-chip text-gold-bright hover:text-gold transition text-sm"
            aria-label="Kopiuj adres IP serwera"
          >
            {copied ? 'skopiowano ✓' : 'rzkcity.pl'}
          </button>
          <div className="text-bone/45 text-[12px] mt-1">Java edition · 1.20+</div>
        </div>

        <div className="lg:col-span-4">
          <div className="font-mono text-[10px] tracking-widest uppercase text-gold/70 mb-3">
            // nawigacja
          </div>
          <ul className="grid grid-cols-2 gap-y-2 text-[13px] text-bone/65">
            <li><a className="hover:text-gold-bright" href="#tryby">Tryby</a></li>
            <li><a className="hover:text-gold-bright" href="#build">Świat</a></li>
            <li><a className="hover:text-gold-bright" href="#sklep">Sklep</a></li>
            <li><a className="hover:text-gold-bright" href="#discord">Discord</a></li>
            <li><a className="hover:text-gold-bright" href="#top">Góra</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-wrap items-center justify-between gap-3 text-[11px] tracking-widest uppercase text-bone/40 font-mono">
          <div>© {new Date().getFullYear()} RZKCITY · made by CAREEES</div>
          <div>not affiliated with mojang ab</div>
        </div>
      </div>
    </footer>
  );
}
