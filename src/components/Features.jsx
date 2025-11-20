import { motion } from 'framer-motion';
import { Reveal, ParallaxScroll } from './Parallax';

export default function Features() {
  const items = [
    {
      title: 'Content pillar creation at scale',
      subtitle: 'Identify themes, deploy everywhere',
      points: [
        'Define thematic north-stars (e.g., Geek Life, Supply-Chain Deep-Dives)',
        'Spin up articles, videos, shorts and newsletters',
        'Coordinate multi-channel deployment with calendars'
      ],
    },
    {
      title: 'Systems-led publishing & monetisation',
      subtitle: 'Automate, measure, optimise',
      points: [
        'Cross-post to Facebook, Instagram, TikTok, YouTube',
        'Performance tracking dashboards with actionable insights',
        'Monetisation playbooks: sponsorships, affiliate, licensing'
      ],
    },
    {
      title: 'Brand-business enablement',
      subtitle: 'Embed rigs and operational models',
      points: [
        'Onboard teams onto frameworks and SOPs',
        'Train and transfer capabilities to internal owners',
        'Scale pillars independently post-engagement'
      ],
    },
  ];

  return (
    <section id="value" className="relative py-24 sm:py-28 overflow-hidden">
      <ParallaxScroll speed={0.08} className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.12),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">What we do</h2>
            <p className="mt-2 text-white/70">Design and operate content systems that compound audience and revenue for brands.</p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, idx) => (
            <Reveal key={it.title} delay={idx * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200, damping: 18 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-md hover:bg-white/[0.06] transition">
                <h3 className="text-lg font-semibold text-white">{it.title}</h3>
                <p className="mt-1 text-sm text-white/70">{it.subtitle}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80 list-disc list-inside">
                  {it.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
