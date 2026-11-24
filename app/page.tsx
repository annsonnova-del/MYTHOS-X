"use client";
import { useMemo, useState, type FormEvent } from "react";

type Tab = "overview" | "ai" | "code" | "osint" | "cyber" | "terminal" | "network" | "password" | "ctf" | "mission";
const nav: { group: string; items: { id: Tab; icon: string; name: string; badge?: string }[] }[] = [
  { group: "WORKSPACE", items: [{ id: "overview", icon: "◈", name: "Command Center" }, { id: "ai", icon: "✳", name: "AI Intelligence", badge: "DEMO" }, { id: "code", icon: "</>", name: "Code Studio" }, { id: "osint", icon: "◎", name: "OSINT Explorer" }] },
  { group: "SECURITY LAB", items: [{ id: "cyber", icon: "⌘", name: "Cyber Lab" }, { id: "terminal", icon: ">_", name: "Terminal Simulator" }, { id: "network", icon: "⌁", name: "Network Defense" }, { id: "password", icon: "▣", name: "Password Auditor" }, { id: "ctf", icon: "⚑", name: "CTF Challenges" }] },
  { group: "INTELLIGENCE", items: [{ id: "mission", icon: "◉", name: "Fictional Mission", badge: "SAFE" }] }
];
const info: Record<Tab, string> = {
  overview: "Your defensive security and creation workspace.",
  ai: "Ask questions and explore a local assistant demo.",
  code: "Draft and copy code examples in your browser.",
  osint: "A responsible workflow for public-source research.",
  cyber: "Build practical security skills with guided learning.",
  terminal: "Practice harmless commands in a simulated terminal.",
  network: "Review defensive network and application configuration.",
  password: "Check a made-up password sample locally.",
  ctf: "Solve beginner challenges using fictional training data.",
  mission: "Investigate an imaginary incident with invented evidence."
};
function Panel({ title, kicker, children, className = "" }: { title: string; kicker: string; children: React.ReactNode; className?: string }) {
  return <section className={"panel " + className}><div className="panel-head"><div><small className="eyebrow">{kicker}</small><h3>{title}</h3></div><i className="panel-status" /></div>{children}</section>;
}
function Header({ active }: { active: Tab }) {
  const item = nav.flatMap(g => g.items).find(x => x.id === active);
  return <div className="module-head"><div><small className="eyebrow">MYTHOS X / MODULE</small><h1>{item?.name}</h1><p>{info[active]}</p></div><span className="local-pill"><i /> LOCAL DEMO</span></div>;
}
function Overview({ go }: { go: (tab: Tab) => void }) {
  const links: { id: Tab; icon: string; title: string; sub: string }[] = [
    { id: "ai", icon: "✳", title: "AI Intelligence", sub: "Ask, learn and explore" },
    { id: "code", icon: "</>", title: "Code Studio", sub: "Draft and review code" },
    { id: "osint", icon: "◎", title: "OSINT Explorer", sub: "Public-source workflow" },
    { id: "cyber", icon: "⌘", title: "Cyber Lab", sub: "Defensive learning paths" },
    { id: "terminal", icon: ">_", title: "Terminal Simulator", sub: "Practice safe commands" },
    { id: "ctf", icon: "⚑", title: "CTF Challenges", sub: "Solve training puzzles" }
  ];
  return <>
    <section className="hero"><div className="hero-mesh" /><div className="hero-copy"><div className="hero-kicker"><i /> DEFENSIVE INTELLIGENCE PLATFORM</div><h2>Think beyond.<br /><span>Defend smarter.</span></h2><p>One workspace for AI-assisted learning, software creation, public-source research, and safe cybersecurity practice.</p><button className="primary" onClick={() => go("ai")}>Launch AI Intelligence <b>↗</b></button></div><div className="hero-symbol" aria-hidden="true"><div className="symbol-x">X</div><div className="symbol-eye">◉</div><small>MYTHOS / CORE</small></div><div className="hero-bottom"><span>BUILT FOR RESPONSIBLE DISCOVERY</span><span>VERSION 0.1.0 / STARTER</span></div></section>
    <div className="stats"><div><small>01 / WORKSPACE</small><b>5</b><span>Creation & research modules</span></div><div><small>02 / SECURITY</small><b>4</b><span>Safe learning environments</span></div><div><small>03 / PRIVACY</small><b>LOCAL</b><span>Demo interactions in-browser</span></div><div><small>04 / STATUS</small><b className="green">READY</b><span>Starter interface loaded</span></div></div>
    <div className="two-col"><Panel title="Launch modules" kicker="YOUR TOOLKIT"><div className="launch-grid">{links.map(x => <button className="launch-card" key={x.id} onClick={() => go(x.id)}><strong>{x.icon}</strong><span><b>{x.title}</b><small>{x.sub}</small></span><em>↗</em></button>)}</div></Panel><Panel title="Platform status" kicker="SYSTEM OVERVIEW"><div className="status-list"><div><span><i className="dot good" /> Interface</span><b>ONLINE</b></div><div><span><i className="dot good" /> Local demos</span><b>READY</b></div><div><span><i className="dot warn" /> AI provider</span><b>NOT CONNECTED</b></div><div><span><i className="dot warn" /> Database</span><b>NOT CONNECTED</b></div><div><span><i className="dot warn" /> Authentication</span><b>NOT CONNECTED</b></div></div><div className="notice"><b>Starter mode</b><p>Live AI, user accounts, database, and cloud services need to be configured before production use.</p></div></Panel></div>
    <div className="two-col lower"><Panel title="Activity stream" kicker="LOCAL SESSION"><div className="activity"><b>◈</b><span><strong>Workspace initialized</strong><small>MYTHOS X starter loaded</small></span><time>NOW</time></div><div className="activity"><b>⌘</b><span><strong>Cyber Lab available</strong><small>Safe learning content ready</small></span><time>READY</time></div><div className="activity"><b>◎</b><span><strong>Privacy mode enabled</strong><small>No external API calls in demo</small></span><time>LOCAL</time></div></Panel><Panel title="The MYTHOS standard" kicker="PROJECT PRINCIPLE"><div className="principle-mark">M<span>X</span></div><p className="body">Powerful tools should make people more capable at building and defending technology—not at harming others.</p><div className="tags"><span>PRIVACY</span><span>PERMISSION</span><span>LEARNING</span></div></Panel></div>
  </>;
}
function AiDesk() {
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([{ role: "assistant", text: "Welcome to MYTHOS AI. This is a local demo assistant. A live AI model is not connected yet." }]);
  const [prompt, setPrompt] = useState("");
  function send(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const value = prompt.trim(); if (!value) return; setMessages(old => [...old, { role: "user", text: value }, { role: "assistant", text: "Demo response: define your goal, learn the relevant concepts, and test only in an environment you own or are authorized to assess. Connect a server-side AI API route for real model responses." }]); setPrompt(""); }
  return <Panel title="MYTHOS AI Desk" kicker="ASSISTANT / LOCAL DEMO" className="wide"><div className="chat">{messages.map((m, i) => <div className={"message " + m.role} key={i}><b>{m.role === "assistant" ? "MX" : "YOU"}</b><p>{m.text}</p></div>)}</div><form className="composer" onSubmit={send}><input value={prompt} onChange={e => setPrompt(e.target.value)} placeholder="Ask about coding or defensive cybersecurity…" /><button className="primary">Send ↗</button></form><small className="muted">Local demo only. Messages are not sent to an external AI provider.</small></Panel>;
}
function CodeStudio() {
  const [code, setCode] = useState("function securityScore(checks: boolean[]) {\\n  if (!checks.length) return 0;\\n  const passed = checks.filter(Boolean).length;\\n  return Math.round((passed / checks.length) * 100);\\n}\\n\\nconsole.log(securityScore([true, true, false, true]));");
  const [copied, setCopied] = useState(false);
  async function copy() { try { await navigator.clipboard.writeText(code); setCopied(true); window.setTimeout(() => setCopied(false), 1400); } catch { setCopied(false); } }
  return <Panel title="Code Studio" kicker="EDITOR / TYPESCRIPT" className="wide"><div className="editor-bar"><span><i className="dot good" /> playground.ts</span><button className="ghost" onClick={copy}>{copied ? "COPIED" : "COPY CODE"}</button></div><textarea className="code-editor" value={code} onChange={e => setCode(e.target.value)} spellCheck={false} /><div className="editor-foot"><span>EDITABLE EXAMPLE · LOCAL ONLY</span><span>{code.split("\\n").length} LINES</span></div><div className="notice"><b>Execution disabled</b><p>This starter lets you edit and copy code. Use an isolated build service before allowing submitted code to run.</p></div></Panel>;
}
function Osint() {
  const tasks = ["Define a legitimate research question", "Use sources that are public and lawful to access", "Record source URLs and collection dates", "Minimize personal data in notes", "Verify claims with multiple sources", "Respect site terms and privacy requests"];
  const [done, setDone] = useState<string[]>([]);
  return <Panel title="Public-source research workflow" kicker="OSINT EXPLORER" className="wide"><div className="notice"><b>Research boundaries</b><p>Use this workflow for lawful public-interest research. Do not bypass access controls, target private individuals, or collect sensitive personal information.</p></div>{tasks.map(t => <label className="check-row" key={t}><input type="checkbox" checked={done.includes(t)} onChange={e => setDone(old => e.target.checked ? [...old, t] : old.filter(x => x !== t))} />{t}</label>)}<div className="progress"><span style={{ width: (done.length / tasks.length * 100) + "%" }} /></div><div className="editor-foot"><span>WORKFLOW PROGRESS</span><b>{done.length} / {tasks.length} COMPLETE</b></div></Panel>;
}
function CyberLab() {
  const labs = [["01", "Web security fundamentals", "Input validation, output encoding, CSRF awareness, and secure sessions.", "BEGINNER"], ["02", "Authentication defense", "MFA, secure password storage, and safe account recovery.", "BEGINNER"], ["03", "Threat modeling", "Assets, trust boundaries, abuse cases, and mitigations.", "INTERMEDIATE"], ["04", "Incident response", "Triage, evidence preservation, containment, and recovery.", "INTERMEDIATE"]];
  return <div className="lab-grid">{labs.map(x => <Panel title={x[1]} kicker={"LAB " + x[0]} key={x[0]}><p className="body">{x[2]}</p><div className="lab-foot">{x[3]} <b>LEARNING PATH</b></div></Panel>)}</div>;
}
function Terminal() {
  const [cmd, setCmd] = useState("");
  const [lines, setLines] = useState(["MYTHOS X SIMULATED SHELL v0.1", "This is not a real operating-system terminal. Type help for allowed commands."]);
  function run(e: FormEvent<HTMLFormElement>) { e.preventDefault(); const value = cmd.trim(); if (!value) return; const answers: Record<string, string> = { help: "Commands: help, whoami, date, sysinfo, ls, clear", whoami: "demo-user (simulated identity)", date: new Date().toUTCString(), sysinfo: "Browser simulator | execution disabled | local demo", ls: "README.md  learning-labs/  safe-missions/  examples/" }; if (value === "clear") setLines(["MYTHOS X SIMULATED SHELL v0.1"]); else setLines(old => [...old, "demo@mythos:~$ " + value, answers[value] || "Command not available. Use help to list allowed commands."]); setCmd(""); }
  return <Panel title="Terminal Simulator" kicker="SANDBOXED INTERFACE" className="wide"><div className="terminal">{lines.map((line, i) => <div key={i}>{line}</div>)}<form onSubmit={run}><b>demo@mythos:~$</b><input value={cmd} onChange={e => setCmd(e.target.value)} placeholder="type help" autoComplete="off" /><button>RUN</button></form></div><small className="muted">Only fixed browser-side responses are available. No shell, filesystem, or network command is executed.</small></Panel>;
}
function Network() {
  const rows = [["HTTPS everywhere", "Redirect HTTP traffic and use valid TLS certificates."], ["Security headers", "Review CSP, HSTS, frame protection, and content-type policy."], ["Dependency hygiene", "Patch dependencies and remove unused packages."], ["Access control", "Apply least privilege and verify authorization on the server."], ["Logging and alerts", "Record security events without storing secrets."]];
  return <Panel title="Defensive configuration checklist" kicker="NETWORK DEFENSE" className="wide"><div className="notice"><b>No live scanning is performed</b><p>This module is an educational checklist, not a network scanner or vulnerability assessment.</p></div>{rows.map(x => <div className="defense-row" key={x[0]}><b>✓</b><span><strong>{x[0]}</strong><small>{x[1]}</small></span></div>)}</Panel>;
}
function Password() {
  const [sample, setSample] = useState("");
  const score = useMemo(() => [sample.length >= 12, sample.length >= 16, /[a-z]/.test(sample) && /[A-Z]/.test(sample), /\\d/.test(sample), /[^A-Za-z0-9]/.test(sample)].filter(Boolean).length, [sample]);
  return <Panel title="Password Auditor" kicker="LOCAL BROWSER CHECK" className="wide"><div className="notice warning"><b>Privacy warning</b><p>Never enter a real password here. Use an invented sample. This simple check is educational, not a full password-strength estimator.</p></div><label className="field-label" htmlFor="sample-password">Made-up password sample</label><input id="sample-password" className="text-field" type="password" autoComplete="off" value={sample} onChange={e => setSample(e.target.value)} placeholder="Try a fictional sample…" /><div className="score-row"><div className="score-track"><span style={{ width: (score * 20) + "%" }} /></div><b>{!sample ? "WAITING FOR INPUT" : score >= 4 ? "STRONGER SAMPLE" : score >= 2 ? "COULD BE STRONGER" : "WEAK SAMPLE"}</b></div><small className="muted">Local result: {score} / 5 simple characteristics met.</small><p><button className="ghost" onClick={() => setSample("")}>CLEAR SAMPLE</button></p></Panel>;
}
function Ctf() {
  const [answer, setAnswer] = useState(""); const [checked, setChecked] = useState(false); const correct = answer.trim().toLowerCase() === "prepared statements";
  return <Panel title="CTF: The Query Gate" kicker="BEGINNER / DEFENSIVE CODING" className="wide"><div className="challenge"><small>MISSION 001</small><h2>Protect the database</h2><p>A training app joins raw user input into a SQL query string. Which defense should a developer use?</p></div><label className="field-label" htmlFor="ctf-answer">Your answer</label><input id="ctf-answer" className="text-field" value={answer} onChange={e => { setAnswer(e.target.value); setChecked(false); }} placeholder="Type your answer…" /><button className="primary" onClick={() => setChecked(true)}>CHECK ANSWER ↗</button>{checked && <div className={correct ? "success" : "notice"}>{correct ? "Correct. Prepared statements separate SQL code from supplied values." : "Not quite. Hint: bind values separately instead of concatenating them into SQL."}</div>}</Panel>;
}
function Mission() {
  return <Panel title="Operation Glass Harbor" kicker="FICTIONAL INVESTIGATION / TRAINING" className="wide"><div className="challenge"><small>CASE MX-2049 / SIMULATED</small><h2>Trace the fake signal.</h2><p>A fictional community portal reports an unexpected login alert. Review this invented evidence and choose defensive response steps.</p></div><div className="evidence"><div><small>FICTIONAL DOMAIN</small><b>harbor.example</b></div><div><small>DEMO ACCOUNT</small><b>case-user-07</b></div><div><small>EVENT</small><b>Unfamiliar sign-in notice</b></div></div><div className="notice"><b>Suggested response</b><p>Preserve relevant logs, verify the alert through the official service, revoke suspicious sessions, rotate credentials, enable MFA, and notify the service owner. Do not attempt to access any account.</p></div><div className="tags"><span>INVENTED DATA</span><span>NO LIVE TARGET</span><span>DEFENSIVE RESPONSE</span></div></Panel>;
}
export default function Home() {
  const [active, setActive] = useState<Tab>("overview"); const [mobile, setMobile] = useState(false);
  function go(id: Tab) { setActive(id); setMobile(false); }
  return <main className="shell"><aside className={"sidebar " + (mobile ? "open" : "")}><div className="brand"><div className="brand-mark"><span>◉</span><b>X</b></div><div><b>MYTHOS <i>X</i></b><small>DARK INTELLIGENCE OS</small></div></div><div className="side-label">COMMAND INTERFACE <span>v0.1</span></div><nav>{nav.map(group => <div className="nav-group" key={group.group}><div className="nav-label">{group.group}</div>{group.items.map(item => <button key={item.id} className={"nav-item " + (active === item.id ? "active" : "")} onClick={() => go(item.id)}><span>{item.icon}</span>{item.name}{item.badge && <small>{item.badge}</small>}</button>)}</div>)}</nav><div className="sidebar-bottom"><div className="privacy-card"><b>⬡</b><span><strong>Privacy-first demo</strong><small>Local UI interactions</small></span><i className="dot good" /></div><div className="operator"><b>MX</b><span><strong>Demo Operator</strong><small>LOCAL SESSION</small></span></div></div></aside><section className="main"><header className="topbar"><button className="mobile-menu" onClick={() => setMobile(x => !x)} aria-label="Toggle navigation">☰</button><div>MYTHOS X <span>/</span> <b>{active.toUpperCase()}</b></div><small><i className="dot good" /> DEMO ENVIRONMENT</small></header><div className="page-content">{active === "overview" ? <Overview go={go} /> : <><Header active={active} />{active === "ai" && <AiDesk />}{active === "code" && <CodeStudio />}{active === "osint" && <Osint />}{active === "cyber" && <CyberLab />}{active === "terminal" && <Terminal />}{active === "network" && <Network />}{active === "password" && <Password />}{active === "ctf" && <Ctf />}{active === "mission" && <Mission />}</>}<footer className="footer"><span>MYTHOS X © 2026 · STARTER EDITION</span><span>THINK / DEFEND / CREATE</span></footer></div></section></main>;
}
