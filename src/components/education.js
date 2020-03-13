import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"

const Education = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        education {
          id
          name
          value
        }
      }
    }
  `)

  return (
    <aside className="education aside section">
      <div className="section-inner">
        <h2 className="heading">Education</h2>
        <div className="content">
          {data.contentfulAbout.education.map(item => {
            return (
              <div className="item" key={item.id}>
                <h3 className="title">
                  <i className="fas fa-graduation-cap"></i> {item.name}{" "}
                </h3>
                <h4 className="university">
                  <span className="year">( {item.value} )</span>
                </h4>
              </div>
            )
          })}
        </div>
      </div>
    </aside>
  )
}

export default Education
