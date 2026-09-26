import React,{useState}from"react";import{createRoot}from"react-dom/client";import{motion,useScroll,useTransform}from"framer-motion";import{ArrowUpRight,Plus,Minus,Menu,X,ArrowDown}from"lucide-react";import"./styles.css";

const work=[
 {name:"NOVA",title:"Designing a clear digital identity for Nova",year:"2026",time:"5 Weeks",services:["Branding","Website","3D"],img:"https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1800&q=90"},
 {name:"FORME",title:"Building a confident digital presence for Forme",year:"2025",time:"2 Months",services:["Branding","Website","3D"],img:"https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1800&q=90"},
 {name:"ATLAS",title:"Turning an ambitious product into a clear experience",year:"2025",time:"5 Weeks",services:["Branding","Website","Motion"],img:"https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1800&q=90"}
];
const services=["Branding","Social media","3D","Website","Motion"];
const testimonials=[
 ["They understood what we wanted almost immediately. The final brand feels clear, confident and completely ours.","Aarav Khan","Founder, Nova"],
 ["The whole process was fast, collaborative and genuinely enjoyable. They made the complicated feel simple.","Maya Shah","CMO, Forme"],
 ["Our ideas finally had a visual language. The result feels much bigger than where we started.","Daniel Lee","Co-Founder, Atlas"],
 ["Every detail was considered. It feels like a brand, not just a website.","Sara Malik","Founder, Northstar"]
];
const faqs=[
 ["What’s your typical process for a new project?","We start with discovery to understand goals, audience and competitors. Then we move through strategy, design and development with clear milestones and constant collaboration."],
 ["How long does a project usually take?","A focused website or branding project can take 2–5 weeks. Larger projects involving multiple pages, motion, 3D or strategy are scoped around the actual requirements."],
 ["Do you offer packages or custom quotes?","Both. We can start with a focused package or create a custom engagement around the project."],
 ["What’s included in a branding package?","Brand direction, identity, typography, color, core visual assets and a practical system your team can actually use."],
 ["Can you work with our existing dev or marketing team?","Absolutely. We can lead the creative direction or collaborate directly with your existing development, marketing or product team."]
];

function Reveal({children,className=""}){return <motion.div className={className} initial={{opacity:0,y:55}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{duration:.8,ease:[.16,1,.3,1]}}>{children}</motion.div>}
function Label({children}){return <div className="label">{children}</div>}
function Marquee({children,dark=false}){return <div className={"marquee "+(dark?"dark":"")}><motion.div animate={{x:["0%","-50%"]}} transition={{duration:22,repeat:Infinity,ease:"linear"}}>{children}{children}</motion.div></div>}

function App(){
 const[menu,setMenu]=useState(false),[faq,setFaq]=useState(null),[slide,setSlide]=useState(0);
 const{scrollYProgress}=useScroll();const progress=useTransform(scrollYProgress,[0,1],[0,1]);
 return <div className="app">
  <motion.div className="scroll-progress" style={{scaleX:progress}}/>
  <header className="topbar">
   <a className="brand" href="#top">CQ<span>®</span></a>
   <div className="status"><b>●</b> Open for project <span>Jan '26</span></div>
   <div className="clock">06:21 AM<br/><small>Lahore, PK</small></div>
   <nav><a href="#work">Works</a><a href="#about">About</a><a href="#blog">Blog</a><a href="#contact">Contact</a></nav>
   <button className="hamb" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </header>
  {menu&&<motion.div className="mobile-nav" initial={{y:-30,opacity:0}} animate={{y:0,opacity:1}}><a href="#work" onClick={()=>setMenu(false)}>Works ↗</a><a href="#about" onClick={()=>setMenu(false)}>About ↗</a><a href="#blog" onClick={()=>setMenu(false)}>Blog ↗</a><a href="#contact" onClick={()=>setMenu(false)}>Contact ↗</a></motion.div>}
  <main id="top">
   <section className="hero">
    <div className="hero-left">
     <div className="tiny">We are</div>
     <motion.h1 initial={{opacity:0,y:70}} animate={{opacity:1,y:0}} transition={{duration:1,ease:[.16,1,.3,1]}}>Creative<br/>Agency for<br/><em>Bold Companies.</em></motion.h1>
     <p>A creative studio building distinctive brands, websites and digital experiences that refuse to blend in.</p>
     <a className="yellow-btn" href="#work">Our Works <ArrowUpRight/></a>
    </div>
    <div className="hero-right">
      <motion.div className="hero-image" initial={{scale:1.08}} animate={{scale:1}} transition={{duration:1.4,ease:[.16,1,.3,1]}}>
       <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=90" alt="Creative portrait"/>
       <div className="hero-sticker">CQ<br/><small>CREATIVE<br/>STUDIO</small></div>
       <div className="hero-code">/01 — VISUAL SYSTEM<br/>/02 — DIGITAL EXPERIENCE<br/>/03 — MOTION STUDY</div>
      </motion.div>
    </div>
   </section>

   <section className="manifesto" id="about">
    <div className="manifesto-bg"><img src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=85" alt="Abstract landscape"/></div>
    <div className="manifesto-inner"><Label>Manifesto</Label><motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:1}}>NO<br/><span>BORING</span><br/>STUFF.</motion.h2><p>We bring unique perspective to help ambitious companies stand out among the crowd.</p></div>
   </section>

   <section id="work" className="works">
    <div className="section-line"><Label>Works</Label><span>(03)</span></div>
    <div className="work-tabs"><b>Top Picks</b><a href="#contact">All Projects <ArrowUpRight/></a></div>
    <div className="work-cards">{work.map((w,i)=><Reveal key={w.name}><article className="work-card">
      <div className="work-visual"><img src={w.img} alt={w.name}/><div className="work-number">0{i+1}</div><div className="work-arrow"><ArrowUpRight/></div></div>
      <div className="work-copy"><h3>{w.name}</h3><p>{w.title}</p></div>
      <div className="work-meta"><div><span>Year</span><b>{w.year}</b></div><div><span>Timeline</span><b>{w.time}</b></div><div><span>Services</span><b>{w.services.join(" · ")}</b></div><a href="#contact">Read Case Study <ArrowUpRight/></a></div>
    </article></Reveal>)}</div>
   </section>

   <section id="services" className="services">
    <div className="service-top"><Label>Services</Label><span>(01—05)</span></div>
    <div className="service-list">{services.map((s,i)=><motion.div className="service-item" key={s} whileHover={{x:12}}><span>(0{i+1})</span><h2>{s}</h2><ArrowUpRight/></motion.div>)}</div>
   </section>

   <section id="about" className="why">
    <div className="why-head"><Label>Why Us</Label><p>With a focused team and a sharp eye for detail, we craft bold brands and high-impact digital experiences built to get remembered.</p></div>
    <div className="why-grid"><div className="why-photo"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85" alt="Studio"/></div><div className="numbers">
      <div><strong>40+</strong><span>Projects completed to date.</span></div><div><strong>98%</strong><span>Client satisfaction rate.</span></div><div><strong>12+</strong><span>Industries and markets reached.</span></div>
    </div></div>
   </section>

   <section className="testimonials">
    <Label>Testimonials</Label><div className="testimonial-title"><h2>WORDS FROM<br/><em>OUR HAPPY CLIENTS.</em></h2><div className="arrows"><button onClick={()=>setSlide((slide-1+testimonials.length)%testimonials.length)}>←</button><button onClick={()=>setSlide((slide+1)%testimonials.length)}>→</button></div></div>
    <motion.div className="quote" key={slide} initial={{opacity:0,x:35}} animate={{opacity:1,x:0}} transition={{duration:.5}}><blockquote>“{testimonials[slide][0]}”</blockquote><div className="quote-author"><div>{testimonials[slide][1][0]}</div><span>{testimonials[slide][1]}<small>{testimonials[slide][2]}</small></span></div></motion.div>
   </section>

   <section className="team">
    <div className="section-line"><Label>Our team</Label></div><div className="team-heading"><h2>THE<br/><em>CHOSEN ONES.</em></h2><p>A small senior team. Different disciplines. One standard.</p></div>
    <div className="team-grid">{["Creative Direction","Social Media","Creative Director","Brand Designer"].map((role,i)=><div className="member" key={role}><div><img src={["https://images.unsplash.com/photo-1500648767791-00dcc994a43e","https://images.unsplash.com/photo-1494790108377-be9c29b29330","https://images.unsplash.com/photo-1506794778202-cad84cf45f1d","https://images.unsplash.com/photo-1531123897727-8f129e1688ce"][i]+"?auto=format&fit=crop&w=900&q=85"} alt={role}/></div><h3>{["Ayan Malik","Maya Shah","Daniel Khan","Sara Ali"][i]}</h3><p>{role}</p></div>)}</div>
   </section>

   <section className="pricing">
    <div className="section-line"><Label>Pricing</Label><div className="billing"><b>Monthly</b><span>Yearly</span><i>SAVE 20%</i></div></div>
    <div className="price-grid"><div className="price-card"><div className="price-image"><img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=85" alt="Starter"/></div><Label>Starter</Label><h3>$4999<span>/month</span></h3><p>For small teams and early-stage brands ready to establish a strong presence.</p><ul><li>Ongoing design support</li><li>2 expert designers</li><li>48 hour turnaround</li></ul><a href="#contact">Choose Starter <ArrowUpRight/></a></div><div className="price-card featured"><div className="price-image"><img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85" alt="Growth"/></div><Label>Growth <mark>Popular</mark></Label><h3>$7999<span>/month</span></h3><p>For brands ready to grow to the next level with an ongoing creative partner.</p><ul><li>Ongoing design support</li><li>4 expert designers</li><li>24 hour turnaround</li></ul><a href="#contact">Choose Growth <ArrowUpRight/></a></div><div className="price-card bespoke"><div className="price-image"><img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85" alt="Bespoke"/></div><Label>Bespoke</Label><h3>Custom<br/>Project</h3><p>Perfect for specialized needs or ambitious projects that need a custom setup.</p><a href="#contact">Contact Us <ArrowUpRight/></a></div></div>
   </section>

   <section id="faq" className="faq"><div className="faq-head"><Label>FAQ</Label><h2>FREQUENTLY<br/><em>ASKED QUESTIONS.</em></h2><a href="#contact">Have more questions? <ArrowUpRight/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className="faq-row" key={q} onClick={()=>setFaq(faq===i?null:i)}><div><span>0{i+1}</span><h3>{q}</h3></div><button>{faq===i?<Minus/>:<Plus/>}</button>{faq===i&&<motion.p initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}}>{a}</motion.p>}</div>)}</div></section>

   <section id="blog" className="blog"><div className="section-line"><Label>Blog</Label><a href="#contact">See More <ArrowUpRight/></a></div><h2>LATEST<br/><em>NEWS.</em></h2><div className="blog-grid">{["How ambitious brands win the competition","Why smart brands grow faster than the rest","The real reason bold brands stay ahead"].map((x,i)=><article key={x}><div><img src={["https://images.unsplash.com/photo-1556761175-b413da4baf72","https://images.unsplash.com/photo-1553484771-371a605b060b","https://images.unsplash.com/photo-1497366811353-6870744d04b2"][i]+"?auto=format&fit=crop&w=1200&q=85"} alt={x}/></div><span>DEC 16, 2026</span><h3>{x}</h3><a href="#contact">Read article <ArrowUpRight/></a></article>)}</div></section>

   <section id="contact" className="contact"><div className="contact-grid"><div className="contact-yellow"><div className="brand">CQ<span>®</span></div><div className="contact-nav"><a href="#work">Works <ArrowUpRight/></a><a href="#about">About <ArrowUpRight/></a><a href="#blog">Blog <ArrowUpRight/></a><a href="#contact">Contact <ArrowUpRight/></a><a href="#faq">FAQ <ArrowUpRight/></a></div><small>Creative digital studio<br/>based in Lahore, Pakistan</small></div><div className="contact-black"><Label>Start a project</Label><h2>LET'S<br/><em>MAKE</em><br/>SOMETHING.</h2><a className="contact-email" href="mailto:hello@creatiq.studio">hello@creatiq.studio <ArrowUpRight/></a><div className="socials"><span>Follow Us</span><a href="#contact">Instagram</a><a href="#contact">LinkedIn</a><a href="#contact">X/Twitter</a><a href="#contact">Github</a></div></div></div></section>
  </main>
  <footer><div className="footer-brand"><div className="brand">CQ<span>®</span></div><p>Creative digital studio<br/>building brands that stand out.</p></div><div className="footer-links"><a href="#work">Works</a><a href="#about">About</a><a href="#blog">Blog</a><a href="#contact">Contact</a></div><div className="footer-news"><span>Newsletter</span><p>Subscribe for new work and insights.</p><div><input placeholder="Your Email"/><button>Subscribe <ArrowUpRight/></button></div></div><div className="footer-bottom"><span>© 2026 Creatiq. All Rights Reserved.</span><span>Made for bold companies.</span><span>hello@creatiq.studio</span></div></footer>
 </div>
}createRoot(document.getElementById("root")).render(<App/>);