import { business, reviews } from '../data.js'

export default function Reviews() {
  return (
    <section className="section section-alt" id="reviews">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">{business.rating.toFixed(1)}★ average on Google</span>
          <h2>What students say</h2>
        </div>

        <div className="review-rail">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <span className="review-stars" aria-label="5 out of 5 stars">
                ★★★★★
              </span>
              <p>“{review.text}”</p>
              <div className="review-foot">
                <span className="review-name">{review.name}</span>
                <span className="review-time">{review.time}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
