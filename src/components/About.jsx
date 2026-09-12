import { business, quotes } from '../data.js'

export default function About() {
  const initials = business.owner
    .split(' ')
    .map((w) => w[0])
    .join('')

  return (
    <section className="section" id="about">
      <div className="container about-grid">
        <div className="avatar-card">
          <div className="avatar-badge">{initials}</div>
          <h3>{business.owner}</h3>
          <span className="role">Founder &amp; Lead Instructor</span>
          <div className="dial-stars" aria-hidden="true">★★★★★</div>
          <div className="avatar-meta">
            <span>{business.location}</span>
            <span>Car · Bike · Scooty · Licence formalities</span>
          </div>
        </div>

        <div>
          <div className="section-head">
            <span className="eyebrow">Meet your instructor</span>
            <h2>Patience is the whole method</h2>
            <p>
              Every review of RS Driving School circles back to the same thing: {business.owner}
              {' '}slows down, explains the “why” behind each manoeuvre, and doesn’t move on until
              it actually clicks. That’s the approach behind every course on this page.
            </p>
          </div>

          <div className="quote-stack">
            {quotes.map((q) => (
              <blockquote className="quote" key={q.author}>
                <p>“{q.text}”</p>
                <cite>— {q.author}, Google Review</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
