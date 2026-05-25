import React from 'react';

/*
  Discord + Socials section.

  Discord invite is configured below.
  Search for DISCORD_URL in this file to change.

  To update other socials, edit the SOCIALS array below.
*/
const DISCORD_URL = 'https://discord.gg/6xcrKdMw46';

const SOCIALS = [
  { name: 'TikTok', handle: '@rzkcity', href: 'https://www.tiktok.com/@rzkcity' },
  { name: 'YouTube', handle: '@rzkcity', href: 'https://www.youtube.com/@rzkcity' },
  { name: 'Instagram', handle: '@rzkcity', href: 'https://www.instagram.com/rzkcity' },
  { name: 'Twitch', handle: 'rzkcity', href: 'https://www.twitch.tv/rzkcity' },
];

export default function DiscordSocials() {
  return (
    <section id="discord" className="relative py-32 sm:py-40">
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-start">
        {/* Discord pane */}
        <div className="lg:col-span-7 relative">
          <div className="text-[11px] tracking-[0.32em] uppercase text-gold/80 mb-4">
            <span className="inline-block w-8 h-px bg-gold/50 mr-3 align-middle" />
            03 · Społeczność
          </div>
          <h2 className="font-display uppercase leading-[0.95] text-[clamp(2rem,5.5vw,4.5rem)] headline-gradient">
            Discord —<br />miejsce gdzie się <span className="text-gold">dzieje.</span>
          </h2>
          <p className="mt-6 max-w-lg text-bone/70 text-[15px] leading-relaxed">
            Ogłoszenia, eventy, pomoc techniczna, plotki o aktualizacji i nocne giveaway.
            Wbij na serwer Discorda zanim zaczniesz grać — łatwiej się odnajdziesz.
          </p>

          <div className="mt-10 relative inline-block">
            {/* Soft neon glow behind the CTA */}
            <div
              className="absolute -inset-6 rounded-sm opacity-60 blur-2xl"
              style={{
                background:
                  'radial-gradient(ellipse at 30% 50%, rgba(160,107,255,0.45), transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(200,162,75,0.35), transparent 60%)',
              }}
              aria-hidden
            />
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dołącz do Discorda RZKCITY"
              className="relative inline-flex items-center gap-4 px-7 py-5 border border-gold/40 bg-ink/80 backdrop-blur rounded-sm text-bone btn-gold group"
            >
              <DiscordGlyph />
              <div className="text-left">
                <div className="font-display uppercase text-2xl text-gold-bright leading-none">
                  Dołącz
                </div>
                <div className="font-mono text-[11px] tracking-widest uppercase text-bone/55 mt-1">
                  discord.gg/6xcrKdMw46
                </div>
              </div>
              <span className="text-gold-bright translate-x-0 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </a>
          </div>

          {/* Placeholder hint — visible only in code, not on page */}
        </div>

        {/* Socials column */}
        <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-gold/15">
          <div className="font-mono text-[11px] tracking-widest uppercase text-gold/70 mb-6">
            // socials
          </div>
          <ul className="divide-y divide-gold/10 border-y border-gold/10">
            {SOCIALS.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 hover:pl-2 transition-all duration-300"
                >
                  <span className="font-display uppercase text-xl tracking-wide text-bone group-hover:text-gold-bright transition-colors">
                    {s.name}
                  </span>
                  <span className="flex items-center gap-4 text-bone/55 group-hover:text-bone transition-colors">
                    <span className="font-mono text-[11px] tracking-widest uppercase">
                      {s.handle}
                    </span>
                    <span className="text-gold-bright opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 font-mono text-[11px] tracking-widest uppercase text-bone/40 leading-relaxed">
            // tag #rzkcity działa na każdej platformie — wrzucaj zrzuty,
            klipy, buildy. Najlepsze trafiają na stronę główną.
          </div>
        </div>
      </div>
    </section>
  );
}

function DiscordGlyph() {
  // Original Discord-shape-inspired blocky glyph. Not the official logo.
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden fill="none">
      <rect x="4" y="10" width="32" height="22" rx="6" fill="#A06BFF" opacity="0.18" />
      <rect x="4" y="10" width="32" height="22" rx="6" stroke="#A06BFF" strokeOpacity="0.7" />
      <circle cx="15" cy="22" r="3" fill="#E6C36A" />
      <circle cx="25" cy="22" r="3" fill="#E6C36A" />
      <path d="M12 30 L16 34 L24 34 L28 30" stroke="#A06BFF" strokeWidth="1.5" fill="none" strokeLinecap="square" />
    </svg>
  );
}
