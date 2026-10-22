import { useCallback, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowDownRight, ArrowUpRight, Code2, Bot, Braces, Cloud, Layers3,
  Github, Mail, MessageCircle, Menu, X, Sparkles, Terminal, Cpu,
  Globe2, Zap, ExternalLink, ChevronRight
} from 'lucide-react';

type Project = { name: string; category: string; description: string; tags: string[]; link: string; number: string };

const projects: Project[] = [
  { number: '01', name: 'VES ULTRA MINI BOT', category: 'WHATSAPP AUTOMATION', description: 'A feature-rich WhatsApp bot built to make everyday chat workflows smarter, faster and more expressive.', tags: ['Node.js', 'Baileys', 'Automation'], link: 'https://github.com/isira-induwara' },
  { number: '02', name: 'AI PROMPT HUB WEB', category: 'WEB EXPERIENCE', description: 'A focused web experience for discovering, organizing and using AI prompts with less friction.', tags: ['JavaScript', 'Web UI', 'AI'], link: 'https://github.com/isira-induwara' },
  { number: '03', name: 'NEXT EXPERIMENT', category: 'IN PROGRESS', description: 'A space for the next idea — turning small experiments into useful digital products.', tags: ['APIs', 'Creative code', 'Product'], link: 'https://github.com/isira-induwara' },
];

const services = [
  { icon: Code2, n: '01', title: 'Web Development', body: 'Responsive, purposeful websites with a polished interface and a solid foundation.' },
  { icon: Bot, n: '02', title: 'WhatsApp Bots', body: 'Useful automation, commands and integrations for real chat workflows.' },
  { icon: Braces, n: '03', title: 'JavaScript & Node.js', body: 'Backend services, reliable logic and maintainable JavaScript applications.' },
  { icon: Cloud, n: '04', title: 'API Development', body: 'Practical API integrations and endpoints designed around your project.' },
  { icon: Layers3, n: '05', title: 'Hosting & Deployment', body: 'Deployment setup, environment configuration and launch support.' },
  { icon: Cpu, n: '06', title: 'Creative Projects', body: 'Prototypes and custom digital ideas shaped into something tangible.' },
];

function Intro({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { onFinish(); return; }
    const started = Date.now();
    const id = window.setInterval(() => {
      const next = Math.min(100, ((Date.now() - started) / 2300) * 100);
      setProgress(next);
      if (next >= 100) { window.clearInterval(id); onFinish(); }
    }, 35);
    return () => window.clearInterval(id);
  }, [onFinish]);
  return (
    <motion.div className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0, scale: 1.025 }} transition={{ duration: .65 }}>
      <div className="intro-grid" />
      <div className="intro-orb"><div className="orb-ring ring-a" /><div className="orb-ring ring-b" /><div className="orb-core" /></div>
      <div className="intro-copy">
        <span className="eyebrow"><span className="status-dot" /> INDEPENDENT DEVELOPER / SRI LANKA</span>
        <h1>VES <span>INVASION</span></h1>
        <p>Turning Ideas Into Digital Reality</p>
      </div>
      <div className="intro-bottom"><span>INITIALIZING EXPERIENCE</span><div className="progress"><i style={{ width: `${progress}%` }} /></div><span>{Math.round(progress).toString().padStart(3, '0')}%</span></div>
      <button className="intro-skip" onClick={onFinish}>SKIP INTRO <ArrowUpRight size={14} /></button>
    </motion.div>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem('ves-intro-seen'));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactSent, setContactSent] = useState(false);

  const finishIntro = useCallback(() => {
    sessionStorage.setItem('ves-intro-seen', '1');
    setShowIntro(false);
  }, []);

  const closeMenu = () => setMobileOpen(false);
  const sendContact = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    const text = `Hello Isira! I contacted you through the VES INVASION website.\n\nName: ${name}\nEmail: ${email}\n\nProject details:\n${message}`;
    const whatsappUrl = `https://wa.me/94740544995?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setContactSent(true);
  };

  return (
    <>
      <AnimatePresence>{showIntro && <Intro onFinish={finishIntro} />}</AnimatePresence>
      <div className="site-shell">
        <div className="noise" aria-hidden="true" />
        <header className="topbar">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="VES INVASION home"><span className="brand-mark">V<span>/</span></span><span className="brand-text">VES <b>INVASION</b><small>DEVELOPER PORTFOLIO</small></span></a>
          <nav className={mobileOpen ? 'nav nav-open' : 'nav'} aria-label="Main navigation">
            {['About', 'Services', 'Projects', 'Journal', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}<span>↗</span></a>)}
          </nav>
          <a className="top-cta" href="#contact">LET'S TALK <ArrowUpRight size={15} /></a>
          <button className="menu-toggle" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X /> : <Menu />}</button>
        </header>

        <main>
          <section className="hero section-wrap" id="home">
            <div className="hero-copy">
              <div className="availability"><span className="status-dot" /> AVAILABLE FOR SELECT PROJECTS <span className="availability-line" /></div>
              <p className="hero-kicker">FULL-STACK DEVELOPER <span>/</span> CREATIVE BUILDER</p>
              <h1>Ideas into<br /><em>digital reality.</em></h1>
              <p className="hero-description">I'm <strong>Isira Induwara</strong> — building web experiences, WhatsApp automation and digital tools with a focus on thoughtful design and practical engineering.</p>
              <div className="hero-actions"><a className="button button-primary" href="#projects">EXPLORE MY WORK <ArrowDownRight size={17} /></a><a className="button button-ghost" href="https://github.com/isira-induwara" target="_blank" rel="noreferrer"><Github size={16} /> GITHUB <ArrowUpRight size={14} /></a></div>
              <div className="hero-meta"><span><b>02</b> YEARS BUILDING</span><span><b>06</b> CORE SERVICES</span><span><b>LK</b> SRI LANKA</span></div>
            </div>
            <div className="hero-visual" aria-label="Abstract blue holographic orb illustration">
              <div className="visual-label label-top"><span>FIG. 001</span><span>IDEA ENGINE</span></div>
              <div className="orb-stage">
                <div className="orbit orbit-1" /><div className="orbit orbit-2" /><div className="orbit orbit-3" />
                <div className="orb-wire" /><div className="orb-shine" /><div className="orb-cross cross-a" /><div className="orb-cross cross-b" />
                <div className="orb-coordinate coord-a">04°N / 80°E</div><div className="orb-coordinate coord-b">VES.SYS_01</div>
              </div>
              <div className="visual-label label-bottom"><span>CREATIVE SYSTEMS</span><span className="live-chip"><i /> LIVE RENDER</span></div>
              <div className="visual-side-note">DESIGN<br />ENGINEER<br />ITERATE</div>
            </div>
            <div className="hero-bottomline"><span>SCROLL TO EXPLORE</span><div /><span>01 — 06</span></div>
          </section>

          <section className="ticker" aria-label="Skills ticker"><div className="ticker-track">{Array.from({length: 2}).map((_, i) => <span key={i}>JAVASCRIPT <b>✳</b> NODE.JS <b>✳</b> WEB DEVELOPMENT <b>✳</b> WHATSAPP AUTOMATION <b>✳</b> API INTEGRATION <b>✳</b> CREATIVE CODE <b>✳</b></span>)}</div></section>

          <section className="section-wrap about-section" id="about">
            <div className="section-heading"><span className="section-index">01 / ABOUT</span><span className="heading-rule" /><span className="section-note">A LITTLE CONTEXT</span></div>
            <div className="about-grid">
              <div><p className="display-heading">Curiosity is the<br /><em>starting point.</em></p></div>
              <div className="about-content"><p className="large-copy">I’m a developer from <strong>Kurunegala District, Sri Lanka</strong>, interested in turning ideas into useful digital experiences — from web interfaces to automation and APIs.</p><p className="muted-copy">I care about clean implementation, responsive design and the small details that make a product feel considered. I’m always learning, building and exploring what’s possible with code.</p><div className="about-stats"><div><b>02<span>+</span></b><small>YEARS EXPERIENCE</small></div><div><b>06</b><small>SERVICE AREAS</small></div><div><b>∞</b><small>IDEAS TO EXPLORE</small></div></div></div>
            </div>
          </section>

          <section className="section-wrap services-section" id="services">
            <div className="section-heading"><span className="section-index">02 / SERVICES</span><span className="heading-rule" /><span className="section-note">WHAT I CAN BUILD</span></div>
            <div className="section-title-row"><h2>Useful by design.<br /><em>Built to work.</em></h2><p>From the first sketch to deployment, I help shape digital ideas into clear, functional experiences.</p></div>
            <div className="services-grid">{services.map(({icon: Icon, n, title, body}) => <article className="service-card" key={title}><div className="service-top"><span>{n}</span><Icon size={21} strokeWidth={1.5} /></div><h3>{title}</h3><p>{body}</p><ArrowUpRight className="service-arrow" size={17} /></article>)}</div>
          </section>

          <section className="section-wrap projects-section" id="projects">
            <div className="section-heading"><span className="section-index">03 / SELECTED WORK</span><span className="heading-rule" /><span className="section-note">BUILD / TEST / REFINE</span></div>
            <div className="section-title-row"><h2>Things made<br /><em>with intent.</em></h2><a className="text-link" href="https://github.com/isira-induwara" target="_blank" rel="noreferrer">ALL REPOSITORIES <ArrowUpRight size={15} /></a></div>
            <div className="projects-list">{projects.map(project => <article className="project-row" key={project.number}><div className="project-number">{project.number}</div><div className="project-art"><div className="project-art-grid" /><div className="project-art-orb"><span /></div><span className="art-label">{project.category}</span></div><div className="project-info"><span className="project-category">{project.category}</span><h3>{project.name}</h3><p>{project.description}</p><div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><a className="project-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}><ArrowUpRight /></a></article>)}</div>
          </section>

          <section className="journal-section" id="journal"><div className="section-wrap"><div className="section-heading"><span className="section-index">04 / DEV JOURNAL</span><span className="heading-rule" /><span className="section-note">NOTES FROM THE PROCESS</span></div><div className="journal-card"><div className="journal-icon"><Terminal size={24} /></div><div><span className="project-category">FIELD NOTES / 001</span><h2>Building in public.<br /><em>Learning by shipping.</em></h2><p>The journal is ready for future build notes, experiments, lessons learned and behind-the-scenes project updates.</p></div><span className="journal-status"><i /> CONTENT MODULE PLANNED</span></div></div></section>

          <section className="section-wrap contact-section" id="contact">
            <div className="section-heading"><span className="section-index">05 / CONTACT</span><span className="heading-rule" /><span className="section-note">HAVE A GOOD IDEA?</span></div>
            <div className="contact-grid"><div><p className="hero-kicker">LET'S MAKE SOMETHING USEFUL</p><h2>Have a project<br />in <em>mind?</em></h2><p className="contact-description">Tell me what you're thinking. A clear idea, a rough sketch or a technical challenge — let's start a conversation.</p><div className="contact-links"><a href="mailto:vesinvaision@gmail.com"><Mail size={17} /> vesinvaision@gmail.com <ArrowUpRight size={14} /></a><a href="https://wa.me/94740544995" target="_blank" rel="noreferrer"><MessageCircle size={17} /> WhatsApp <ArrowUpRight size={14} /></a><a href="https://github.com/isira-induwara" target="_blank" rel="noreferrer"><Github size={17} /> GitHub <ArrowUpRight size={14} /></a></div></div>
              <form className="contact-form" onSubmit={sendContact}><div className="form-top"><span>PROJECT INQUIRY</span><span>FORM_001</span></div><label>Your name<input name="name" placeholder="How should I call you?" required maxLength={80} /></label><label>Email address<input name="email" type="email" placeholder="you@example.com" required maxLength={254} /></label><label>Tell me about it<textarea name="message" placeholder="A few details about your idea..." required rows={4} maxLength={4000} /></label><button className="button button-primary form-submit" type="submit">CONTINUE TO WHATSAPP <ArrowUpRight size={16} /></button>{contactSent && <p className="form-success">WhatsApp opened with your message ready. Press Send in WhatsApp to deliver it.</p>}<p className="form-footnote">This form opens WhatsApp with your details filled in. Review the message and press Send in WhatsApp. Never include passwords or private credentials.</p></form>
            </div>
          </section>
          <section className="closing"><div className="section-wrap closing-inner"><Sparkles size={18} /><p>THE NEXT IDEA STARTS WITH A QUESTION.</p><a href="#home">BACK TO TOP <ArrowUpRight size={14} /></a></div></section>
        </main>
        <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">V<span>/</span></span><span className="brand-text">VES <b>INVASION</b><small>TURNING IDEAS INTO DIGITAL REALITY</small></span></a><span>© {new Date().getFullYear()} ISIRA INDUWARA</span><span className="footer-status"><i /> STATIC SITE / NETLIFY READY</span></footer>
      </div>
    </>
  );
}

export default App;
