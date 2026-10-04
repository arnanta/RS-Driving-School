import { licenceService, pricing, services } from '../data.js'
import { IconCar, IconBike, IconScooty, IconLicence } from './icons.jsx'

const ICONS = { car: IconCar, bike: IconBike, scooty: IconScooty }

const fromPrice = (vehicle) => Math.min(...pricing[vehicle].plans.map((plan) => plan.price))

export default function Services() {
  const choose = (vehicle) => window.dispatchEvent(new CustomEvent('rs:select-vehicle', { detail: vehicle }))

  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What do you want to learn?</span>
          <h2>Driving lessons in Kolkata</h2>
          <p className="lede">
            Every course is taught one-to-one, at your pace, near Jayshree Post Office.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const Icon = ICONS[service.icon]
            return (
              <article className="service-card" key={service.title}>
                <div className="service-icon">
                  <Icon width="24" height="24" />
                </div>
                <h3>{service.title}</h3>
                <p className="service-tagline">{service.tagline}</p>
                <p>{service.body}</p>
                <div className="service-foot">
                  <span className="service-price">
                    From <b>₹{fromPrice(service.vehicle).toLocaleString('en-IN')}</b>
                  </span>
                  <a className="service-link" href="#pricing" onClick={() => choose(service.vehicle)}>
                    See packages →
                  </a>
                </div>
              </article>
            )
          })}
        </div>

        <div className="licence-note">
          <IconLicence width="22" height="22" />
          <p>
            <b>{licenceService.title}.</b> {licenceService.body}
          </p>
        </div>
      </div>
    </section>
  )
}
