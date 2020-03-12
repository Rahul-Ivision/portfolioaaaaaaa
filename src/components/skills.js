
import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import { Helmet } from "react-helmet"


const Skills = () =>{

  

    const data = useStaticQuery(graphql`
    query{
      contentfulAbout {
        skills {
          name
          value
        }
      }
    }
    `)



    
      

  return(
    <aside className="skills aside section">
    <div className="section-inner">
        <h2 className="heading">Skills</h2>
        <div className="content">
                        
            <div className="skillset">
               
                {
                  data.contentfulAbout.skills.map((item)=>{
                    return(
<div className="item">
                    <h3 className="level-title">
                        {item.name}
                          <span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level...">
                            <i className="fas fa-info-circle"></i>{item.value}
                            </span>
                          </h3>
                    <div className="level-bar">
                        <div className="level-bar-inner" data-level="85%">
                        </div>                                      
                    </div>
</div>                      
                    )
                  })
                }
                
                
                
                
            </div>              
        </div>
    </div>
</aside>
  )
}


export default Skills
