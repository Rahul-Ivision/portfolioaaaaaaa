import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <div className="primary col-lg-8 col-12">
      <section class="section">
        <div className="section-inner">
          <div className="content">
            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <div>
                <label>Your Email:</label>
                <input type="email" name="email" />
              </div>
              <div>
                <label>Message:</label>
                <textarea name="message" />
              </div>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  </Layout>
)

export default ContactPage
