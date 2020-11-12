import React from "react"
import { graphql } from "gatsby"
import Layout from "../component/layout"
import styles from "../component/products.module.css"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.page}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Img fluid={product.image.fluid} alt={product.title} />
              <h3>
                {product.title}
                <span> ${product.price}</span>
              </h3>
              <h3>
                <Link to={`/products/${product.slug}`}>more detail</Link>
              </h3>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        price
        title
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
