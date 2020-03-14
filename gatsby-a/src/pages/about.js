import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Me</h1>
      <h2>I currently program this page</h2>
      <p>
        Go to <a href="http://www.twitter.com/"> Twitter</a>
      </p>
    </Layout>
  )
}

export default AboutPage
