import React from "react"
import Header from "../examples/Header"
import HeaderStatic from "../examples/HeaderStatic"
import Layout from "../component/layout"
import { graphql } from "gatsby"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <p>hello from example page</p>
      <Header />
      <HeaderStatic />
      <h5>{author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query Myquery {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`

export default examples
