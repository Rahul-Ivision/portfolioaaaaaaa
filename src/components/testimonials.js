import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Slider from "react-slick"

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const data = useStaticQuery(graphql`
    query {
      contentfulTestimonials {
        testimonials {
          id
          quoteBy
          from
          quote {
            quote
          }
        }
      }
    }
  `)

  return (
    <aside className="testimonials aside section">
      <div className="section-inner">
        <h2 className="heading">Testimonials com</h2>
        <div className="content">
          <Slider {...settings}>
            {data.contentfulTestimonials.testimonials &&
              data.contentfulTestimonials.testimonials.map(item => {
                return (
                  <div className="item" key={item.id}>
                    <blockquote className="quote">
                      <p>
                        <i className="fas fa-quote-left"></i>
                        {item.quote.quote}
                      </p>
                    </blockquote>
                    <p className="source">
                      <span className="name">{item.quoteBy}</span>
                      <br />
                      <span className="title">{item.from}</span>
                    </p>
                  </div>
                )
              })}
          </Slider>

          <p>
            <Link className="more-link" to="/testimonials">
              <button type="button" className="btn btn-primary btn-sm">
                View More
              </button>
            </Link>
          </p>
        </div>
      </div>
    </aside>
  )
}

export default Testimonials
