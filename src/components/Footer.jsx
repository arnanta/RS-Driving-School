import { business, nav, services } from '../data.js'
import { IconPhone, IconPin } from './icons.jsx'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <>
      <div className="lane-divider" aria-hidden="true">
        <span className="lane-car" />
      </div>
      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-tagline">{business.tagline}</p>
            <p style={{ marginTop: 10, fontSize: '0.9rem' }}>
              {business.name}, run by {business.owner} — car, bike and scooty training with
              licence assistance, near Jayshree Post Office, Kolkata.
            </p>
          </div>

          <div>
            <h4>Explore</h4>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.title}>{s.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li>
                <a href={`tel:+91${business.phonePrimary}`}>
                  <IconPhone width="14" height="14" style={{ display: 'inline', marginRight: 6 }} />
                  +91 {business.phonePrimary}
                </a>
              </li>
              <li>
                <a href={`tel:+91${business.phoneSecondary}`}>
                  <IconPhone width="14" height="14" style={{ display: 'inline', marginRight: 6 }} />
                  +91 {business.phoneSecondary}
                </a>
              </li>
              <li>
                <IconPin width="14" height="14" style={{ display: 'inline', marginRight: 6 }} />
                {business.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {year} {business.name}. All rights reserved.
          </span>
          <span>Prop.: {business.owner}</span>
        </div>
      </footer>
    </>
  )
}
