# MYTHOS X — Dark Intelligence OS

> **Think · Hack · Build · Explore**

MYTHOS X is a privacy-minded AI and cybersecurity learning workspace. This repository contains an early **Next.js starter MVP** with a dark red, black, and neon-green command-center interface and safe, local demonstrations.

![MYTHOS X emblem](public/mythos-mark.svg)

## Features in this starter

- **Command Center** — module navigation, status overview, and quick launch cards.
- **AI Intelligence** — local chat demo with a clearly marked integration point for a real AI provider.
- **Code Studio** — editable example code with a copy action.
- **OSINT Explorer** — a responsible public-source research checklist.
- **Cyber Lab** — guided defensive security learning paths.
- **Terminal Simulator** — fixed, harmless commands only; no operating-system shell is executed.
- **Network Defense** — configuration checklist; no live scanning is performed.
- **Password Auditor** — simple local browser-side sample check. Never enter a real password.
- **CTF Challenge** — beginner defensive coding question.
- **Fictional Mission** — invented identities and the reserved `.example` domain for safe investigation practice.

## Technology

- Next.js App Router
- React
- TypeScript
- Responsive CSS

## Run locally

Requirements: Node.js 20 or later and npm.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

For a production build:

```bash
npm run typecheck
npm run lint
npm run build
npm start
```

## Project status

This is a **front-end MVP starter**, not a completed hosted AI service. Local interface demos are implemented. Production authentication, accounts, database persistence, real AI model access, live OSINT integrations, cloud sandboxes, real network scanning, and deployment configuration are not included.

To connect an AI provider, implement a server-side API route and keep the provider key in a server-only environment variable. Never expose private API keys through `NEXT_PUBLIC_*` variables or commit secrets.

Copy `.env.example` to `.env.local` only when configuring integrations. Keep all credentials out of Git.

## Safety and responsible use

MYTHOS X is intended for defensive security education and authorized testing. The terminal is simulated; the network module is a checklist; the fictional mission uses invented data. Do not use this project to access accounts, devices, networks, or data without explicit permission.

See [SECURITY.md](SECURITY.md) for reporting guidance and [CONTRIBUTING.md](CONTRIBUTING.md) for contribution expectations.

## License

No project license has been added. Default copyright applies unless the repository owner chooses and adds a license. Check and preserve the licenses and notices for all third-party packages, templates, and assets you use.

---

Built in public by the MYTHOS X project.
