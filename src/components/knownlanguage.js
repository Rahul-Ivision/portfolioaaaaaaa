import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import { Helmet } from "react-helmet"

const KnownLanguage = () => {
  const data = useStaticQuery(graphql`
    query {
      contentfulAbout {
        language {
          id
          nameField
        }
      }
    }
  `)

  return (
    <aside className="languages aside section">
      <div className="section-inner">
        <h2 className="heading">Languages</h2>
        <div className="content">
          <ul className="list-unstyled">
            {data.contentfulAbout.language.map(item => {
              return (
                <li className="item" key={item.id}>
                  <span className="title">
                    <strong> {item.nameField} </strong>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </aside>
  )
}

export default KnownLanguage
