/*jshint esversion: 6 */
import React, { useState } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import localStorage from "localforage"

const IndexPage = () => {
  const [user, setUser] = useState("nobody")
  localStorage.setItem("name", "Andrew Gray")
  localStorage.getItem("name", function(err, value) {
    console.log(`error: ${err}`)
    if (!err) setUser(value)
  })

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great. {user}</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
