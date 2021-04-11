import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import parse from 'html-react-parser'



const BlogPost = ({ data }) => {
    console.log("data,", data.markdownRemark.fields.slug)
    const image = "../../../static/" + data.markdownRemark.frontmatter.image
    console.log("Image ::" + image)
    return (
        <div>
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}>
                <h2>{data.markdownRemark.frontmatter.title}</h2>
                <Img
                    fixed={data.markdownRemark.frontmatter.image.childImageSharp.fixed}
                />
                <div>  {parse(data.markdownRemark.html)}</div>
            </div>
        </div>
    )
}

export default BlogPost

export const BlogPostTemplateQuery = graphql`
  query BlogPostTemplateQuery($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        image {
            childImageSharp {
              fixed(width: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
    html
    }
  }
`