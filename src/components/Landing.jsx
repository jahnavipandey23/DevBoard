import { useState } from "react";
import "./Landing.css";

export default function Landing({ onLogin }) {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};
    if (!name.trim())  e.name  = "Name is required";
    if (!email.trim()) e.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email)) e.email = "Enter a valid email";
    return e;
  };

  const handleSubmit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSuccess(true);
    setTimeout(() => onLogin({ name, email }), 1200);
  };

  return (
    <div className="landing">

      <nav className="l-nav">
        <div className="l-nav-logo">
          <div className="l-logo-mark">D</div>
          <span className="l-logo-name">DevBoard</span>
        </div>

        
        <a href="#signup" className="l-nav-cta">Sign in</a>
      </nav>

      {/* HERO */}
      <section className="l-hero">
        <div className="l-hero-glow" />
        <div className="l-hero-inner">

          {/* LEFT */}
          <div className="l-hero-left">
            <div className="l-badge">
              <span className="l-badge-dot" />
              Now with Kanban &amp; live GitHub sync
            </div>
            <h1 className="l-title">
              Your dev<br />workflow,<br />
              <span className="l-title-accent">unified.</span>
            </h1>
            <p className="l-sub">
              DevDash connects to your GitHub repositories and gives you a clean
              dashboard to track, prioritize, and ship projects — without the noise.
            </p>
            <div className="l-chips">
              <div className="l-chip"><span>⬡</span> GitHub repos</div>
              <div className="l-chip"><span>▦</span> Kanban boards</div>
              <div className="l-chip"><span>◎</span> Priority tracking</div>
              <div className="l-chip"><span>⊞</span> Live dashboard</div>
            </div>
          </div>


          <div className="l-card" id="signup">
            <div className="l-card-label">Get started</div>
            <div className="l-card-heading">Create your account</div>
            <div className="l-card-sub">Free forever. No credit card needed.</div>

            <div className="l-field">
              <label>Full name</label>
              <input
                type="text"
                placeholder="Alex Johnson"
                value={name}
                onChange={e => setName(e.target.value)}
                className={errors.name ? "l-input-err" : ""}
              />
              {errors.name && <span className="l-err-msg">{errors.name}</span>}
            </div>

            <div className="l-field">
              <label>Email address</label>
              <input
                type="email"
                placeholder="alex@devteam.io"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className={errors.email ? "l-input-err" : ""}
              />
              {errors.email && <span className="l-err-msg">{errors.email}</span>}
            </div>

            <button
              className={`l-btn-primary ${success ? "l-btn-success" : ""}`}
              onClick={handleSubmit}
              disabled={success}
            >
              {success ? "✓ Welcome aboard!" : "Get started for free"}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}