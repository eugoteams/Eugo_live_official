import React from "react"
import { Container, Row, Col, Image, Button, Card } from "react-bootstrap"
//import happystudent from "../images/happystudent.jpg"
import process from "../../images/process.jpg"
import pizzahutlogo from "../../images/pizzahutlogo.png"
import ubereat from "../../images/ubereat.png"
import md from "../../images/md.png"
import stuart from "../../images/stuart.png"
import epita from "../../images/epita.png"
import delivero from "../../images/delivero.png"
import one from "../../images/one.png"
import two from "../../images/two.png"
import three from "../../images/three.png"
import four from "../../images/four.png"
import blogpost from "../../images/blogpost.jpg"
import dashboard from "../../images/dashboard.jpg"
import career from "../../images/career.png"
import house from "../../images/house.png"
import MainPhoto from "../../images/main.png"
import * as containerStyles from "./home.module.css"


const HeaderSection = () => {
  return (
    <Container fluid style={{ backgroundColor: "#021B32", height: "550px" }}>
      <Row className="py-4">
        <Col xs={12} md={6}>
          <div>
            <h1 className={containerStyles.eu}>
              Career gateway to Europe:
              <span className={containerStyles.textanim}></span>
            </h1>
          </div>
          <div className={`pt-4 mt-4`}>
            <p className={containerStyles.eudesc}>
              Eugo is an omnichannel analytics platform for students. we help
              you to make strategic decisions and optimize your budget based on
              our e-store database and algorithms. test Eugo is an omnichannel
              analytics platform for students. we help you to make strategic
              decisions and optimize your budget based on our e-store database
              and algorithms. test
            </p>
          </div>
          <div className={`pt-4 mt-3`}>
            <Button className={containerStyles.bt_styl}>Try now</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button className={containerStyles.bt_styl}>Learn more</Button>
          </div>
        </Col>
        <Col xs={12} md={6} className={`d-none d-md-block`}>
          <Image src={MainPhoto} alt="image.png" fluid />
        </Col>
      </Row>
    </Container>
  )
}

const ProcessSection = () => {
  return (
    <Container className="py-5 my-5">
      <Row className="py-4  my-4">
        <Col xs={12} md={6}>
          <div>Sounds awesome</div>
          <p className={containerStyles.border}></p>
          <br />
          <h2 className={containerStyles.title}>Why Eugo ?</h2>
        </Col>
      </Row>
      <Row className="py-5  my-5">
        <Col xs={12} md={6}>
          <Image
            src={process}
            alt="process.png"
            className={containerStyles.floating}
          />
        </Col>
        <Col xs={12} md={6}>
          <div className={containerStyles.desc}>
            <h1>Our process</h1>
            <p className={`${containerStyles.eudesc} ${`pt-5`}`}>
              we are the first ever e-platform which helps student to pursue
              there higher education in europe.Our main objective is to help
              students make desicions regarding their higher education and put
              every thing transperent and more over he can interact with
              university directly with out paying a single penie from his
              pocket. Our maingoal is to help student plan his arrival in europe
              and preddict his future in europe thanks to our algorythums which
              is iterlinked with the huge database.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const ClientSection = () => {
  const imgs = [pizzahutlogo, ubereat, md, stuart, delivero, epita]

  const img_dis = []
  imgs.forEach((img, index) => {
    if (index === 3) {
      img_dis.push(
        <Col className={`${` py-3 px-lg-5`} ${`pt-4`} ${`mt-5`}`} key={index}>
          <Image src={img} alt="img.png" width="120" height="50" fluid />
        </Col>
      )
    } else {
      img_dis.push(
        <Col xs={6} md={3} className=" py-3 px-lg-5 pt-4 mt-5" key={index}>
          <Image src={img} alt="img.png" fluid />
        </Col>
      )
    }
  })
  return (
    <Container className="py-2 my-2">
      <Row>
        <Col xs={12} md={6}>
          <div>Brands we proud to work with</div>
          <p className={containerStyles.border}></p>
          <br />
          <br />
          <h2 className={containerStyles.title}>We love our clients</h2>
        </Col>
      </Row>
      <Row sm={1} md={3} className="justify-content-center py-3 my-3">
        <>{img_dis}</>
      </Row>
    </Container>
  )
}

const FullServiceSection = () => {
  return (
    <>
      <Container className="py-4 my-4">
        <Row className="py-3 my-3">
          <Col xs={12} md={12} className="align-self-end">
            <div>Moving on</div>
            <p className={containerStyles.border}></p>
            <br />
            <h2 className={containerStyles.title}>Why is a Full-process ?</h2>
          </Col>
        </Row>
        <Row className="py-4 my-4">
          <Col xs={12} md={3} className="pt-2 mt-2">
            <Card className="border border-white">
              <Card.Img src={one} alt="Card image" style={{ opacity: 0.2 }} />
              <Card.ImgOverlay>
                <Card.Title>Career, Pre-Research</Card.Title>
                <Card.Text>
                  Brand research involves many variables to identify potential
                  gaps and then solve them.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={3} className="pt-5 mt-5">
            <Card className="border border-white">
              <Card.Img src={two} alt="Card image" style={{ opacity: 0.2 }} />
              <Card.ImgOverlay>
                <Card.Title>Financial Strategy</Card.Title>
                <Card.Text>
                  Brand research involves many variables to identify potential
                  gaps and then solve them.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={3} className="pt-2 mt-2">
            <Card className="border border-white">
              <Card.Img src={three} alt="Card image" style={{ opacity: 0.2 }} />
              <Card.ImgOverlay>
                <Card.Title>Admisssion</Card.Title>
                <Card.Text>
                  Brand research involves many variables to identify potential
                  gaps and then solve them.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
          <Col xs={12} md={3} className="pt-5 mt-5">
            <Card className="border border-white">
              <Card.Img src={four} alt="Card image" style={{ opacity: 0.2 }} />
              <Card.ImgOverlay>
                <Card.Title>Accomodation,PartTime</Card.Title>
                <Card.Text>
                  Brand research involves many variables to identify potential
                  gaps and then solve them.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const CapabilitiesSection = () => {
  return (
    <>
      <Container className="py-5 my-5">
        <Row>
          <Col xs={12} md={6}>
            <div>Our Services</div>
            <p className={containerStyles.border}></p>
            <br />
            <br />
            <h2 className={containerStyles.title}>Look at our capabilities</h2>
          </Col>
        </Row>
        <Row className="py-5 my-5">
          <Col xs={12} md={6}>
            <Image
              src={blogpost}
              alt="img.png"
              className={containerStyles.floating}
              fluid
            />
          </Col>
          <Col xs={12} md={6}>
            <div className={`mt-auto`}>
              <h2
                className={`${
                  containerStyles.title
                } ${"text-center py-3 my-3"}`}
              >
                Blogs
              </h2>
              <br />
              <p className={`${containerStyles.desc} ${`m-3`} ${`pt-3`} `}>
                Targeted advertising campaigns on Facebook, Instagram, LinkedIn,
                Snapchat, Youtube allow you to get more potential clients into
                your funnel and increase revenue drastically. We increase ROI
                and ROAS by segmenting the audience to bring the individual
                message to each audience. Bringing them the maximum value, and
                you the maximum profit.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="py-5 my-5">
          <Col xs={12} md={6} className={`order-2 order-md-1 py-3 my-3`}>
            <div className={`mt-auto`}>
              <h2 className={`${containerStyles.title} ${"text-center"} `}>
                Dashboard
              </h2>
              <br />
              <p className={`${containerStyles.desc} ${`m-3`} ${`pt-3`}`}>
                Targeted advertising campaigns on Facebook, Instagram, LinkedIn,
                Snapchat, Youtube allow you to get more potential clients into
                your funnel and increase revenue drastically. We increase ROI
                and ROAS by segmenting the audience to bring the individual
                message to each audience. Bringing them the maximum value, and
                you the maximum profit.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className={`${`order-1 order-md-1`} `}>
            <Image
              src={dashboard}
              alt="img.png"
              className={containerStyles.floating}
              fluid
            />
          </Col>
        </Row>
        <Row className="py-5 my-5">
          <Col xs={12} md={6}>
            <Image
              src={career}
              alt="img.png"
              className={containerStyles.floating}
              fluid
            />
          </Col>
          <Col xs={12} md={6} className="py-3 my-3">
            <div className={`mt-auto`}>
              <h2 className={`${containerStyles.title} ${"text-center"} `}>
                Expert Advice
              </h2>
              <br />
              <p className={`${containerStyles.desc} ${`m-3`} ${`pt-3`}`}>
                Targeted advertising campaigns on Facebook, Instagram, LinkedIn,
                Snapchat, Youtube allow you to get more potential clients into
                your funnel and increase revenue drastically. We increase ROI
                and ROAS by segmenting the audience to bring the individual
                message to each audience. Bringing them the maximum value, and
                you the maximum profit.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="py-5 my-5">
          <Col
            xs={12}
            md={6}
            className={`${`order-2 order-md-1`} ${`py-3 my-3`}`}
          >
            <div className={`mt-auto`}>
              <h2 className={`${containerStyles.title} ${"text-center"}`}>
                Accomodation
              </h2>
              <br />
              <p className={`${containerStyles.desc} ${`m-3`} ${`pt-3`}`}>
                Targeted advertising campaigns on Facebook, Instagram, LinkedIn,
                Snapchat, Youtube allow you to get more potential clients into
                your funnel and increase revenue drastically. We increase ROI
                and ROAS by segmenting the audience to bring the individual
                message to each audience. Bringing them the maximum value, and
                you the maximum profit.
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} className={`order-1 order-md-2`}>
            <Image
              src={house}
              alt="img.png"
              className={containerStyles.floating}
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}

//Main Fragment
export default function home() {
  return (
    <div>
      <HeaderSection />
      <ProcessSection />
      <ClientSection />
      <FullServiceSection />
      <CapabilitiesSection />
    </div>
  )
}
