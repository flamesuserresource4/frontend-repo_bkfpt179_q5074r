import { motion } from 'framer-motion';
import { Reveal, ParallaxScroll } from './Parallax';

export default function Systems() {
  const steps = [
    { num: '01', title: 'Discover', text: 'Workshops to align on business objectives, audiences and content pillars.' },
    { num: '02', title: 'Design', text: 'Blueprints for multi-channel formats, workflows and measurement plans.' },
    { num: '03', title: 'Deploy', text: 'Automation setup across channels with calendars, templates and QA gates.' },
    { num: '04', title: 'Enable', text: 'Embed rigs, SOPs and training so internal teams operate and scale pillars.' },
  ];

  return (
    <section id="systems" className="relative py-24 sm:py-28 overflow-hidden">
      <ParallaxScroll speed={0.05} className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 top-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
      </ParallaxScroll>
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">How we build your content engine</h2>
            <p className="mt-2 text-white/70">A systems-first approach that focuses on repeatability, speed and measurable outcomes.</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <Reveal key={s.num} delay={idx * 0.1}>
              <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200, damping: 18 }} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <div className="text-xs font-mono text-cyan-300/90">{s.num}</div>
                <div className="mt-2 text-lg font-semibold text-white">{s.title}</div>
                <p className="mt-2 text-sm text-white/75">{s.text}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
