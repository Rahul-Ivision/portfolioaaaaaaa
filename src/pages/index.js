import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ReactMarkdown from 'react-markdown';


import WorkExperience from '../components/workexperience'




const IndexPage = ({data}) => (

    

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
                                               
                          
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">
                                <img className="img-fluid project-image" src="assets/images/projects/project-1.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">Instance - Bootstrap 4 Portfolio Theme for Aspiring Full Stack Developers</a></h3>
                                    <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim,
                                     eget iaculis ante dolor non turpis.</p>
                                    <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                                </div>                          
                            </div>
                            
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank">
                                <img className="img-fluid project-image" src="assets/images/projects/project-2.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank">DevStudio - Bootstrap 4 Theme for WebDev Agencies and Freelance Developers</a></h3>
                                    <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                                    <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                                </div>                          
                            </div>
                            
                             <div className="item row">
                                <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/startupkit-bootstrap-theme-for-saas-startups/" target="_blank">
                                <img className="img-fluid project-image" src="assets/images/projects/project-3.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/startupkit-bootstrap-theme-for-saas-startups/" target="_blank">Startup Kit - Bootstrap 4 Theme for SaaS Startups</a></h3>
                                    <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                                    <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/startupkit-bootstrap-theme-for-saas-startups/" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                                </div>                          
                            </div>
                            
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank">
                                <img className="img-fluid project-image" src="assets/images/projects/project-4.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank">Nova Pro - Bootstrap 4 Theme for Mobile Startups</a></h3>
                                    <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus.</p>
                                    <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                                </div>                          
                            </div>                            
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/delta-bootstrap-theme-for-mobile-apps/" target="_blank">
                                <img className="img-fluid project-image" src="assets/images/projects/project-5.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/delta-bootstrap-theme-for-mobile-apps/" target="_blank">Delta - Bootstrap 4 Theme for Promoting Mobile Apps</a></h3>
                                    <p className="mb-2"> You can put one of your secondary projects here. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                                    <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/delta-bootstrap-theme-for-mobile-apps/" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                                </div>                          
                            </div>
                            
                        </div>  
                    </div>               
                </section>
                
                
                
               <WorkExperience></WorkExperience>
                
            </div>
            


    
  </Layout>
)

export default IndexPage

export const data = graphql`
    query{
        contentfulAbout {
            short {
              short
            }
          }
    }
    `