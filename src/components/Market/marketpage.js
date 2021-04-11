import React,{Component} from "react"
import { Container, Row, Col, Card } from "react-bootstrap"
//import Emarket from "../images/emarket.png"
import { itemList } from "../model/data"
import { BiEuro } from "react-icons/bi"



export default class Market extends Component {

   SectionMain = () => {
    return (
      <>
        <Container
          fluid
          className="py-5 text-center"
          style={{ backgroundColor: "#021B32" }}
        >
          <Row className="py-lg-5">
            <Col lg={6} md={8} className="mx-auto" style={{ color: "white" }}>
              <h1 className="fw-light">E - market</h1>
              <p className="lead text-muted">
                We are not flipkart or amazone the main purpose of this site is to
                rent the good which are required by the student during his/her
                stay. And sell goods whixh keep them warmer.
              </p>
              <p></p>
            </Col>
          </Row>
        </Container>
      </>
    )
  }
  
   SectionProductList = () => {
    return (
      <div className="album py-5 bg-light">
        <Container>
          <Row xs={1} sm={2} md={3}>
            {itemList.map((product, index) => (
              <Col key={index}>
                <Card className="mb-4 shadow-sm">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.productname}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                  </Card.Body>
                  <Card.Text className="pl-3">RefId:{product.id}</Card.Text>
                  <Card.Text className="pl-3">
                    Price: {product.price} <BiEuro />
                  </Card.Text>
                  <Card.Footer>
                    <small className="text-muted"> available : 9 </small>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    )
  }
  
   Marketpage() {
    return (
      <>
        {this.SectionMain()}
       {this.SectionProductList()}
      </>
    )
  }
  render(){
    return <>{this.Marketpage()}</>
  }
}

