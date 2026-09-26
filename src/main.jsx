import React from 'react';
import { createRoot } from 'react-dom/client';
import { AnimatePresence, motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import './styles.css';

const work = [
  { n:'01', title:'Aether Audio', type:'Brand / Digital', image:'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=1600&q=85&auto=format&fit=crop' },
  { n:'02', title:'Monument', type:'Identity / Web', image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=85&auto=format&fit=crop' },
  { n:'03', title:'Form / 01', type:'Commerce / Experience', image:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1600&q=85&auto=format&fit=crop' },
  { n:'04', title:'Noma Objects', type:'Strategy / Digital', image:'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=1600&q=85&auto=format&fit=crop' }
];

const services = ['Brand Strategy','UI / UX Design','Web Development','Motion Design','Growth Marketing','Digital Products'];

function Reveal({children, delay=0, className=''}) {
  return <motion.div className={className} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.7,ease:[.16,1,.3,1],delay}}>{children}</motion.div>
}

function App(){
  const [open,setOpen]=React.useState(false);
  const {scrollYProgress}=useScroll();
  const heroY=useTransform(scrollYProgress,[0,.25],[0,-100]);

  const go=(id)=>{setOpen(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};

  return <div className="site">
    <header className="nav">
      <button className="brand" onClick={()=>go('top')}>CREATIQ<span>®</span></button>
      <nav className="desktop-nav">
        <button onClick={()=>go('work')}>Work</button><button onClick={()=>go('services')}>Services</button><button onClick={()=>go('studio')}>Studio</button>
      </nav>
      <button className="nav-cta" onClick={()=>go('contact')}>Start a project <ArrowUpRight size={15}/></button>
      <button className="menu-btn" aria-label="Menu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
    </header>

    <AnimatePresence>{open&&<motion.div className="mobile-menu" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {['work','services','studio','contact'].map((x,i)=><motion.button key={x} initial={{y:20,opacity:0}} animate={{y:0,opacity:1}} transition={{delay:i*.05}} onClick={()=>go(x)}>{x}<ArrowUpRight size={18}/></motion.button>)}
    </motion.div>}</AnimatePresence>

    <main id="top">
      <section className="hero">
        <motion.div className="hero-inner" style={{y:heroY}}>
          <Reveal><p className="eyebrow">Independent digital studio · Lahore / Worldwide</p></Reveal>
          <h1><span>Elevating</span><span className="indent">brands through</span><span>digital design<span className="dot">.</span></span></h1>
          <div className="hero-bottom">
            <p>Strategy, design and technology for brands that refuse to blend in.</p>
            <button onClick={()=>go('work')} className="round-arrow">↓</button>
          </div>
        </motion.div>
        <div className="hero-orbit"><span></span><span></span><span></span></div>
      </section>

      <div className="marquee dark"><div>BUILT FOR ATTENTION · BUILT FOR GROWTH · BUILT FOR WHAT'S NEXT ·&nbsp;</div><div>BUILT FOR ATTENTION · BUILT FOR GROWTH · BUILT FOR WHAT'S NEXT ·&nbsp;</div></div>

      <section className="intro" id="studio">
        <Reveal><p className="eyebrow">01 — The studio</p></Reveal>
        <Reveal delay={.08}><h2>We design <em>digital experiences</em> that make ambitious brands impossible to ignore.</h2></Reveal>
        <div className="intro-meta"><span>Strategy</span><span>Design</span><span>Development</span><span>Growth</span></div>
      </section>

      <section className="services" id="services">
        <div className="section-head"><p className="eyebrow">02 — Capabilities</p><span>Six practices / one engine</span></div>
        <div className="service-list">{services.map((s,i)=><Reveal key={s} delay={i*.04}><div className="service-row"><span>0{i+1}</span><h3>{s}</h3><ArrowUpRight className="service-arrow"/><span className="service-word">CREATIQ</span></div></Reveal>)}</div>
      </section>

      <section className="work" id="work">
        <div className="section-head"><p className="eyebrow">03 — Selected work</p><span>Selected / 2024—26</span></div>
        <div className="work-grid">{work.map((item,i)=><Reveal key={item.title} delay={i*.05} className="work-card"><div className="work-image"><img src={item.image} alt="" loading="lazy"/><div className="work-overlay"><span>{item.n}</span><ArrowUpRight/></div></div><div className="work-info"><h3>{item.title}</h3><p>{item.type}</p></div></Reveal>)}</div>
      </section>

      <section className="process">
        <div className="section-head"><p className="eyebrow">04 — Process</p><span>Simple. Focused. Relentless.</span></div>
        {['Discover','Define','Create','Launch'].map((x,i)=><Reveal key={x} delay={i*.06}><div className="process-row"><span>0{i+1}</span><h3>{x}</h3><p>{['Find the signal, audience and opportunity.','Turn insight into a sharp creative direction.','Design and build every detail with intent.','Ship, learn and keep moving forward.'][i]}</p><ArrowUpRight/></div></Reveal>)}
      </section>

      <section className="statement">
        <div className="statement-line">150+ brands</div><div className="statement-line outline">18 countries</div><div className="statement-line">1 creative engine.</div>
      </section>

      <section className="contact" id="contact">
        <Reveal><p className="eyebrow">05 — Let's talk</p></Reveal>
        <Reveal delay={.08}><h2>Ready to build something <em>extraordinary?</em></h2></Reveal>
        <button className="contact-btn">Start a project <ArrowUpRight/></button>
      </section>
    </main>

    <footer><div><div className="brand">CREATIQ<span>®</span></div><p>Independent digital studio.<br/>Built for ambitious brands.</p></div><div className="footer-links"><button>Instagram</button><button>LinkedIn</button><button>Email</button></div><div className="copyright">© 2026 Creatiq Studio</div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);