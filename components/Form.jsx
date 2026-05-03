"use client";
import { useState } from "react";
import { useEffect } from 'react';
import { useMemo } from 'react';

  /* ── Cursor ── */
  export function CustomCursor() {
  useEffect(() => {
    // 1. Reference elements (ensure these IDs exist in your JSX below)
    const cur = document.getElementById('cur');
    const cur2 = document.getElementById('cur2');
    let mx = 0, my = 0, rx = 0, ry = 0;
    // 2. Track Mouse Movement
    const moveCursor = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (cur) {
        cur.style.setProperty('left', mx + 'px');
        cur.style.setProperty('top', my + 'px');
      }
    };
    // 3. Smooth Follow Animation (cur2)
    let animationFrame;
    const loop = () => {
      if (cur2) {
        rx += (mx - rx) * 0.13;
        ry += (my - ry) * 0.13;
        cur2.style.setProperty('left', rx + 'px');
        cur2.style.setProperty('top', ry + 'px');
      }
      animationFrame = requestAnimationFrame(loop);
    };
    // 4. Hover Effects
    const targets = document.querySelectorAll('a, button, .stag, .tbadge, .dbadge, .plink');
    const handleMouseEnter = () => {
      cur?.style.setProperty('width', '18px');
      cur?.style.setProperty('height', '18px');
      cur2?.style.setProperty('width', '55px');
      cur2?.style.setProperty('height', '55px');
      cur2?.style.setProperty('opacity', '.7');
    };
    const handleMouseLeave = () => {
      cur?.style.setProperty('width', '10px');
      cur?.style.setProperty('height', '10px');
      cur2?.style.setProperty('width', '36px');
      cur2?.style.setProperty('height', '36px');
      cur2?.style.setProperty('opacity', '.45');
    };
    // Event Listeners
    window.addEventListener('mousemove', moveCursor);
    targets.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });
    loop();
    // 5. Cleanup (Crucial for React performance)
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(animationFrame);
      targets.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}
  /* ── Particles ── */
export function Particles() {
  const particleCount = 28;
  // useMemo ensures random values are only generated once per mount
  const particles = useMemo(() => {
    return Array.from({ length: particleCount }).map((_, i) => {
      const s = 1 + Math.random() * 2.5;
      return {
        id: i,
        style: {
          width: `${s}px`,
          height: `${s}px`,
          left: `${Math.random() * 100}vw`,
          animationDuration: `${9 + Math.random() * 15}s`,
          animationDelay: `${Math.random() * 12}s`,
          opacity: 0.15 + Math.random() * 0.5,
        },
      };
    });
  }, []);
}
  /* ── Typed text ── */
export function Typed() {
  const phrases = [
    'React.js Developer',
    'Full-Stack Engineer',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];
  const [pi, setPi] = useState(0); // Phrase index
  const [ci, setCi] = useState(0); // Character index
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  useEffect(() => {
    const currentPhrase = phrases[pi];
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing logic
        setText(currentPhrase.slice(0, ci + 1));
        setCi((prev) => prev + 1);
        if (ci + 1 === currentPhrase.length) {
          setIsDeleting(true);
        }
      } else {
        // Deleting logic
        setText(currentPhrase.slice(0, ci - 1));
        setCi((prev) => prev - 1);
        if (ci - 1 === 0) {
          setIsDeleting(false);
          setPi((prev) => (prev + 1) % phrases.length);
        }
      }
    };
    // Determine speed: Deleting is usually faster (55ms) than typing (90ms)
    // There is a longer pause (1800ms) when a word is fully typed
    const timeoutSpeed = isDeleting
      ? (ci === currentPhrase.length ? 1800 : 55)
      : 90;
    const timer = setTimeout(handleTyping, timeoutSpeed);
    return () => clearTimeout(timer);
  }, [ci, isDeleting, pi, phrases])
}
/* ── Scroll reveal ── */
export function ScrollRevealComponent() {
  useEffect(() => {
    // 1. Define the observer logic
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    // 2. Select and observe elements
    const elements = document.querySelectorAll('.rv, .rv2, .rv3');
    elements.forEach((el) => obs.observe(el));
    // 3. Cleanup to prevent memory leaks
    return () => obs.disconnect();
  }, []); // Empty dependency array means this runs once on mount
}
/* ── Contact form ── */
export function Validation() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("First name: ", firstname);
    console.log("Last name: ", lastname);
    console.log("Email: ", email);
    console.log("Phone: ", phone);
    console.log("Subject: ", subject);
    console.log("Message: ", message);
    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        phone,
        subject,
        message,
      }),
    });
    const { msg, success: resSuccess } = await res.json();
    setError(msg);
    setSuccess(resSuccess);
    if (resSuccess) {
      setFirstname("");
      setLastname("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <>
      {/* CONTACT */}
  <section id="contact">
  <div className="wrap">
    <div className="rv">
      <p className="s-label">// 03 — Get In Touch</p>
      <h2 className="s-title">Let's Work Together</h2>
      <p style={{ fontSize: ".95rem", color: "var(--dim)", lineHeight: "1.8", marginBottom: "2.5rem", maxWidth: "560px" }}>
        Have a project in mind, a collaboration opportunity, or just want to say hi? 
        Fill in the form below and I'll get back to you within 24 hours.
      </p>
    </div>
    <form id="cform" className="rv" onSubmit={handleSubmit}>
      <div className="contact-grid">
        <div className="field-group">
          <label>First Name</label>
          <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="e.g. Ananya" required minLength={2} maxLength={60}/>
        </div>
        <div className="field-group">
          <label>Last Name</label>
          <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="e.g. Sharma" required minLength={2} maxLength={60}/>
        </div>
        <div className="field-group">
          <label>Email Address</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hello@example.com" required/>
        </div>
        <div className="field-group">
          <label>Phone (optional)</label>
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}pattern="[0-9]{10}" placeholder="+91 98765 43210" />
        </div>
        <div className="field-group full">
          <label>Subject</label>
          <select value={subject} onChange={(e) => setSubject(e.target.value)}>
            <option value="" disabled>Select a subject...</option>
            <option>Freelance Project</option>
            <option>Full-time Opportunity</option>
            <option>Collaboration</option>
            <option>General Enquiry</option>
          </select>
        </div>
        <div className="field-group full">
          <label>Message</label>
          <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about your project, idea, or anything else..." required></textarea>
        </div>
      </div>
      <button type="submit" className="btn-send">Send Message →</button>
      <div className="success-msg" id="smsg">✓ Message sent! I'll get back to you soon.</div>
    </form>
    <div className="contact-info rv">
      <div className="cinfo-item">
        <span className="cinfo-icon">✉</span>
        <a className="cinfo-text" href="mailto:subhasmita.1122.sahoo@gmail.com">subhasmita.1122.sahoo@gmail.com</a>
      </div>
      <div className="cinfo-item">
        <span className="cinfo-icon">💼</span>
        <a className="cinfo-text" href="https://www.linkedin.com/in/subhasmita-sahoo-39556b3a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">linkedin.com/in/subhasmita</a>
      </div>
      <div className="cinfo-item">
        <span className="cinfo-icon">🐙</span>
        <a className="cinfo-text" href="https://github.com/Subhasmita1177">github.com/subhasmita</a>
      </div>
      <div className="cinfo-item">
        <span className="cinfo-icon">📍</span>
        <span className="cinfo-text">India (Open to Remote)</span>
      </div>
    </div>  
  </div>
  </section>

  {/* FOOTER  */}
  <footer>
    <p>© 2026 <span>Subhasmita Sahoo</span>. All rights reserved.</p>
    <p>Built with <span>HTML · CSS · JS</span> — Deployed on <span>Vercel</span></p>
  </footer>
    </>
  );
}