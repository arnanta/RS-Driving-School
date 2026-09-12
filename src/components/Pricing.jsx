import { useState } from 'react'
import { pricing } from '../data.js'
import { IconCheck } from './icons.jsx'

const TABS = ['car', 'bike', 'scooty']

export default function Pricing() {
  const [tab, setTab] = useState('car')
  const active = pricing[tab]

  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Packages</span>
          <h2>Pick your vehicle, see the price</h2>
          <p className="lede">
            Every package includes the full class count up front — no surprise add-ons beyond
            what’s listed below.
          </p>
        </div>

        <div className="tabs" role="tablist" aria-label="Vehicle type">
          {TABS.map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              className="tab-btn"
              aria-selected={tab === key}
              onClick={() => setTab(key)}
            >
              {pricing[key].label}
            </button>
          ))}
        </div>

        <div className={`ticket-grid${active.cols === 3 ? ' cols-3' : ''}`} role="tabpanel">
          {active.plans.map((plan) => (
            <article className={`ticket${plan.featured ? ' is-featured' : ''}`} key={plan.name}>
              {plan.badge && <span className="ticket-badge">{plan.badge}</span>}
              <div className="ticket-head">
                <h3>{plan.name}</h3>
                <span className="ticket-classes">{plan.classes}</span>
              </div>
              <div className="ticket-price">
                ₹{plan.price.toLocaleString('en-IN')}
                <span> total</span>
              </div>
              <div className="ticket-perf" />
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <IconCheck width="16" height="16" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="pricing-note">
          <span>
            <b>Schedule</b> — {active.note}
          </span>
          {active.addOns?.map((addOn) => (
            <span key={addOn.label}>
              <b>{addOn.label}</b> — {addOn.value}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
