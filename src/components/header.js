
import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby'

import { Helmet } from "react-helmet"


const Header = () =>{

  

    const data = useStaticQuery(graphql`
    query{
        contentfulAbout {
          id
          name
          designation
          avatar {
            file {
              url
              fileName
            }
          }
          socialLink {
            id
            facebook
            insta
            linkedIn
            twitter
          }
        }
      }
    `)



    
      

  return(
    <div>
      <Helmet>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
  <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />


</Helmet>
        {console.log(data)}
<header className="header">
    <div className="container clearfix"> 
    <Link to='/'>                       
        <img width="150" src={ data.contentfulAbout.avatar.file.url } className="profile-image img-fluid float-left"  alt="James Lee" />
    </Link>    
        <div className="profile-content float-left">
           <Link to='/'> 
            <h1 className="name"> {}  
                { data.contentfulAbout.name }
            </h1> 
            </Link>
            <h2 className="desc">{ data.contentfulAbout.designation }</h2>   
            <ul className="social list-inline">
                <li className="list-inline-item">
                  <a href={data.contentfulAbout.socialLink.twitter} target="_blank" > 
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>                   
                <li className="list-inline-item">
                  <a href={data.contentfulAbout.socialLink.facebook} target="_blank"><i className="fab fa-facebook"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href={data.contentfulAbout.socialLink.linkedIn} target="_blank"><i className="fab fa-linkedin-in"></i></a>
                </li>
                <li className="list-inline-item">
                  <a href={data.contentfulAbout.socialLink.insta} target="_blank"><i className="fab fa-instagram"></i></a>
                </li>    
                               
            </ul> 
        </div>
        <Link className="btn btn-cta-primary float-right" to="/contact" target="_blank">
            <i className="fas fa-paper-plane"></i> Contact Me
        </Link>              
    </div>
    
</header>


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  
  <div className="container"> 
    <div className="row">
      <div className="col">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item">
        <Link className="nav-link" to="/" >Home </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about" >About  </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects" >Projects </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/testimonials" >Testimonials </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact" >Contact </Link>
      </li>
    </ul>
    </div>
    </div>    
  </div>
</nav>


    </div>
  )
}


export default Header
