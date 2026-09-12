import { whyChooseUs } from '../data.js'
import { IconInstructor, IconShield, IconLicence, IconTag } from './icons.jsx'

const ICONS = {
  instructor: IconInstructor,
  shield: IconShield,
  licence: IconLicence,
  tag: IconTag,
}

export default function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Why RS</span>
          <h2>Why families choose RS</h2>
          <p className="lede">
            Four things that come up again and again in Google reviews — not a features list we
            wrote ourselves.
          </p>
        </div>

        <div className="why-grid">
          {whyChooseUs.map((item) => {
            const Icon = ICONS[item.icon]
            return (
              <div className="why-item" key={item.title}>
                <div className="why-icon">
                  <Icon width="22" height="22" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
