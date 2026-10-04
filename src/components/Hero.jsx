import { business, heroChecks, pricing } from '../data.js'
import { IconPhone, IconCheck } from './icons.jsx'

const startingPrice = Math.min(
  ...Object.values(pricing).flatMap((group) => group.plans.map((plan) => plan.price)),
)

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
      <div className="hero-car-mobile-track" aria-hidden="true">
        <div className="hero-car-mobile" />
      </div>
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="hero-copy">
          <span className="eyebrow">Driving school near Jayashree Post Office, Behala</span>
          <h1>
            <span className="accent-red">Learn to drive</span>
            <br />
            <em>with confidence.</em>
          </h1>
          <p className="lede">
            Car, bike &amp; scooty training in Kolkata with {business.owner} — patient one-to-one
            lessons near Jayshree Post Office, packages from ₹{startingPrice.toLocaleString('en-IN')}.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#contact">
              Book a Class
            </a>
            <a className="btn btn-light" href={`tel:+91${business.phonePrimary}`}>
              <IconPhone width="18" height="18" /> Call Now
            </a>
          </div>
          <ul className="hero-checks">
            {heroChecks.map((item) => (
              <li key={item}>
                <IconCheck width="16" height="16" /> {item}
              </li>
            ))}
          </ul>
          <div className="hero-stats">
            <div className="hero-stat">
              <b>{business.rating.toFixed(1)}★</b>
              <span>Google rating</span>
            </div>
            <div className="hero-stat">
              <b>₹{startingPrice.toLocaleString('en-IN')}</b>
              <span>Packages start at</span>
            </div>
            <div className="hero-stat">
              <b>6–5</b>
              <span>Open daily</span>
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
