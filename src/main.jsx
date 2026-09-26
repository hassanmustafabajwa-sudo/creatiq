import React,{useState}from"react";import{createRoot}from"react-dom/client";import{motion,useScroll,useTransform}from"framer-motion";import{ArrowUpRight,Plus,Minus,Menu,X}from"lucide-react";import"./styles.css";

const projects=[
{n:"01",name:"NOVA",type:"Brand + Digital",year:"2026",desc:"A sharp digital identity for a next-generation technology company.",img:"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=85"},
{n:"02",name:"FORME",type:"Website + 3D",year:"2026",desc:"A tactile commerce experience built around product, motion and space.",img:"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=85"},
{n:"03",name:"ATLAS",type:"Brand + Campaign",year:"2025",desc:"A visual system that gives a modern lifestyle brand a distinct voice.",img:"https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=85"}];

const services=["Brand Strategy","Visual Identity","Social & Content","Web Design","Development","Motion & 3D"];
const faqs=[
["What does a typical project look like?","We start with discovery and direction, then move through identity, design and build. Every project is shaped around the problem rather than a fixed template."],
["How long does a project take?","Most focused launches take 3–6 weeks. Larger identity and digital systems are scoped around the depth of work required."],
["Do you work with existing teams?","Yes. We can lead the whole experience or plug into an existing marketing, product or development team."],
["Can you handle strategy and execution?","Yes. Strategy, creative direction, design, development and launch can live under one roof."]
];

function Reveal({children,className=""}){return <motion.div className={className} initial={{opacity:0,y:45}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.18}} transition={{duration:.8,ease:[.16,1,.3,1]}}>{children}</motion.div>}
function Marquee({children,reverse=false}){return <div className="marquee"><motion.div animate={{x:reverse?["-50%","0%"]:["0%","-50%"]}} transition={{duration:24,repeat:Infinity,ease:"linear"}}>{children}{children}</motion.div></div>}

function App(){
 const [open,setOpen]=useState(null),[menu,setMenu]=useState(false);
 const {scrollYProgress}=useScroll();const scale=useTransform(scrollYProgress,[0,1],[0,1]);
 return <div className="site">
  <motion.div className="progress" style={{scaleX:scale}}/>
  <header className="nav"><a className="logo" href="#top">CREATIQ<span>®</span></a><div className="nav-center"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#faq">FAQ</a></div><a className="nav-cta" href="#contact">Start a project <ArrowUpRight size={15}/></a><button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  {menu&&<motion.div className="mobile-menu" initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}><a href="#work" onClick={()=>setMenu(false)}>Work</a><a href="#services" onClick={()=>setMenu(false)}>Services</a><a href="#about" onClick={()=>setMenu(false)}>About</a><a href="#faq" onClick={()=>setMenu(false)}>FAQ</a><a href="#contact" onClick={()=>setMenu(false)}>Start a project ↗</a></motion.div>}
  <main id="top">
   <section className="hero"><div className="hero-meta"><span>Independent creative studio</span><span>Open for selected projects</span></div><div className="hero-title"><motion.h1 initial={{y:120,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:1,ease:[.16,1,.3,1]}}>CREATIVE<br/><i>FORWARD</i><br/>STUDIO.</motion.h1></div><div className="hero-bottom"><p>We build brands, digital experiences and visual worlds for companies that refuse to look ordinary.</p><a href="#work" className="circle-link">Explore work <ArrowUpRight/></a></div><div className="hero-orb"><motion.div animate={{rotate:360}} transition={{duration:28,repeat:Infinity,ease:"linear"}}/><span>CREATIVE / DIGITAL / MOTION / STRATEGY / </span></div></section>

   <section className="manifesto"><div className="eyebrow">01 / Manifesto</div><div className="manifesto-copy"><Reveal><p>NO<br/><span>ORDINARY</span><br/>WORK.</p></Reveal></div><div className="manifesto-note">Distinct ideas. Precise design.<br/>Digital experiences with a pulse.</div></section>

   <section id="work" className="work"><div className="section-head"><div><span className="eyebrow">02 / Selected work</span><h2>THE<br/><em>WORK.</em></h2></div><span className="count">(03)</span></div><div className="projects">{projects.map((p,i)=><Reveal key={p.name}><article className="project"><div className="project-img"><motion.img whileHover={{scale:1.045}} transition={{duration:.7}} src={p.img} alt={p.name}/><div className="project-overlay"><span>{p.type}</span><ArrowUpRight/></div></div><div className="project-info"><div><span>{p.n}</span><h3>{p.name}</h3></div><div className="project-details"><span>{p.desc}</span><span>{p.year}</span></div></div></article></Reveal>)}</div><a className="outline-btn" href="#contact">View all work <ArrowUpRight/></a></section>

   <section id="services" className="services"><div className="eyebrow">03 / What we do</div><div className="service-intro"><h2>WE MAKE<br/><i>THINGS MOVE.</i></h2><p>From first thought to final pixel, we create identities and experiences designed to make brands impossible to ignore.</p></div><div className="service-list">{services.map((s,i)=><motion.div className="service-row" key={s} whileHover={{paddingLeft:24}}><span>0{i+1}</span><h3>{s}</h3><ArrowUpRight/></motion.div>)}</div></section>

   <Marquee><span>IDEAS THAT MOVE.</span><span>BRANDS WITH ENERGY.</span><span>DIGITAL WITH INTENT.</span></Marquee>

   <section id="about" className="about"><div className="eyebrow">04 / Why us</div><div className="about-grid"><h2>LESS<br/><i>NOISE.</i><br/>MORE<br/><i>IMPACT.</i></h2><div><p className="lead">We combine strategy, design and technology to turn ambitious ideas into clear, memorable experiences.</p><p>Small senior team. Direct collaboration. No layers between the idea and the people making it. Every detail gets considered, challenged and refined.</p><div className="stats"><div><b>40+</b><span>Projects shipped</span></div><div><b>12</b><span>Markets reached</span></div><div><b>07</b><span>Disciplines in-house</span></div></div></div></div></section>

   <section className="testimonial"><div className="eyebrow">05 / Client words</div><Reveal><blockquote>“They didn't just make it look good. They found the idea underneath the business and gave it a visual language people could actually feel.”</blockquote><div className="quote-person"><div className="avatar">A</div><span>Alex Morgan<br/><small>Founder, Northstar</small></span></div></Reveal></section>

   <section className="team"><div className="eyebrow">06 / The studio</div><div className="team-title"><h2>THE<br/><i>PEOPLE.</i></h2><p>A compact creative team built for ambitious work.</p></div><div className="team-grid">{["Creative Direction","Brand Design","Digital Design","Development"].map((x,i)=><div className="person" key={x}><div className="person-image"><img src={["https://images.unsplash.com/photo-1500648767791-00dcc994a43e","https://images.unsplash.com/photo-1494790108377-be9c29b29330","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d","https://images.unsplash.com/photo-1531123897727-8f129e1688ce"][i]+"?auto=format&fit=crop&w=900&q=85"} /></div><div><b>{["Creative Director","Brand Designer","Digital Designer","Developer"][i]}</b><span>{x}</span></div></div>)}</div></section>

   <section className="pricing"><div className="eyebrow">07 / Engagement</div><div className="pricing-head"><h2>BUILT<br/><i>AROUND YOU.</i></h2><p>No fixed formula. Pick the level of collaboration your project needs.</p></div><div className="plans"><div><span>01 / FOCUS</span><h3>Launch</h3><p>A concentrated brand or digital launch for teams that need momentum.</p><a href="#contact">Let's talk ↗</a></div><div className="featured"><span>02 / PARTNER</span><h3>Growth</h3><p>An ongoing creative partner across brand, content and digital experiences.</p><a href="#contact">Let's talk ↗</a></div><div><span>03 / BESPOKE</span><h3>Custom</h3><p>A deeper creative engagement built around a complex challenge.</p><a href="#contact">Let's talk ↗</a></div></div></section>

   <section id="faq" className="faq"><div className="eyebrow">08 / FAQ</div><div className="faq-grid"><h2>COMMON<br/><i>QUESTIONS.</i></h2><div>{faqs.map(([q,a],i)=><div className="faq-item" key={q} onClick={()=>setOpen(open===i?null:i)}><div><span>0{i+1}</span><h3>{q}</h3></div><button>{open===i?<Minus/>:<Plus/>}</button>{open===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}}>{a}</motion.p>}</div>)}</div></div></section>

   <section id="contact" className="contact"><div className="contact-top"><span>09 / Start something</span><span>Available for 2026</span></div><h2>HAVE A<br/><i>GOOD ONE?</i></h2><a className="contact-mail" href="mailto:hello@creatiq.studio">hello@creatiq.studio <ArrowUpRight/></a></section>
  </main>
  <footer><div className="footer-main"><div className="logo">CREATIQ<span>®</span></div><p>Creative studio for brands<br/>that want to move differently.</p><div className="footer-links"><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div></div><Marquee reverse><span>CREATIQ®</span><span>CREATIVE STUDIO®</span></Marquee><div className="footer-bottom"><span>© 2026 Creatiq</span><span>Lahore / Pakistan</span><span>Instagram · LinkedIn · X</span></div></footer>
 </div>
}createRoot(document.getElementById("root")).render(<App/>);