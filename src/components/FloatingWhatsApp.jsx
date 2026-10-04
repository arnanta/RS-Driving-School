import { whatsappLink } from '../data.js'
import { IconWhatsapp } from './icons.jsx'

export default function FloatingWhatsApp() {
  return (
    <a
      className="wa-float"
      href={whatsappLink('Hi RS Driving School, I’d like to enquire about driving lessons. I am interested in ___ training.')}
      target="_blank"
      rel="noreferrer"
    >
      <IconWhatsapp width="22" height="22" /> WhatsApp us
    </a>
  )
}
