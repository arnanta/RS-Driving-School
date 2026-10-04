import { business, whatsappLink, enquiryText } from '../data.js'
import { IconPhone, IconWhatsapp } from './icons.jsx'

export default function MobileBar() {
  return (
    <nav className="mobile-bar" aria-label="Quick contact">
      <a href={`tel:+91${business.phonePrimary}`}>
        <IconPhone /> Call
      </a>
      <a href={whatsappLink(enquiryText)} target="_blank" rel="noreferrer">
        <IconWhatsapp /> WhatsApp
      </a>
      <a href="#contact">Book Now</a>
    </nav>
  )
}
