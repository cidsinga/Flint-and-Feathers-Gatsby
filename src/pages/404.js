import React from "react"

import Layout from "../components/layout"
import Error404 from '../components/Error404'
import SEO from "../components/seo"

export default () => 
  <Layout>
    <SEO title="404: Not found" />
    <Error404 />
  </Layout>

