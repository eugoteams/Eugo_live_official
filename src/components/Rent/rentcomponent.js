import React, { Component } from "react"
import { Container, Row, Col, Image, Card } from "react-bootstrap"
import Rent from "../../images/rent.png"
import { BiEuro } from "react-icons/bi"
import { ImPriceTags } from "react-icons/im"
import { GrMapLocation } from "react-icons/gr"
import { rentList } from "../model/data"
import NoImage from "../../images/noimage.png"


export default class rentcomponent extends Component {
  render() {
    const SectionHouse = () => {
      return (
        <div className="album py-5 bg-light">
          <Container>
            <Row xs={1} sm={2} md={3}>
              {rentList.map((product, index) => (
                <Col key={index}>
                  <Card className="mb-4 shadow-sm">
                    <Card.Img variant="top" src={NoImage} />
                    <Card.Body>
                      <Card.Title>{product.Title}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>
                    </Card.Body>
                    <Card.Text className="pl-3">
                      <GrMapLocation />: &nbsp;&nbsp; {product.location}
                    </Card.Text>
                    <Card.Text className="pl-3">
                      <ImPriceTags /> : &nbsp;&nbsp; {product.price} / month
                      <BiEuro />
                    </Card.Text>
                    <Card.Footer></Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      )
    }

   const  MainCnt = () =>{
      return(
        <div>
        <Container
          fluid
          className="py-5 text-center text-white"
          style={{ backgroundColor: "#021B32" }}
        >
          <Row>
            <Col xs={12} md={12}>
              <Image fluid src={Rent} />
            </Col>
            <Col xs={12} md={12}>
              <h3>
                cheap flat for rent and all the falts which respects the
                guideline .
              </h3>
            </Col>
          </Row>
        </Container>
        <SectionHouse />
      </div>
      )
    }
    return (
       <>
       <MainCnt/>
       </>
    )
  }
}
