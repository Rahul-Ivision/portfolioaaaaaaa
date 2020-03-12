import React from "react"

import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

import ReactMarkdown from 'react-markdown';

import WorkExperience from '../components/workexperience'



const AboutPage = ({data}) => (
  <Layout>
    <div className="primary col-lg-8 col-12">
     
        <div className="content">
          <h1 className='heading'>AboutPage</h1>
        </div>

          <section className="section">
            <div className="section-inner">
              
            <ReactMarkdown source={data.contentfulAbout.short.short} />

<div dangerouslySetInnerHTML={{__html:data.contentfulAbout.long.childContentfulRichText.html}} />
            </div>
          </section>
        

          <WorkExperience></WorkExperience>

              

        
        </div>
      
    
  </Layout>
)

export default AboutPage

export const data = graphql`
    query{
      contentfulAbout {
        short {
          short
        }
        long {
          childContentfulRichText {
            html
          }
        }
      }
    }
    `
