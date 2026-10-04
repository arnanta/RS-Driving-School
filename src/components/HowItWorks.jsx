import { steps } from '../data.js'

export default function HowItWorks() {
  return (
    <section className="section section-alt" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">How it works</span>
          <h2>Your journey in 4 steps</h2>
        </div>

        <ol className="steps">
          {steps.map((step, i) => (
            <li className="step" key={step.title}>
              <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>

        <div className="steps-cta">
          <a className="btn btn-primary" href="#contact">
            Book your first class →
          </a>
        </div>
      </div>
    </section>
  )
}
