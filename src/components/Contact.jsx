import { useState } from 'react'
import { business, courseOptions } from '../data.js'
import { IconPhone, IconWhatsapp, IconPin, IconClock, IconCheck } from './icons.jsx'

const EMPTY = { name: '', phone: '', course: courseOptions[0], message: '' }

export default function Contact() {
  const [form, setForm] = useState(EMPTY)
  const [status, setStatus] = useState(null)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name.trim() || !/^\+?[0-9\s-]{8,15}$/.test(form.phone.trim())) {
      setStatus({ ok: false, text: 'Please add your name and a valid phone number so we can call you back.' })
      return
    }

    const text = [
      `Hi RS Driving School, I'd like to enrol.`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Course: ${form.course}`,
      form.message.trim() ? `Message: ${form.message.trim()}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    window.open(`https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noreferrer')
    setStatus({ ok: true, text: 'Opening WhatsApp with your details filled in — just hit send.' })
    setForm(EMPTY)
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Get in touch</span>
          <h2>Book your first class</h2>
          <p className="lede">
            Fill in your details below and it opens straight in WhatsApp, ready to send — or call
            us directly, whichever is easier.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-line">
              <IconPhone />
              <div>
                <small>Call</small>
                <a href={`tel:+91${business.phonePrimary}`}>+91 {business.phonePrimary}</a>
                {' · '}
                <a href={`tel:+91${business.phoneSecondary}`}>+91 {business.phoneSecondary}</a>
              </div>
            </div>
            <div className="contact-line">
              <IconWhatsapp />
              <div>
                <small>WhatsApp</small>
                <a href={`https://wa.me/${business.whatsapp}`} target="_blank" rel="noreferrer">
                  Message us directly
                </a>
              </div>
            </div>
            <div className="contact-line">
              <IconPin />
              <div>
                <small>Location</small>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(business.location)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {business.location}
                </a>
              </div>
            </div>
            <div className="contact-hours">
              <span>
                <IconClock width="16" height="16" style={{ display: 'inline', marginRight: 6 }} />
                {business.hoursLabel}
              </span>
              <b>{business.hoursValue}</b>
            </div>
          </div>

          <form className="form-card" onSubmit={handleSubmit} noValidate>
            <div className="field-row">
              <div className="field">
                <label htmlFor="name">Full name</label>
                <input id="name" type="text" autoComplete="name" value={form.name} onChange={update('name')} required />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone number</label>
                <input id="phone" type="tel" autoComplete="tel" value={form.phone} onChange={update('phone')} required />
              </div>
            </div>
            <div className="field">
              <label htmlFor="course">Course interested in</label>
              <select id="course" value={form.course} onChange={update('course')}>
                {courseOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="message">Message (optional)</label>
              <textarea id="message" value={form.message} onChange={update('message')} placeholder="Preferred timing, pickup location, anything else we should know…" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              <IconWhatsapp width="18" height="18" /> Send via WhatsApp
            </button>
            <p className="form-note">
              This opens WhatsApp with your details pre-filled — nothing is sent until you tap
              send there. Prefer a call? Use the numbers on the left.
            </p>

            {status && (
              <p className={`form-status is-visible ${status.ok ? 'is-ok' : 'is-error'}`} role="status">
                {status.ok && <IconCheck width="14" height="14" style={{ display: 'inline', marginRight: 6 }} />}
                {status.text}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
