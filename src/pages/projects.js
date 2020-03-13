import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"

const ProjectPage = ({ data }) => (
  <Layout>
    <div className="primary col-lg-8 col-12">
      <h1>Hi from the ProjectPage</h1>
      <section className="section">
        <div className="section-inner">
          {data.allContentfulPosts.edges.map(item => {
            return (
              <div key={item.node.id} className="item row">
                <Link to={item.node.slug}>
                  <Img className="customImg" fluid={item.node.image.fluid} />
                </Link>
                <div className="desc col-md-8 col-12">
                  <h3 className="title">
                    <Link to={item.node.slug}>{item.node.title}</Link>
                  </h3>
                  <p className="mb-2">
                    You can put one of your secondary projects here. Suspendisse
                    in tellus dolor. Vivamus a tortor eu turpis pharetra
                    consequat quis non metus. Aliquam aliquam, orci eu suscipit
                    pellentesque, mauris dui tincidunt enim, eget iaculis ante
                    dolor non turpis.
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  </Layout>
)

export default ProjectPage

export const data = graphql`
  query {
    allContentfulPosts {
      edges {
        node {
          id
          title
          author
          slug
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
