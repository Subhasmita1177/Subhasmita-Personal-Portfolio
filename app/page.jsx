import {Validation} from "@/components/Form";
import {CustomCursor} from "@/components/Form";
import {Particles} from "@/components/Form";
import {Typed} from "@/components/Form";
import {ScrollRevealComponent} from "@/components/Form";
import "./globals.css";
import Image from "next/image";
export default function Home() {

  return (
  <>
  <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&family=Exo+2:ital,wght@0,300;0,400;0,600;0,800;1,300&family=Share+Tech+Mono&display=swap" rel="stylesheet" />

  {/* Cursor */}
  <div id="cur" style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9999 }}></div>
  <div id="cur2" style={{ position: 'fixed', pointerEvents: 'none', zIndex: 9998 }}></div>

  {/*BG */}
  <div id="bg-grid"></div>
  <div id="bg-radial"></div>
  <div className="scan"></div>
  <div id="ptcls"></div>

  {/* NAV */}

  <nav>
    <a className="logo" href="#hero"><em>S</em>S<em>/</em></a>
    <ul className="navl">
      <li><a href="#about">About</a></li>
      <li><a href="#project">Project</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  <a className="nav-btn" href="#contact">let's Connect</a>
  </nav>

  {/* HERO */}

  <section id="hero">
    <div className="hero-core-glow"></div>
    <div style={{ position: "relative", zIndex: 2 }}>
      <p className="hero-tag">// Full-Stack Developer & Designer</p>
      <h1 className="hero-name">
        <span className="hl">Subhasmita</span><br/>Sahoo
      </h1>
      <p className="hero-sub">Building seamless digital experiences — frontend to backend.</p>
      <p className="typed-wrap"><span id="typed"></span></p>
      <div className="hero-btns">
        <a className="btn-p" href="#project">View Project</a>
        <a className="btn-s" href="#contact">Let's Talk</a>
      </div>
    </div>
    <div className="scroll-hint">
      <span>Scroll</span>
      <div className="scroll-line"></div>
    </div>
  </section>

  {/* ABOUT/IMAGE */}
  <section id="about">
  <div className="wrap">

    {/*Image side */}
    <div className="img-card rv2">
      <div className="img-hex-ring">
        <div className="img-inner">
          <img src="image.jpeg" alt="Subhasmita Sahoo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          {/* <div className="img-placeholder">SS</div> */}
        </div>
        <div className="img-glow"></div>
      </div>
      <div className="status-badge">
        <div className="status-dot"></div>
        Available for Opportunities
      </div>
      <div className="stats-row">
        <div className="stat"><div className="stat-n">5+</div><div className="stat-l">Projects</div></div>
        <div className="stat"><div className="stat-n">10+</div><div className="stat-l">Tech Stack</div></div>
        <div className="stat"><div className="stat-n">∞</div><div className="stat-l">Curiocity</div></div>
      </div>
    </div>

    {/* Text side */}
    <div className="about-text rv3">
      <p className="s-label">// 01 — About Me</p>
      <h2 className="s-title">Who I Am</h2>
      <p>Hi! I'm <strong>Subhasmita Sahoo</strong>, a passionate full-stack developer who loves crafting pixel-perfect UIs and robust backend systems that power real-world impact.</p>
      <p>I thrive at the intersection of design and engineering — writing clean, scalable code while ensuring every user interaction feels intuitive and delightful. I have strong hands-on experience with <strong>React.js, Node.js, Express.js</strong>, and modern databases.</p>
      <p>My goal is to build products that not only work flawlessly but also look stunning — because great software deserves great design.</p>

      <div className="skills-flex">
        <span className="stag">HTML5 / CSS3</span>
        <span className="stag">JavaScript</span>
        <span className="stag">React.js</span>
        <span className="stag">Node.js</span>
        <span className="stag">Express.js</span>
        <span className="stag">MongoDB</span>
        <span className="stag">Git / GitHub</span>
        <span className="stag">REST APIs</span>
        <span className="stag">Vercel / Netlify</span>
      </div>
    </div>
  </div>
  </section>


  {/* PROJECT */}
  <section id="project">
    <div className="wrap">
      <div className="rv">
        <p className="s-label">// 02 — Featured Project</p>
        <h2 className="s-title">Personal Portfolio Website</h2>
        <div className="hr"></div>
      </div>
    <div className="proj-card rv">

      {/* Visual */}
      <div className="proj-visual">
        <div className="proj-visual-bg"></div>
        <div className="proj-mock">
          <div className="browser-bar">
            <div className="dot r"></div><div className="dot y"></div><div className="dot g"></div>
            <div className="browser-url">subhasmita.vercel.app</div>
          </div>
          <div className="browser-body">
            <div className="line w80" style={{ background: "linear-gradient(to right,#00e5c8,#007a6a)" }}></div>
            <div className="line w60"></div>
            <div className="line w90"></div>
            <div className="line w50"></div>
            <div className="line-block">
              <div className="lb"></div>
              <div className="lb"></div>
              <div className="lb"></div>
            </div>
            <div style={{ marginTop: ".6rem" }}>
              <div className="line w70" style={{ width: "70%", background: "var(--t3)", opacity: ".6" }}></div>
              <div className="line w90" style={{ opacity: ".4" }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Info */}

      <div className="proj-info">
        <p className="proj-num">Project — 001 / Personal Portfolio</p>
        <h3 className="proj-title">Full-Stack Personal Portfolio</h3>

        <p className="proj-desc">
          A complete full-stack personal portfolio website designed to professionally showcase projects, skills, and experience. 

          Integrates a React.js frontend with a Node.js/Express.js backend and a MongoDB database for storing contact messages and project details — deployed live on Vercel.
        </p>

        <p className="feat-title">// Key Features</p>
        <ul className="feat-list">
          <li>Responsive frontend built with HTML, CSS, JavaScript & React.js</li>
          <li>Backend REST API powered by Node.js and Express.js</li>
          <li>MongoDB database to store project details and contact enquiries</li>
          <li>Smooth animations, scroll reveals & custom interactions</li>
          <li>Contact form with backend email/data integration</li>
          <li>Deployed live on Vercel with CI/CD from GitHub</li>
        </ul>

        <p className="feat-title">// Tech Stack</p>
        <div className="tech-row">
          <span className="tbadge">React.js</span>
          <span className="tbadge">HTML5</span>
          <span className="tbadge">CSS3</span>
          <span className="tbadge">JavaScript</span>
          <span className="tbadge">Node.js</span>
          <span className="tbadge">Express.js</span>
          <span className="tbadge">MongoDB</span>
          <span className="tbadge">REST API</span>
          <span className="tbadge">Git</span>
        </div>

        <div className="deploy-row">
          <div className="deploy-label">Hosting & Deployment</div>
          <span className="dbadge">▲ Vercel</span>
          <span className="dbadge">◈ Netlify</span>
          <span className="dbadge">⚙ Heroku</span>
        </div>

        <div className="proj-links">
          <a href="#" className="plink">
            <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>

            Live Demo
          </a>

          <a href="https://github.com/Subhasmita1177/Subhasmita-Personal-Portfolio.git" className="plink">
            <svg width="13" height="13" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>

            GitHub Repo
          </a>
        </div>
      </div>
    </div>

    {/* Expected Outcome */}
    <div className="outcome-box rv">
      <p className="outcome-title">// Expected Outcome</p>

      <p>Gain hands-on experience integrating <strong style={{color: "var(--t)"}}>frontend, backend, and database</strong> layers into a single cohesive live project — developing a production-ready portfolio that demonstrates full-stack competency to employers and clients worldwide.</p>
    </div>
  </div>
  </section>
  <Validation />
  <CustomCursor />
  <Particles />
  <Typed />
  <ScrollRevealComponent />

  </>
  );
}