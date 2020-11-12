import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/image-1.jpg"
import Img from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-3.jpg" }) {
      childImageSharp {
        fixed(width: 200, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-4.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    example: file(relativePath: { eq: "image-4.png" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  console.log(data)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} alt="" width="100%" />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fixed image</h3>
        <Img fixed={data.fixed.childImageSharp.fixed} />
        <h2>Content</h2>
      </article>
      <article className="single-image">
        <h3>fluid images/svg</h3>
        <Img fluid={data.fluid.childImageSharp.fluid} />
        <div className="small">
          <Img fluid={data.fluid.childImageSharp.fluid} />
          <h2>Content</h2>
        </div>
        <Img fluid={data.example.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
