import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-[#07090C]">
      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay for contrast - does not block interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#07090C]/40 via-[#07090C]/30 to-[#07090C]" />

      {/* Content */}
      <div className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-6">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg" />
            <span className="text-lg font-semibold tracking-tight text-white">Vanish Auth</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#trust" className="text-sm text-gray-300 transition hover:text-white">Features</a>
            <a href="#code" className="text-sm text-gray-300 transition hover:text-white">Code</a>
            <a href="#trust" className="text-sm text-gray-300 transition hover:text-white">Trust</a>
            <a
              href="#cta"
              className="group inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
            >
              Request Early Access
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </nav>

        <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-24 text-center md:pt-32">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-cyan-300/90 shadow-sm backdrop-blur">
            Passwordless • Biometric • One line
          </span>
          <h1 className="max-w-4xl bg-gradient-to-br from-white via-white to-blue-200 bg-clip-text text-4xl font-[800] leading-tight text-transparent md:text-6xl">
            Auth that disappears.
          </h1>
          <p className="mt-5 max-w-2xl text-balance text-base text-gray-300 md:text-lg">
            Drop-in biometrics for your app in a single line of code. No passwords, no friction—just secure, verified users.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#code"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:from-cyan-400 hover:to-blue-500"
            >
              See the 1‑line snippet
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Join the waitlist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
