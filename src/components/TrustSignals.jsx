import React from 'react';
import { ShieldCheck, Fingerprint, Lock, Zap } from 'lucide-react';

const badges = [
  'SOC 2 in progress',
  'FIDO2 / WebAuthn',
  'End‑to‑end TLS',
  'EU & US regions',
];

const features = [
  {
    icon: ShieldCheck,
    title: 'Built for production',
    desc: 'Hardened flows, replay protection, and abuse throttling out of the box.'
  },
  {
    icon: Fingerprint,
    title: 'Biometrics first',
    desc: 'Touch ID, Face ID, and passkeys work seamlessly across devices.'
  },
  {
    icon: Lock,
    title: 'No secrets on device',
    desc: 'Keys stored in secure enclaves; we never see your users’ biometrics.'
  },
  {
    icon: Zap,
    title: 'One‑line integration',
    desc: 'Drop in the SDK and ship passwordless in minutes, not weeks.'
  },
];

export default function TrustSignals() {
  return (
    <section id="trust" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="bg-gradient-to-br from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
          Trust by design
        </h2>
        <p className="mt-3 text-gray-300">
          We take on the hard parts of authentication so you don’t have to. Modern standards, transparent security posture, and developer‑centric tooling.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {badges.map((b) => (
            <span key={b} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
              {b}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-5 transition hover:border-white/20">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-cyan-300">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-base font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-gray-400">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center text-xs text-gray-500">
        “Trusted by builders at”
        <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-400">
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Open Source</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Fintech</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">SaaS</span>
          <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Commerce</span>
        </div>
      </div>
    </section>
  );
}
