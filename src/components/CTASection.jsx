import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section id="cta" className="relative mx-auto max-w-5xl px-6 pb-24 pt-8">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/20 via-blue-600/10 to-indigo-700/20 p-[1px]">
        <div className="rounded-[15px] bg-[#07090C] p-8 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white md:text-3xl">Be first to ship auth that disappears</h3>
              <p className="mt-2 text-gray-300">
                Join the early access list for launch updates, docs, and migration guides. We’ll reach out as soon as we open the doors.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Biometric + passkey support</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> SDKs for web and mobile</li>
                <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-400" /> Drop‑in UI components</li>
              </ul>
            </div>
            <div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="w-full rounded-lg border border-white/10 bg-[#0B0F14] px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:border-cyan-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition hover:from-cyan-400 hover:to-blue-500"
                >
                  Join waitlist
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="px-1 text-xs text-gray-500">No spam. Unsubscribe anytime.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
