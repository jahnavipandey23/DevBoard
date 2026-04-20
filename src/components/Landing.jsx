import { useState } from "react";
import "./Landing.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Landing({ onLogin = () => {} }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const e = {};

    if (!name.trim()) e.name = "Name is required";

    if (!email.trim()) {
      e.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      e.email = "Enter a valid email";
    }

    if (!password.trim()) e.password = "Password is required";

    return e;
  };

  const handleSubmit = () => {
    const e = validate();

    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    setErrors({});
    setSuccess(true);

    setTimeout(() => {
      onLogin({ name, email });
    }, 800);
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

      <section className="l-hero">
        <div className="l-hero-glow" />

        <div className="l-hero-inner">

          {/* LEFT */}
          <div className="l-hero-left">
            <div className="l-badge">
              <span className="l-badge-dot" />
              Now with Kanban & GitHub sync
            </div>

            <h1 className="l-title">
              Your dev<br />
              workflow,<br />
              <span className="l-title-accent">unified.</span>
            </h1>

            <p className="l-sub">
              DevDash helps you track and manage projects in one clean dashboard.
            </p>
          </div>

          {/* RIGHT */}
          <div className="l-card" id="signup">
            <div className="l-card-heading">Create account</div>

            {/* NAME */}
            <div className="l-field">
              <label>Full name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={errors.name ? "l-input-err" : ""}
              />
              {errors.name && <span className="l-err-msg">{errors.name}</span>}
            </div>

            {/* EMAIL */}
            <div className="l-field">
              <label>Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={errors.email ? "l-input-err" : ""}
              />
              {errors.email && <span className="l-err-msg">{errors.email}</span>}
            </div>

            {/* PASSWORD */}
            <div className="l-field">
              <label>Password</label>

              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={errors.password ? "l-input-err" : ""}
                  style={{ width: "100%", paddingRight: "40px" }}
                />

                <span
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    cursor: "pointer"
                  }}
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </span>
              </div>

              {errors.password && (
                <span className="l-err-msg">{errors.password}</span>
              )}
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              disabled={success}
              className={`l-btn-primary ${success ? "l-btn-success" : ""}`}
            >
              {success ? "✓ Welcome!" : "Get started"}
            </button>

          </div>
        </div>
      </section>
    </div>
  );
}