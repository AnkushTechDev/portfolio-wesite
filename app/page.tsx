'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowDown, ArrowRight, ArrowUpRight, Braces, Check, ChevronLeft, ChevronRight, Code2, Copy, ExternalLink, Github, Linkedin, Instagram, Youtube, Sun, Moon, Palette, Globe2, Layers3, Mail, Menu, MessageCircle, MousePointer2, Sparkles, Terminal, Workflow, X, Zap } from 'lucide-react';
import EngineerAvatar from '../components/EngineerAvatar';

type Scene = {label:string; eyebrow:string; title:string; text:string; action:string; target:string};
const scenes:Scene[] = [
  {label:'Hello',eyebrow:'01 / INTRODUCTION',title:'Hi, I’m Alex! 👋',text:'I’m a fictional creative developer who loves playful interfaces, accessible experiences and thoughtful engineering.',action:'Explore the toolkit',target:'stack'},
  {label:'Toolkit',eyebrow:'02 / MY TOOLBOX',title:'Ideas meet engineering.',text:'React, TypeScript, interactive graphics and lightweight APIs make up this sample toolkit.',action:'See demo projects',target:'projects'},
  {label:'Demo work',eyebrow:'03 / THE LAB',title:'Experiments worth exploring.',text:'These fictional sample projects show how storytelling, technology and design can come together.',action:'Explore services',target:'services'},
  {label:'Say hello',eyebrow:'04 / CONNECT',title:'Let’s create something.',text:'This is a demonstration portfolio. All names, projects, links and contact details are examples.',action:'View contact options',target:'contact'},
];

const categories = [
  {name:'Backend & APIs', icon:'{ }', skills:['Node.js','TypeScript','NestJS','Express.js','GraphQL','REST APIs','Microservices']},
  {name:'Frontend & Mobile', icon:'</>', skills:['React','Next.js','Angular','React Native','JavaScript','Responsive UI']},
  {name:'Data & Cloud', icon:'☁', skills:['PostgreSQL','MongoDB','MySQL','Redis','Kafka','AWS','Google Cloud','Docker']},
  {name:'AI & Automation', icon:'✳', skills:['Prototyping','UI Assistants','Creative Tools','Automations','Accessibility','Interactive Demos']},
];
const projects = [
  {number:'01',name:'Nebula Notes',kind:'Concept · Productivity',summary:'A fictional collaborative note-taking app for turning scattered ideas into connected knowledge.',tags:['Next.js','TypeScript','UX'],tone:'violet',glyph:'✦',details:'DEMO PROJECT — A fictional creative workspace featuring linked notes, real-time collaboration concepts, and a flexible canvas.'},
  {number:'02',name:'Orbit Commerce',kind:'Concept · E-commerce',summary:'An imaginary storefront with smooth shopping flows and playful product discovery.',tags:['React','Motion','API'],tone:'cyan',glyph:'◎',details:'DEMO PROJECT — An example retail concept featuring motion-rich navigation, curated collections, and accessible checkout patterns.'},
  {number:'03',name:'Pixel Garden',kind:'Concept · Creative coding',summary:'A pretend interactive learning playground where code grows into colorful visual experiments.',tags:['Canvas','CSS','Creative coding'],tone:'orange',glyph:'❋',details:'DEMO PROJECT — A fictional learning platform exploring generative art, visual feedback and interactive lessons.'},
];

const services = [
  {icon:Code2, title:'Full-stack product builds',description:'Modern web apps, SaaS MVPs and polished product experiences, from interface to database.'},
  {icon:Layers3,title:'Backend & platform engineering',description:'Scalable APIs, architecture, integrations, data systems and performance-minded backend delivery.'},
  {icon:Sparkles,title:'AI-powered applications',description:'LLM integrations, RAG assistants, automation workflows and intelligent product features.'},
  {icon:Workflow,title:'Technical consulting',description:'Architecture guidance, codebase modernization, engineering leadership and delivery support.'},
];

function scrollToId(id:string){document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});}
function Reveal({children,delay=0,className=''}:{children:React.ReactNode,delay?:number,className?:string}){return <motion.div className={className} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.6,delay}}>{children}</motion.div>}

export default function Page(){
  const [scene,setScene]=useState(0);
  const [cat,setCat]=useState(0);
  const [selectedProject,setSelectedProject]=useState<number|null>(null);
  const [menuOpen,setMenuOpen]=useState(false);
  const [copied,setCopied]=useState(false);
  const [terminalText,setTerminalText]=useState('');
  const [theme,setTheme]=useState<'dark'|'light'>('dark');
  const [funMode,setFunMode]=useState(false);
  const email='hello@example.com';
  useEffect(()=>{const saved=localStorage.getItem('demo-theme');const next=saved==='light'||saved==='dark'?saved:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');setTheme(next);document.documentElement.dataset.theme=next;},[]);
  function toggleTheme(){const next=theme==='dark'?'light':'dark';setTheme(next);document.documentElement.dataset.theme=next;localStorage.setItem('demo-theme',next);}

  useEffect(()=>{const phrase='npm run build-something-amazing';let k=0;const t=setInterval(()=>{k=(k+1)%(phrase.length+14);setTerminalText(phrase.slice(0,Math.min(k,phrase.length)));},115);return()=>clearInterval(t)},[]);
  async function copyEmail(){try{await navigator.clipboard.writeText(email);setCopied(true);setTimeout(()=>setCopied(false),2000);}catch{window.location.href=`mailto:${email}`;}}
  function navigate(id:string){setMenuOpen(false);scrollToId(id)}
  const current=scenes[scene];
  return <main className={funMode?'fun-mode':''}>
    <div className="noise" aria-hidden="true"/>
    <header className="site-header">
      <button className="brand" onClick={()=>navigate('home')} aria-label="Back to home"><span className="brand-mark">A<span>.</span></span><span>alex<span className="muted">.demo</span></span></button>
      <nav className={menuOpen?'nav-links open':'nav-links'} aria-label="Main navigation">
        {[['About','home'],['Skills','stack'],['Projects','projects'],['Services','services'],['Playground','playground']].map(([label,id])=><button key={id} onClick={()=>navigate(id)}>{label}</button>)}
        <button className="nav-contact" onClick={()=>navigate('contact')}>Let’s talk <ArrowUpRight size={15}/></button>
      </nav>
      <div className="header-actions"><button className="theme-toggle" onClick={toggleTheme} aria-label={theme==='dark'?'Switch to light mode':'Switch to dark mode'} title="Toggle color theme">{theme==='dark'?<Sun size={19}/>:<Moon size={19}/>}</button>
      <button className="mobile-menu" aria-label={menuOpen?'Close menu':'Open menu'} aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button></div>
    </header>

    <section className="hero section-shell" id="home">
      <div className="hero-light hero-light-a"/><div className="hero-light hero-light-b"/>
      <div className="hero-copy">
        <Reveal><div className="availability"><span className="pulse-dot"/> INTERACTIVE PORTFOLIO TEMPLATE <span className="availability-arrow">↗</span></div></Reveal>
        <Reveal delay={.06}><p className="eyebrow"><span className="slash">//</span> HELLO, WORLD. I'M ALEX</p></Reveal>
        <Reveal delay={.1}><h1>Crafting <span className="gradient-text">digital</span><br/>experiences<br/>that <span className="italic-outline">matter.</span></h1></Reveal>
        <Reveal delay={.16}><p className="hero-desc">Creative Developer <span className="dot-sep">✦</span> Interface Explorer <span className="dot-sep">✦</span> Digital Storyteller.<br/>A fictional developer profile made to demonstrate an interactive portfolio.</p></Reveal>
        <Reveal delay={.22}><div className="hero-actions"><button className="primary-button" onClick={()=>navigate('projects')}>Explore demo work <ArrowUpRight size={19}/></button><button className="outline-button" onClick={()=>navigate('contact')}>Let's collaborate <ArrowRight size={17}/></button></div></Reveal>
        <Reveal delay={.28}><div className="mini-stats"><span><b>100%</b><small>Demo content</small></span><i/><span><b>Playful</b><small>Motion & interaction</small></span><i/><span><b>Responsive</b><small>All screen sizes</small></span></div></Reveal>
      </div>
      <div className="hero-stage">
        <motion.div className="floating-code code-top" animate={{y:[0,-10,0],rotate:[-5,-3,-5]}} transition={{duration:5,repeat:Infinity}}><span className="code-orange">const</span> future = <span className="code-green">build()</span>;</motion.div>
        <motion.div className="floating-code code-right" animate={{y:[0,11,0],rotate:[5,2,5]}} transition={{duration:4.5,repeat:Infinity}}><span className="code-purple">✳</span> AI inside</motion.div>
        <EngineerAvatar talking={true}/>
        <motion.div className="floating-code code-bottom" animate={{y:[0,-7,0]}} transition={{duration:3.8,repeat:Infinity}}>🚀 Shipping great ideas</motion.div>
        <div className="stage-base"/>
      </div>
      <button className="scroll-cue" onClick={()=>navigate('guide')}>SCROLL TO EXPLORE <ArrowDown size={15}/></button>
    </section>

    <section className="guide-section section-shell" id="guide">
      <Reveal><div className="section-heading center"><span className="section-kicker">YOUR INTERACTIVE TOUR GUIDE</span><h2>Meet your <span className="gradient-text">developer buddy.</span></h2><p>Meet Alex, your fictional guide. Step through this interactive demo.</p></div></Reveal>
      <Reveal className="guide-layout"><div className="guide-avatar"><div className="guide-halo"/><EngineerAvatar compact talking={true}/><span className="guide-status"><span className="pulse-dot"/> ONLINE & BUILDING</span></div>
        <div className="guide-content">
          <div className="tour-progress">{scenes.map((s,i)=><button key={i} aria-label={`Show ${s.label}`} className={scene===i?'tour-dot active':'tour-dot'} onClick={()=>setScene(i)}><span>{String(i+1).padStart(2,'0')}</span></button>)}</div>
          <AnimatePresence mode="wait"><motion.div key={scene} initial={{opacity:0,x:22}} animate={{opacity:1,x:0}} exit={{opacity:0,x:-22}} transition={{duration:.25}} className="tour-body"><p className="eyebrow"><span className="slash">//</span> {current.eyebrow}</p><h3>{current.title}</h3><p>{current.text}</p></motion.div></AnimatePresence>
          <div className="tour-buttons"><button className="primary-button" onClick={()=>navigate(current.target)}>{current.action}<ArrowUpRight size={18}/></button><div className="tour-arrows"><button aria-label="Previous tour step" disabled={scene===0} onClick={()=>setScene(s=>s-1)}><ChevronLeft size={20}/></button><button aria-label="Next tour step" disabled={scene===scenes.length-1} onClick={()=>setScene(s=>s+1)}><ChevronRight size={20}/></button></div></div>
        </div>
      </Reveal>
    </section>

    <section className="stack-section section-shell" id="stack"><Reveal><div className="section-heading"><span className="section-kicker">01 / THE TOOLBOX</span><h2>The toolkit. <span className="gradient-text">The possibilities.</span></h2><p>Choose a category to discover an example developer toolkit.</p></div></Reveal>
      <Reveal className="stack-layout"><div className="stack-tabs" role="tablist" aria-label="Technology categories">{categories.map((c,i)=><button key={c.name} role="tab" aria-selected={cat===i} className={cat===i?'stack-tab active':'stack-tab'} onClick={()=>setCat(i)}><span className="tab-icon">{c.icon}</span>{c.name}<ArrowUpRight size={18}/></button>)}</div><div className="stack-panel" role="tabpanel"><AnimatePresence mode="wait"><motion.div key={cat} initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-12}} transition={{duration:.2}}><div className="stack-panel-top"><Braces size={25}/><span>TECHNOLOGIES / {String(cat+1).padStart(2,'0')}</span></div><h3>{categories[cat].name}</h3><div className="skill-pills">{categories[cat].skills.map((skill,i)=><motion.span key={skill} initial={{opacity:0,scale:.9}} animate={{opacity:1,scale:1}} transition={{delay:i*.045}}>{skill}</motion.span>)}</div><div className="code-snippet"><span className="code-comment">// Great software is built with the right tools.</span><br/><span className="code-purple">const</span> mindset = <span className="code-green">'keep learning'</span>;</div></motion.div></AnimatePresence></div></Reveal>
    </section>

    <section className="projects-section section-shell" id="projects"><Reveal><div className="section-heading split"><div><span className="section-kicker">02 / SELECTED WORK</span><h2>Fictional <span className="gradient-text">project concepts.</span></h2></div><p>Three imaginary projects designed just for this template.</p></div></Reveal>
      <div className="project-grid">{projects.map((p,i)=><Reveal delay={i*.09} key={p.name}><button className={`project-card ${p.tone}`} onClick={()=>setSelectedProject(i)} aria-label={`View details of ${p.name}`}><div className="project-art"><span className="project-symbol">{p.glyph}</span><span className="project-art-code">{'<'}build /{'>'}</span><span className="project-art-orbit orbit-one"/><span className="project-art-orbit orbit-two"/></div><div className="project-info"><span className="project-kind">{p.number} / {p.kind}</span><div className="project-title-row"><h3>{p.name}</h3><span className="project-arrow"><ArrowUpRight size={19}/></span></div><p>{p.summary}</p><div className="tag-row">{p.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></button></Reveal>)}</div>
      <p className="project-disclaimer">All projects are fictional demo concepts — no real clients, credentials or employment history.</p>
    </section>

    <section className="services-section section-shell" id="services"><Reveal><div className="section-heading center"><span className="section-kicker">03 / HOW I CAN HELP</span><h2>Let's make something <span className="gradient-text">remarkable.</span></h2><p>Flexible ways to work together, tailored to the product and the team.</p></div></Reveal><div className="service-grid">{services.map((s,i)=>{const Icon=s.icon;return <Reveal delay={i*.08} key={s.title}><div className="service-card"><span className="service-icon"><Icon size={25}/></span><span className="service-number">0{i+1}</span><h3>{s.title}</h3><p>{s.description}</p><button onClick={()=>navigate('contact')}>Discuss a project <ArrowUpRight size={16}/></button></div></Reveal>})}</div></section>

    <section className="playground-section section-shell" id="playground"><Reveal><div className="section-heading"><span className="section-kicker">04 / INTERACTIVE PLAYGROUND</span><h2>Flip the <span className="gradient-text">fun switch.</span></h2><p>Try some of the page’s interactive features. Your choices update immediately.</p></div></Reveal>
      <div className="playground-grid"><div className="play-card"><Palette size={27}/><h3>Change the atmosphere</h3><p>Switch between dark and light appearances. Your preference is saved locally.</p><button className="outline-button" onClick={toggleTheme}>{theme==='dark'?<Sun size={17}/>:<Moon size={17}/>} {theme==='dark'?'Try light mode':'Try dark mode'}</button></div>
      <div className="play-card"><Sparkles size={27}/><h3>A little extra magic</h3><p>Turn on a playful floating background effect.</p><button className="outline-button" onClick={()=>setFunMode(v=>!v)}>{funMode?'Turn off sparkle mode':'Turn on sparkle mode'} <Sparkles size={17}/></button></div>
      <div className="play-card"><Code2 size={27}/><h3>Jump into the lab</h3><p>Open an imaginary project and explore its concept details.</p><button className="outline-button" onClick={()=>setSelectedProject(0)}>Explore a demo <ArrowUpRight size={17}/></button></div></div>
    </section>

    <section className="contact-section section-shell" id="contact"><Reveal><div className="contact-box"><div className="contact-glow"/><div className="contact-inner"><div className="contact-content"><span className="section-kicker">05 / START A CONVERSATION</span><h2>Got a challenge?<br/><span className="gradient-text">I'm all ears.</span></h2><p>This contact area is a demonstration. Swap the sample email and social links for your own before publishing.</p><div className="contact-actions"><a href={`mailto:${email}?subject=Let's%20work%20together`} className="primary-button">Open sample email <Mail size={18}/></a><button className="outline-button" onClick={copyEmail}>{copied?'Copied!':'Copy sample email'} {copied?<Check size={17}/>:<Copy size={17}/>}</button></div><span className="contact-email">{email} · sample address only</span>
                <div className="social-links" aria-label="Demo social media links"><a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub homepage (demo)"><Github size={19}/></a><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn homepage (demo)"><Linkedin size={19}/></a><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram homepage (demo)"><Instagram size={19}/></a><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube homepage (demo)"><Youtube size={19}/></a></div></div><div className="contact-terminal"><div className="terminal-bar"><span/><span/><span/><strong>terminal — alex.demo</strong></div><div className="terminal-screen"><p><span>➜</span> ~ <b>{terminalText}</b><i className="cursor"/></p><p className="term-comment">// open to new adventures</p><p className="term-success">✓ Demo mode is active</p><p className="term-success">✓ Built for creativity</p><p className="term-comment">// your next great idea starts here</p><span className="terminal-spark">✦</span></div></div></div></div></Reveal></section>

    <footer className="footer section-shell"><button onClick={()=>navigate('home')} className="footer-logo">A<span>.</span></button><p>Fictional developer portfolio demo · © {new Date().getFullYear()}.</p><button onClick={()=>navigate('home')}>Back to top ↑</button></footer>

    <AnimatePresence>{selectedProject!==null&&<motion.div className="modal-backdrop" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setSelectedProject(null)} role="presentation"><motion.section role="dialog" aria-modal="true" aria-label={`${projects[selectedProject].name} project details`} className="project-modal" initial={{scale:.93,y:24}} animate={{scale:1,y:0}} exit={{scale:.93,y:24}} onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setSelectedProject(null)} aria-label="Close project details"><X/></button><span className="section-kicker">PROJECT / {projects[selectedProject].number}</span><h2>{projects[selectedProject].name}</h2><p>{projects[selectedProject].details}</p><div className="tag-row">{projects[selectedProject].tags.map(t=><span key={t}>{t}</span>)}</div><button className="primary-button" onClick={()=>{setSelectedProject(null);setTimeout(()=>navigate('contact'),100)}}>Discuss similar work <ArrowUpRight size={18}/></button></motion.section></motion.div>}</AnimatePresence>
  </main>
}
