import React, { useState, useRef } from 'react';

/*
  Hero with a video-ready background layer.

  To add a hero video later:
    1. Drop a file at /public/hero-video.mp4 (and optionally /public/hero-video.webm)
    2. Optionally add a poster image at /public/hero-poster.jpg
    The <video> element below will pick them up automatically.
  Until the file exists, the CSS .hero-fallback gradient + grid renders as a graceful fallback.
*/

const IP = 'rzkcity.pl';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const copyIp = async () => {
    try {
      await navigator.clipboard.writeText(IP);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Fallback for browsers without clipboard API
      const t = document.createElement('textarea');
      t.value = IP;
      document.body.appendChild(t);
      t.select();
      document.execCommand('copy');
      document.body.removeChild(t);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    }
  };

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-end pt-28 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Video-ready background layer */}
      <div className="hero-media" aria-hidden="true">
        {/* CSS fallback stays under the video. It is visible only while the video is loading/fails. */}
        <div className="hero-fallback" />
        {!videoError && (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            poster="./hero-poster.jpg"
            onError={() => setVideoError(true)}
            className="opacity-70"
          >
            {/* Replace this source with the generated hero video later. */}
            <source src="./hero-video.mp4" type="video/mp4" />
          </video>
        )}
        <div className="absolute inset-0 scanlines opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 grid lg:grid-cols-12 gap-10 items-end">
        {/* Tag rail */}
        <div className="lg:col-span-7 xl:col-span-8">
          <div className="flex items-center gap-3 text-[11px] tracking-[0.32em] uppercase text-gold/80 mb-6">
            <span className="w-8 h-px bg-gold/50" />
            Serwer Minecraft · PL
          </div>

          <h1 className="font-display uppercase leading-[0.95] tracking-[0.025em] headline-gradient headline-edge text-[clamp(2.4rem,7.3vw,6.4rem)]">
            Nocne miasto<br />
            <span className="text-gold">w blokach.</span>
          </h1>

          <p className="mt-6 max-w-xl text-bone/75 text-[15px] sm:text-base leading-relaxed">
            RZKCITY to autorski klimat — RZKSMP i Skyblock z dusznym, neonowym wibem.
            Buduj, handluj, walcz. Po cichu albo bardzo głośno.
          </p>

          {/* IP + copy */}
          <div className="mt-10 inline-flex items-stretch border border-gold/30 bg-ink/60 backdrop-blur-sm rounded-sm overflow-hidden shadow-gold-glow">
            <div className="px-5 py-3 flex items-center gap-3">
              <span className="text-[10px] tracking-[0.3em] uppercase text-bone/50">IP</span>
              <span className="ip-chip text-gold-bright text-lg">{IP}</span>
            </div>
            <button
              onClick={copyIp}
              aria-label="Skopiuj adres IP serwera"
              className="px-5 border-l border-gold/30 text-[11px] tracking-[0.25em] uppercase text-bone hover:text-ink hover:bg-gold-bright transition-colors duration-300 btn-gold"
            >
              {copied ? 'Skopiowano' : 'Kopiuj'}
            </button>
          </div>

          <div className="mt-5 text-[12px] tracking-[0.2em] uppercase text-bone/45">
            Wersja: 1.20+ · Java edition
          </div>
        </div>

        {/* Side meta column — asymmetric, breaks the symmetry */}
        <aside className="lg:col-span-5 xl:col-span-4 lg:pl-8 lg:border-l lg:border-gold/15">
          <div className="space-y-7 font-mono text-[11px] tracking-widest uppercase text-bone/55">
            <div>
              <div className="text-gold/70 mb-1">// status</div>
              <div className="flex items-center gap-2 text-bone">
                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                Online · status serwera
              </div>
            </div>
            <div>
              <div className="text-gold/70 mb-1">// tryby</div>
              <div className="text-bone">RZKSMP · Skyblock</div>
            </div>
            <div>
              <div className="text-gold/70 mb-1">// kanał</div>
              <div className="text-bone">discord.gg/rzkcity</div>
            </div>
            <div className="pt-4 border-t border-gold/10">
              <div className="text-gold/70 mb-2">// scroll</div>
              <div className="flex items-center gap-3 text-bone">
                <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden>
                  <rect x="0.5" y="0.5" width="13" height="21" rx="6.5" stroke="currentColor" />
                  <rect x="6" y="5" width="2" height="5" fill="currentColor">
                    <animate attributeName="y" values="5;9;5" dur="1.6s" repeatCount="indefinite" />
                  </rect>
                </svg>
                Zbuduj blok ↓
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
