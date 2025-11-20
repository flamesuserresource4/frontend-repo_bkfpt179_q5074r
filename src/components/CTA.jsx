import { motion } from 'framer-motion';
import { Reveal } from './Parallax';

export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to build new content pillars?</h2>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="mt-3 text-white/75">Tell us about your brand and goals. We’ll share a tailored plan for your pillars, workflows and monetisation roadmap.</p>
        </Reveal>
        <form className="mx-auto mt-8 grid gap-3 sm:max-w-xl">
          <Reveal>
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Your name" />
          </Reveal>
          <Reveal delay={0.05}>
            <input className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="Work email" />
          </Reveal>
          <Reveal delay={0.1}>
            <textarea rows={4} className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-cyan-400" placeholder="What would you like to build?" />
          </Reveal>
          <Reveal delay={0.15}>
            <motion.button type="button" whileTap={{ scale: 0.98 }} whileHover={{ y: -2 }} className="mt-1 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm shadow-white/10 transition hover:bg-slate-100">Request a proposal</motion.button>
          </Reveal>
        </form>
      </div>
    </section>
  );
}
