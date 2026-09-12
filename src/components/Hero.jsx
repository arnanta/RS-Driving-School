import { business } from '../data.js'
import { IconPhone, IconWhatsapp } from './icons.jsx'

function RoadBackdrop() {
  return (
    <svg
      className="hero-road"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <path d="M0 400 L340 90 L460 90 L800 400 Z" fill="#1c211f" />
      <path d="M382 90 L418 90 L620 400 L520 400 Z" fill="#222824" />
      {Array.from({ length: 7 }).map((_, i) => (
        <rect
          key={i}
          x={396 - i * 1.4}
          y={230 - i * 22}
          width="8"
          height="16"
          fill="#e7e9e1"
          opacity={0.55 - i * 0.05}
          transform={`translate(${i * 0.6})`}
        />
      ))}
    </svg>
  )
}

// Rendered as its own full-opacity layer (on top of the dimmed road art and
// scrim) so the car itself always reads bright and crisp, on mobile and
// desktop alike — coordinates share the road's viewBox so the two line up.
function HeroCarLayer() {
  return (
    <svg
      className="hero-car-layer"
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <g className="hero-car">
        <ellipse className="hero-car-shadow" cx="0" cy="15" rx="9" ry="2.6" fill="#000" />
        <rect x="-6" y="-14" width="12" height="28" rx="5" fill="var(--asphalt-ink)" />
        <rect x="-4.5" y="-6" width="9" height="10" rx="3" fill="var(--asphalt)" opacity="0.55" />
        <rect x="-5" y="-14" width="3" height="2.6" rx="1" fill="var(--signal-red)" />
        <rect x="2" y="-14" width="3" height="2.6" rx="1" fill="var(--signal-red)" />
        <circle className="hero-car-light" cx="-4.5" cy="12.5" r="1.7" fill="var(--amber-500)" />
        <circle className="hero-car-light" cx="4.5" cy="12.5" r="1.7" fill="var(--amber-500)" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <RoadBackdrop />
      <div className="hero-scrim" aria-hidden="true" />
      <HeroCarLayer />
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow">{business.location}</span>
          <h1>
            <span className="accent-red">Learn today.</span>
            <br />
            <em>Drive tomorrow.</em>
          </h1>
          <p className="lede">
            Patient, structured lessons in car, bike and scooty from {business.owner} — rated a
            perfect {business.rating.toFixed(1)} stars by recent students, with licence paperwork
            handled alongside your classes.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              <IconPhone width="18" height="18" /> Book a Free Call
            </a>
            <a
              className="btn btn-whatsapp"
              href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi RS Driving School, I want to know more about your classes.')}`}
              target="_blank"
              rel="noreferrer"
            >
              <IconWhatsapp width="18" height="18" /> WhatsApp Us
            </a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <b>{business.rating.toFixed(1)}★</b>
              <span>Google rating</span>
            </div>
            <div className="hero-stat">
              <b>3</b>
              <span>Vehicle types taught</span>
            </div>
            <div className="hero-stat">
              <b>1st</b>
              <span>Attempt pass, most students</span>
            </div>
          </div>
        </div>

        <div className="dial-card">
          <div className="dial-wrap">
            <span className="dial-value">{business.rating.toFixed(1)}</span>
            <span className="dial-stars" aria-hidden="true">★★★★★</span>
            <span className="dial-label">Google Reviews</span>
          </div>
          <div className="dial-foot">
            <span>
              Verified <b>Google</b> reviews
            </span>
            <span>
              Instructor <b>{business.owner}</b>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
