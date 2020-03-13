import React from "react"
import { Link, graphql } from "gatsby"

import Img from "gatsby-image"

import Layout from "../components/layout"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.contentfulPosts

  const { previous, next } = pageContext

  return (
    <Layout>
      <div className="primary col-lg-8 col-12">
        <Img fluid={post.image.fluid} />
        <article>
          <header>
            <h1>{post.title}</h1>
          </header>
          <section
            dangerouslySetInnerHTML={{
              __html: post.content.childContentfulRichText.html,
            }}
          />
          <hr />
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.slug} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.slug} rel="next">
                  {next.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPosts(slug: { eq: $slug }) {
      id
      title
      content {
        childContentfulRichText {
          html
        }
      }
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
