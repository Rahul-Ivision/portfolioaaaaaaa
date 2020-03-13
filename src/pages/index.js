import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import Img from "gatsby-image"

import ReactMarkdown from "react-markdown"

import WorkExperience from "../components/workexperience"

const IndexPage = ({ data }) => (
  <Layout>
    {console.log("data will be below")}

    {console.log("data will be above")}
    <div className="primary col-lg-8 col-12">
      <section className="about section">
        <div className="section-inner">
          <h2 className="heading">About Me</h2>
          <div className="content">
            <ReactMarkdown source={data.contentfulAbout.short.short} />
          </div>
        </div>
      </section>

      <section className="latest section">
        <div className="section-inner">
          <h2 className="heading">Latest Projects</h2>
          <div className="content">
            {data.allContentfulPosts.edges.slice(0, 1).map(item => {
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
                      You can put one of your secondary projects here.
                      Suspendisse in tellus dolor. Vivamus a tortor eu turpis
                      pharetra consequat quis non metus. Aliquam aliquam, orci
                      eu suscipit pellentesque, mauris dui tincidunt enim, eget
                      iaculis ante dolor non turpis.
                    </p>
                  </div>
                </div>
              )
            })}
            <Link to="/projects">
              <button className="btn-sm btn btn-primary"> View All </button>
            </Link>
          </div>
        </div>
      </section>

      <WorkExperience></WorkExperience>
    </div>
  </Layout>
)

export default IndexPage

export const data = graphql`
  query {
    contentfulAbout {
      short {
        short
      }
    }

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
