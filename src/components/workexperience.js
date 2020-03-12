
import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import { Helmet } from "react-helmet"


const WorkExperience = () =>{

  

    const data = useStaticQuery(graphql`
    query{
      contentfulAbout {
        workExperience {
          designation
          companyName
          from
          to
          childContentfulExperienceDescriptionTextNode {
            description
          }
        }
      }
    }
    `)



    
      

  return(
    <section className="experience section">
      
    <div className="section-inner">
        <h2 className="heading">Work Experience</h2>
        <div className="content">

        { 
          data.contentfulAbout.workExperience.map((item)=>{
            return (
              <div className="item">
                <h3 className="title">{item.designation} - <span className="place">
                  <a href="#">{item.companyName}</a></span> <span className="year">({item.from} - {item.to})</span></h3>
                <p> {item.childContentfulExperienceDescriptionTextNode.description} </p>
            </div>
            )
          })
       }

        </div>
    </div>
</section>
  )
}


export default WorkExperience
