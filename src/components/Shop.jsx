import React from 'react';

// TODO: replace with the final Tebex/category URL when the store is public.
const SHOP_URL = 'https://rzkcity.tebex.io';

const packages = [
  {
    tier: 'Legenda',
    code: 'S.05',
    label: 'Top rank',
    cash: '15,000 cash',
    accent: 'gold',
    featured: true,
    perks: [
      'Legenda Daily Kit',
      '7 auction house listings (/ah)',
      '16 players in team (/team)',
      '12 homes (/sethome)',
      '7 lands (/lands), each up to 25 chunks',
      '5 player vaults (/pv 1..5)',
      'Trusted on 7 lands',
      '6 jobs simultaneously',
      '6 camps',
      'VIP, VIP+ and Elita kits and permissions',
      'Back to latest location (/back)',
    ],
  },
  {
    tier: 'Elita',
    code: 'S.04',
    label: 'High rank',
    cash: '10,000 cash',
    accent: 'violet',
    perks: [
      'Elita Daily Kit',
      '4 auction house listings (/ah)',
      '13 players in team (/team)',
      '8 homes (/sethome)',
      '5 lands (/lands), each up to 25 chunks',
      '3 player vaults (/pv 1..3)',
      'Trusted on 5 lands',
      '4 camps',
      '4 jobs simultaneously',
      'VIP and VIP+ kits and permissions',
      'Upgrade Anywhere (/smithingtable)',
    ],
  },
  {
    tier: 'VIP+',
    code: 'S.03',
    label: 'Boosted rank',
    cash: '5,000 cash',
    accent: 'cyan',
    perks: [
      'VIP+ Daily Kit',
      '3 auction house listings (/ah)',
      '10 players in team (/team)',
      '5 homes (/sethome)',
      '4 lands (/lands), each up to 25 chunks',
      '2 player vaults (/pv 1..2)',
      'Trusted on 4 lands',
      '3 camps',
      '3 jobs simultaneously',
      'VIP kits and permissions',
      'Repair Anywhere (/anvil)',
      'Put Anything on your Hat (/hat)',
    ],
  },
  {
    tier: 'VIP',
    code: 'S.02',
    label: 'Starter premium',
    cash: '1,000 cash',
    accent: 'gold',
    perks: [
      'VIP Daily Kit',
      '2 auction house listings (/ah)',
      '7 players in team (/team)',
      '3 homes (/sethome)',
      '3 lands (/lands), each up to 100 chunks',
      '1 player vault (/pv 1)',
      '2 camps',
      '2 jobs simultaneously',
      'Trusted on 3 lands',
      'Ender Chest Anywhere (/echest)',
      'Craft Anywhere (/craft)',
      'Stone Cutter Anywhere (/stonecutter)',
      'Furnace Anywhere (/furnace)',
      'Chat colors',
    ],
  },
  {
    tier: 'Member',
    code: 'S.01',
    label: 'Default access',
    cash: 'Base rank',
    accent: 'neutral',
    isFree: true,
    perks: [
      'Daily Kit',
      'Starter Kit',
      '1 auction house listing (/ah)',
      '5 players in team (/team)',
      '1 home (/sethome)',
      '2 lands (/lands), each up to 25 chunks',
      '1 camp',
      '1 job simultaneously',
      'Trusted on 2 lands',
      'Nations (/nations)',
      'Wars (/wars)',
      'Teleport requests (/tpa)',
      'Suicide command (/suicide)',
      'All other general player commands',
    ],
  },
];

export default function Shop() {
  return (
    <section id="sklep" className="relative py-32 sm:py-40 overflow-hidden">
      <div className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
      <div
        className="absolute -right-24 top-32 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
        aria-hidden
      />
      <div
        className="absolute -left-24 bottom-24 h-72 w-72 rounded-full bg-neon-cyan/10 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-7">
            <div className="text-[11px] tracking-[0.32em] uppercase text-gold/80 mb-4">
              <span className="inline-block w-8 h-px bg-gold/50 mr-3 align-middle" />
              04 · Sklep
            </div>
            <h2 className="font-display uppercase leading-[0.95] text-[clamp(2rem,5vw,4rem)] headline-gradient">
              Pakiety bez<br />pay-to-win.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8 lg:border-l lg:border-gold/15">
            <p className="max-w-md text-bone/70 text-[15px] leading-relaxed">
              Rangi dają wygodę, limity, kity i komendy utility. Każdy pakiet ma jasne
              benefity, a bazowy Member zostaje punktem odniesienia dla nowych graczy.
            </p>
            <div className="mt-5 font-mono text-[10px] tracking-widest uppercase text-bone/40">
              // ceny i finalny checkout do podpięcia w SHOP_URL
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {packages.map((pack) => (
            <PackageCard key={pack.tier} pack={pack} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PackageCard({ pack }) {
  const accentClass =
    pack.accent === 'cyan'
      ? 'text-neon-cyan border-neon-cyan/25'
      : pack.accent === 'violet'
        ? 'text-neon-violet border-neon-violet/25'
        : pack.accent === 'neutral'
          ? 'text-bone/70 border-bone/15'
          : 'text-gold-bright border-gold/30';

  return (
    <article
      className={`relative group overflow-hidden rounded-sm border bg-graphite/55 backdrop-blur-sm p-6 sm:p-7 transition duration-500 hover:-translate-y-1 ${
        pack.featured
          ? 'lg:col-span-8 border-gold/45 shadow-gold-glow'
          : pack.isFree
            ? 'lg:col-span-4 border-bone/15'
            : 'lg:col-span-4 border-gold/15 hover:border-gold/35'
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
          pack.accent === 'cyan'
            ? 'via-neon-cyan/80'
            : pack.accent === 'violet'
              ? 'via-neon-violet/80'
              : 'via-gold/80'
        } to-transparent`}
        aria-hidden
      />

      {pack.featured && (
        <div className="absolute right-5 top-5 border border-gold/30 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-gold-bright">
          polecany
        </div>
      )}

      <div className="relative">
        <div className="font-mono text-[11px] tracking-[0.28em] uppercase text-bone/40">
          {pack.code} · {pack.label}
        </div>
        <div className="mt-4 flex items-end justify-between gap-4">
          <h3 className="font-display uppercase text-[clamp(2rem,4vw,3.7rem)] leading-none text-bone">
            {pack.tier}
          </h3>
          <div className={`hidden sm:block h-3 w-16 border-b ${accentClass}`} />
        </div>

        <div className={`mt-5 inline-flex border px-4 py-2 font-mono text-[11px] uppercase tracking-widest ${accentClass}`}>
          {pack.cash}
        </div>

        <ul className="mt-7 grid gap-2.5 text-[13px] leading-relaxed text-bone/72">
          {pack.perks.map((perk) => (
            <li key={perk} className="flex gap-3">
              <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${dotClass(pack.accent)}`} />
              <span>{perk}</span>
            </li>
          ))}
        </ul>

        <a
          href={pack.isFree ? '#discord' : SHOP_URL}
          target={pack.isFree ? undefined : '_blank'}
          rel={pack.isFree ? undefined : 'noopener noreferrer'}
          className={`mt-8 inline-flex w-full items-center justify-between border px-5 py-4 font-mono text-[11px] uppercase tracking-[0.22em] transition duration-300 ${
            pack.isFree
              ? 'border-bone/20 text-bone/70 hover:border-gold/40 hover:text-gold-bright'
              : 'border-gold/35 text-gold-bright hover:bg-gold-bright hover:text-ink'
          }`}
        >
          <span>{pack.isFree ? 'Dołącz na Discord' : 'Kup pakiet'}</span>
          <span aria-hidden>→</span>
        </a>
      </div>
    </article>
  );
}

function dotClass(accent) {
  if (accent === 'cyan') return 'bg-neon-cyan shadow-[0_0_16px_rgba(91,231,255,0.8)]';
  if (accent === 'violet') return 'bg-neon-violet shadow-[0_0_16px_rgba(160,107,255,0.8)]';
  if (accent === 'neutral') return 'bg-bone/40';
  return 'bg-gold-bright shadow-[0_0_16px_rgba(230,195,106,0.8)]';
}
