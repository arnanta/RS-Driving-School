import { trustPoints } from '../data.js'
import { IconInstructor, IconVehicle, IconShield, IconThumb } from './icons.jsx'

const ICONS = {
  instructor: IconInstructor,
  vehicle: IconVehicle,
  shield: IconShield,
  thumb: IconThumb,
}

export default function TrustStrip() {
  return (
    <section className="trust" aria-label="Why students choose RS Driving School">
      <div className="container">
        {trustPoints.map((point) => {
          const Icon = ICONS[point.icon]
          return (
            <div className="trust-item" key={point.label}>
              <Icon width="30" height="30" />
              <span>{point.label}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
