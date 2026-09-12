import { business } from '../data.js'
import { IconPhone, IconWhatsapp } from './icons.jsx'

export default function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="Quick contact">
      <a href={`tel:+91${business.phonePrimary}`}>
        <IconPhone /> Call
      </a>
      <a
        href={`https://wa.me/${business.whatsapp}?text=${encodeURIComponent('Hi RS Driving School, I want to know more about your classes.')}`}
        target="_blank"
        rel="noreferrer"
      >
        <IconWhatsapp /> WhatsApp
      </a>
    </nav>
  )
}
