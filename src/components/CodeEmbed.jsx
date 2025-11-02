import React, { useMemo, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const snippets = {
  javascript: `// 1) Install SDK: npm i @vanish/auth
import { login } from '@vanish/auth';

await login({ method: 'biometric' }); // that's it ✨`,
  python: `# 1) Install SDK: pip install vanish-auth
from vanish_auth import login

login(method='biometric')  # that's it ✨`,
  curl: `# One request to start a biometric session
curl -X POST https://api.vanish.dev/v1/login \
  -H 'Authorization: Bearer <YOUR_KEY>' \
  -H 'Content-Type: application/json' \
  -d '{"method":"biometric"}'`
};

const languages = [
  { key: 'javascript', label: 'JavaScript' },
  { key: 'python', label: 'Python' },
  { key: 'curl', label: 'cURL' },
];

export default function CodeEmbed() {
  const [active, setActive] = useState('javascript');
  const [copied, setCopied] = useState(false);

  const code = useMemo(() => snippets[active], [active]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      // ignore
    }
  };

  return (
    <section id="code" className="relative mx-auto mt-[-3rem] w-full max-w-6xl px-6">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/5 p-1 backdrop-blur">
        <div className="rounded-[14px] bg-[#0A0D12] p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.key}
                  onClick={() => setActive(lang.key)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium transition ${
                    active === lang.key
                      ? 'bg-white/10 text-white'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-white/10"
              aria-label="Copy code"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
              {copied ? 'Copied' : 'Copy'}
            </button>
          </div>
          <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-[#05070A]">
            <pre className="overflow-x-auto p-5 text-[13px] leading-relaxed text-slate-200">
              <code>{code}</code>
            </pre>
          </div>
          <p className="mt-4 text-xs text-gray-400">
            Replace SDK names with your actual package. We handle device biometrics (Face/Touch ID), passkeys, and fallback magic links automatically.
          </p>
        </div>
      </div>
    </section>
  );
}
