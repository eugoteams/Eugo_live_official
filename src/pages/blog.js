import React from 'react'
import Layout from "../components/layout"
import { graphql, navigate } from "gatsby"
import Img from "gatsby-image"
import parse from 'html-react-parser'
import { Card, Container, Row, Col, Image } from "react-bootstrap"
import NoImage from "../images/noimage.png"


const Blog = ({ data }) => {
    const edges = data.allMarkdownRemark.edges
    console.log("data,", data.allMarkdownRemark.edges[0].node.frontmatter.date)

    return (
        <Layout>
            <div>
                <div
                    style={{
                        margin: `0 auto`,
                        maxWidth: 960,
                        padding: `0 1.0875rem 1.45rem`,
                    }}>
                    {
                        <div className="album py-5 bg-light">
                            <Container>
                                <Row xs={1} sm={2} md={3}>
                                    {edges.map((element, index) => (
                                        <Col key={index}>
                                            <Card className="mb-4 shadow-sm" onClick={() => { navigate("/blog/" + (element.node.frontmatter.path).toLowerCase()) }}  >
                                                <Card.Img variant="top" src={NoImage} />
                                                <Card.Body>
                                                    <Card.Title>{element.node.frontmatter.title}</Card.Title>
                                                    <Card.Text>{element.node.frontmatter.description}</Card.Text>
                                                </Card.Body>
                                                <Card.Text className="pl-3">
                                                    {element.node.frontmatter.tag}
                                                </Card.Text>
                                                <Card.Text className="pl-3">
                                                </Card.Text>
                                                <Card.Footer>
                                                    {element.node.frontmatter.date}
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Container>
                        </div>
                    }
                </div>
            </div>
        </Layout>
    )
}

export default Blog


export const MyQuery = graphql`
query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            tag
            description
            title
            image {
              absolutePath
            }
            path
          }
        }
      }
    }
  }
`