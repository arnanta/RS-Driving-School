import { services } from '../data.js'
import { IconCar, IconBike, IconScooty, IconLicence } from './icons.jsx'

const ICONS = {
  car: IconCar,
  bike: IconBike,
  scooty: IconScooty,
  licence: IconLicence,
}

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What we teach</span>
          <h2>Four ways to get on the road</h2>
          <p className="lede">
            Every course is taught one-to-one, at your pace, with licence formalities folded into
            the schedule.
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
                <p>{service.body}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
