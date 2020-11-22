import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

export default function AboutPage() {
  return (
    <Layout>
      <Head title="About" />

      <h1>./About</h1>
        <h2>I'm pretty cool.</h2>
        <p>
          Want to work with me? Reach out: <Link to="/contact">Contact me.</Link>
        </p>
      <h3>// built with</h3>
      <ul>
        <li><a href='https://gatsbyjs.org' target='_blank'> Gatsby </a>(React-framework)</li>
        <li><a href='https://reactjs.org' target='_blank'> React </a>(front-end library)</li>
        <li><a href='https://graphql.org' target='_blank'> GraphQL </a> (API)</li>
        <li><a href='https://contentful.com' target='_blank'> Contentful </a> (headless CMS)</li>
        <li><a href='https://netlify.com' target='_blank'> Netlify </a> (hosting, deployment)</li>
      </ul>
    </Layout>
  )
}
