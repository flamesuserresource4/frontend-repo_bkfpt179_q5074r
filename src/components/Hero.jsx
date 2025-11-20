import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Full-spectrum digital media solutions
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Build, scale and monetise content pillars across web, social and emerging platforms.
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            We design thematic north-stars, deploy multi-channel content engines, automate publishing and embed systems so your brand compounds audience and revenue.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm shadow-white/10 transition hover:bg-slate-100">Start a project</a>
            <a href="#value" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/10">See how it works</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
    </section>
  );
}
