"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

// ─── Slide Data ───────────────────────────────────────────────────────────────
const SLIDES = [
  {
    image: "/images/AUTH/auth.jpg",
    title: "WHERE STORIES BECOME TIMELESS.",
    subtitle: "Wear your story, forever.",
  },
  {
    image: "/images/AUTH/auth1.jpg",
    title: "NEW SEASON. NEW SIGNATURES.",
    subtitle: "Discover pieces crafted for today.",
  },
  {
    image: "/images/AUTH/auth2.jpg",
    title: "ELEVATE YOUR EVERYDAY.",
    subtitle: "Timeless. Elegant. Yours.",
  },
];

const SLIDE_INTERVAL = 4800;

// ─── Country Data ─────────────────────────────────────────────────────────────
const COUNTRIES = [
  { name: "United States",  code: "+1",   flag: "https://flagcdn.com/w40/us.png" },
  { name: "United Kingdom", code: "+44",  flag: "https://flagcdn.com/w40/gb.png" },
  { name: "Canada",         code: "+1",   flag: "https://flagcdn.com/w40/ca.png" },
  { name: "India",          code: "+91",  flag: "https://flagcdn.com/w40/in.png" },
  { name: "Germany",        code: "+49",  flag: "https://flagcdn.com/w40/de.png" },
  { name: "Australia",      code: "+61",  flag: "https://flagcdn.com/w40/au.png" },
  { name: "France",         code: "+33",  flag: "https://flagcdn.com/w40/fr.png" },
  { name: "Italy",          code: "+39",  flag: "https://flagcdn.com/w40/it.png" },
  { name: "Spain",          code: "+34",  flag: "https://flagcdn.com/w40/es.png" },
  { name: "Netherlands",    code: "+31",  flag: "https://flagcdn.com/w40/nl.png" },
  { name: "Switzerland",    code: "+41",  flag: "https://flagcdn.com/w40/ch.png" },
  { name: "Sweden",         code: "+46",  flag: "https://flagcdn.com/w40/se.png" },
  { name: "UAE",            code: "+971", flag: "https://flagcdn.com/w40/ae.png" },
  { name: "Saudi Arabia",   code: "+966", flag: "https://flagcdn.com/w40/sa.png" },
  { name: "Singapore",      code: "+65",  flag: "https://flagcdn.com/w40/sg.png" },
  { name: "Japan",          code: "+81",  flag: "https://flagcdn.com/w40/jp.png" },
  { name: "South Korea",    code: "+82",  flag: "https://flagcdn.com/w40/kr.png" },
  { name: "China",          code: "+86",  flag: "https://flagcdn.com/w40/cn.png" },
  { name: "Brazil",         code: "+55",  flag: "https://flagcdn.com/w40/br.png" },
  { name: "Mexico",         code: "+52",  flag: "https://flagcdn.com/w40/mx.png" },
  { name: "Argentina",      code: "+54",  flag: "https://flagcdn.com/w40/ar.png" },
  { name: "South Africa",   code: "+27",  flag: "https://flagcdn.com/w40/za.png" },
  { name: "Nigeria",        code: "+234", flag: "https://flagcdn.com/w40/ng.png" },
  { name: "Egypt",          code: "+20",  flag: "https://flagcdn.com/w40/eg.png" },
];


// LEFT SLIDER________________________________________________________________________


function LeftSlider() {
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState(false); // 🔥 controls first animation
  const timeoutRef = useRef(null);

  // ✅ Trigger animation AFTER first render (fixes stuck first slide)
  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(id);
  }, []);

  // 🔥 Controlled slider timing
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);

    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  const goTo = (index) => {
    setCurrent(index);
  };

  return (
    <div className="slider">

      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`slide ${
            i === current && mounted ? "slide--active" : ""
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="slide__image"
            priority={i === 0}
          />
          <div className="slide__overlay" />
        </div>
      ))}

      {/* Captions */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`slide__caption ${
            i === current && mounted ? "slide__caption--active" : ""
          }`}
        >
          <p className="slide__subtitle font-geometosSoft">
            {slide.subtitle}
          </p>
          <h1 className="slide__title font-geometos">
            {slide.title}
          </h1>
        </div>
      ))}

      {/* Indicators */}
      <div className="slider__indicators">
        {SLIDES.map((_, i) => (
          <button
            key={`${i}-${current}`} // keep this for animation restart
            className={`indicator ${
              i === current ? "indicator--active" : ""
            }`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

    </div>
  );
}
// ─── Eye Icon ─────────────────────────────────────────────────────────────────
function EyeIcon({ open, onClick }) {
  return (
    <button type="button" className="eyeBtn" onClick={onClick} tabIndex={-1}>
      {open ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )}
    </button>
  );
}

// ─── Search Icon ──────────────────────────────────────────────────────────────
function SearchIcon() {
  return (
    <svg className="searchIcon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

// ─── Floating Input ───────────────────────────────────────────────────────────
function FloatingInput({ label, type = "text", ...props }) {
  return (
    <div className="inputGroup floating">
      <input type={type} required {...props} />
      <label>{label}</label>
      <span className="underline" />
    </div>
  );
}

// ─── Forgot Password Panel ────────────────────────────────────────────────────
function ForgotPasswordPanel({ onBack }) {
  return (
    <div className="forgotBox">
      <h2 className="forgotTitle">Forgot password</h2>
      <p className="forgotDesc">
        Enter your registered email address and we'll send you a secure link to reset your
        password. Please check your inbox and spam folder.
      </p>
      <FloatingInput label="Email address*" type="email" />
      <div className="forgotActions">
        <button className="btnOutline" onClick={onBack}>BACK TO LOGIN</button>
        <button className="btnPrimary">SEND RESET LINK</button>
      </div>
    </div>
  );
}

// ─── Login Panel ──────────────────────────────────────────────────────────────
function LoginPanel({ setIsLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [forgotMode, setForgotMode]     = useState(false);

  if (forgotMode) return <ForgotPasswordPanel onBack={() => setForgotMode(false)} />;

  return (
    <>
      <FloatingInput label="Email address*" type="email" autoComplete="email" />

      <div className="inputGroup floating passwordBox">
        <div className="inputField">
          <input
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
          />
          <label>Password*</label>
          <span className="underline" />
          <EyeIcon open={showPassword} onClick={() => setShowPassword(p => !p)} />
        </div>
        <button type="button" className="forgotLink" onClick={() => setForgotMode(true)}>
          Forgot password?
        </button>
      </div>

      <button className="btnPrimary">SIGN IN</button>

      <div className="createAccountSection">
        <p className="requiredText">*Required Fields</p>
        <div className="createDivider" />
        <h2 className="createTitle">Create an Account</h2>
        <div className="createBenefits">
          <ul>
            <li>Faster checkout</li>
            <li>Access your order history</li>
          </ul>
          <ul>
            <li>Save addresses &amp; payment methods</li>
            <li>Receive exclusive updates</li>
          </ul>
        </div>
        <button className="createBtn" onClick={() => setIsLogin(false)}>
          CREATE AN ACCOUNT
        </button>
      </div>
    </>
  );
}

// ─── Country Dropdown ─────────────────────────────────────────────────────────
function CountryDropdown({ selected, onSelect }) {
  const [open, setOpen]     = useState(false);
  const [search, setSearch] = useState("");
  const [openUp, setOpenUp] = useState(false);
  const ref = useRef(null);

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) || c.code.includes(search)
  );

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function handleToggle() {
    const rect = ref.current.getBoundingClientRect();
    setOpenUp(window.innerHeight - rect.bottom < 300);
    setOpen(o => !o);
  }

  return (
    <div className="countrySelector" ref={ref}>
      <button type="button" className="prefixBtn" onClick={handleToggle}>
        <img src={selected.flag} alt={selected.name} className="flagImg" />
        <span className="prefixCode">{selected.code}</span>
        <span className={`prefixArrow ${open ? "open" : ""}`}>▾</span>
      </button>

      <div className={`countryDropdown ${open ? "visible" : ""} ${openUp ? "openUp" : ""}`}>
        <div className="dropSearchWrap">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="dropSearchInput"
          />
        </div>
        <ul className="countryList">
          {filtered.map((c, i) => (
            <li
              key={i}
              className={`countryItem ${c.name === selected.name ? "selected" : ""}`}
              onClick={() => { onSelect(c); setOpen(false); }}
            >
              <img src={c.flag} alt={c.name} className="flagImg" />
              <span className="countryLabel">{c.name} ({c.code})</span>
            </li>
          ))}
          {filtered.length === 0 && <li className="countryEmpty">No results found</li>}
        </ul>
      </div>
    </div>
  );
}

// ─── Register Panel ───────────────────────────────────────────────────────────
function RegisterPanel() {
  const [showPassword, setShowPassword]   = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);
  const [agreed, setAgreed]               = useState(false);
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Australia",
    code: "+61",
    flag: "https://flagcdn.com/w40/au.png",
  });

  return (
    <>
      <div className="formRow">
        <FloatingInput label="First name*" />
        <FloatingInput label="Last name*" />
      </div>

      <FloatingInput label="Email address*" type="email" />

      <div className="inputGroup floating passwordBox">
        <input
          type={showPassword ? "text" : "password"}
          required
          onFocus={() => setFocusPassword(true)}
          onBlur={() => setFocusPassword(false)}
        />
        <label>Password*</label>
        <span className="underline" />
        <EyeIcon open={showPassword} onClick={() => setShowPassword(p => !p)} />
      </div>

      {focusPassword && (
        <ul className="passwordRules">
          <li>Minimum 8 characters</li>
          <li>1 uppercase letter</li>
          <li>1 lowercase letter</li>
          <li>1 number</li>
          <li>1 special character</li>
        </ul>
      )}

      <FloatingInput label="Confirm password*" type="password" />

      <div className="inputGroup">
        <label>Mobile number*</label>
        <div className="phoneRow">
          <CountryDropdown selected={selectedCountry} onSelect={setSelectedCountry} />
          <div className="phoneDivider" />
          <input type="tel" className="phoneInput" placeholder="Mobile number" />
        </div>
      </div>

      <label className="checkboxLabel">
        <input
          type="checkbox"
          checked={agreed}
          onChange={e => setAgreed(e.target.checked)}
          className="checkboxInput"
        />
        <span className="checkboxCustom" />
        <span className="checkboxText">
          By creating an account, you agree to our Terms &amp; Conditions and Privacy Policy.
        </span>
      </label>

      <button className="btnPrimary" disabled={!agreed}>CREATE ACCOUNT</button>
    </>
  );
}

// ─── Main Auth Page ───────────────────────────────────────────────────────────
export default function AuthPage() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="authContainer">

      {/* LEFT — slider replaces static image */}
      <div className="authLeft">
        <LeftSlider />
      </div>

      {/* RIGHT — form (unchanged) */}
      <div className="authRight">
        <button className="closeBtn" onClick={() => router.replace("/")} aria-label="Close">✕</button>

        <div className="authTopBar">
          <span className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Sign In</span>
          <span className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Create Account</span>
        </div>

        <div className="formBox">
          {isLogin ? <LoginPanel setIsLogin={setIsLogin} /> : <RegisterPanel />}
        </div>
      </div>

    </div>
  );
}