import { useEffect, useState } from 'react'
import { business, nav } from '../data.js'
import { IconPhone, IconWhatsapp } from './icons.jsx'

function BrandMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="var(--ink)" />
      <circle cx="32" cy="32" r="21" fill="none" stroke="var(--paper)" strokeWidth="4" />
      <circle cx="32" cy="32" r="5.5" fill="var(--amber-500)" />
      <path d="M32 11 L32 24" stroke="var(--green-500)" strokeWidth="4" strokeLinecap="round" />
      <path d="M15.5 42 L24.5 36" stroke="var(--red-600)" strokeWidth="4" strokeLinecap="round" />
      <path d="M48.5 42 L39.5 36" stroke="var(--red-600)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const closeMenu = () => setOpen(false)

  return (
    <>
      <div className="topbar">
        <div className="container topbar-links">
          <a href={`tel:+91${business.phonePrimary}`}>
            <IconPhone width="14" height="14" /> +91 {business.phonePrimary}
          </a>
          <a href={`tel:+91${business.phoneSecondary}`}>
            <IconPhone width="14" height="14" /> +91 {business.phoneSecondary}
          </a>
          <span>{business.location}</span>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <a href="#top" className="brand" aria-label={`${business.name} — home`}>
            <BrandMark />
            <span className="brand-word">
              <span className="brand-r">R</span>
              <span className="brand-s">S</span> Driving
              <span className="brand-sub">School</span>
            </span>
          </a>

          <nav className="nav-desktop" aria-label="Primary">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-primary btn-sm" href={`tel:+91${business.phonePrimary}`}>
              <IconPhone width="16" height="16" /> Call Now
            </a>
            <button
              type="button"
              className="nav-toggle"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
            </button>
          </div>
        </div>
      </header>

      <nav className={`nav-mobile${open ? ' is-open' : ''}`} aria-label="Mobile">
        {nav.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-primary btn-block" href={`tel:+91${business.phonePrimary}`} onClick={closeMenu}>
          <IconPhone width="16" height="16" /> Call {business.phonePrimary}
        </a>
        <a
          className="btn btn-whatsapp btn-block"
          href={`https://wa.me/${business.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          onClick={closeMenu}
        >
          <IconWhatsapp width="18" height="18" /> WhatsApp Us
        </a>
      </nav>
    </>
  )
}
