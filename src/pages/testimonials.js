import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"



const TestimonialsPage = ({data}) => (
  
  <Layout>
    
    <div className="primary col-lg-8 col-12">
                <section className="section">
                
                    <div className="section-inner">
                    <h2 className="heading">Testimonials</h2>
                        <div className="content">
                        {data.contentfulTestimonials.testimonials && data.contentfulTestimonials.testimonials.map((item)=>{
                            return(
                              
                              <div>
                                  <p> 
                                    <i className="fas fa-quote-left"></i> 
                                    {item.quote.quote} 
                                    <i className="fas fa-quote-right"></i>
                                    </p>
                                  <strong> {item.quoteBy} </strong>
                                  <small> {item.from} </small>
                                  <hr />
                              </div> 
                              
                            )
                        })}
                            
                            
                        </div>
                        
                    </div>                
                </section>
    </div>                
    
    
  </Layout>
)

export default TestimonialsPage


export const data = graphql`
    query{
      contentfulTestimonials {
        testimonials {
          quoteBy
          from
          quote {
            quote
          }
        }
      }
    }
    `
