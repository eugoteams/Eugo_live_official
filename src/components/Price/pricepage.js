import React from "react"
import * as  priceStyle from "./pricepage.module.css"
import { Container, Row, Col, Button } from "react-bootstrap"
import { FaRupeeSign, FaTelegramPlane, FaWhatsapp } from "react-icons/fa"
import { ImCircleRight } from "react-icons/im"
import { RiShieldStarFill } from "react-icons/ri"
import { AiFillStar } from "react-icons/ai"

const MainSection = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#021B32", height: "550px" }}>
        <Row>
          <Col xs={12} md={12} className="text-center py-5">
            <h1 className={priceStyle.first_title}>Pricing</h1>
            <br />
            <br />
            <div className={priceStyle.desc}>
              We Offer variety of services which make your career path easy and
              concentrate on your goal.please check out our other services.
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="py-4">
        <Row className={` ${`p-auto mt-5`}`}>
          <Col xs={12} md={12} className={`${`text-center`} ${`p-auto mt-5`}`}>
            <h1 className={priceStyle.second_title}>How much ?</h1>
          </Col>
        </Row>
      </Container>
      <Container className="py-3">
        <Row className={` ${`p-auto mt-5 py-5`}`}>
          <Col xs={12} md={4} className={`${`text-center`} ${`p-auto mt-5`}`}>
            <h1 className={`${priceStyle.third_title} ${`mb-4`}`}>
              Startup Service
            </h1>
            <div className="dropdown-divider"></div>
            <div>
              <h1 className={`${priceStyle.price_title} ${`mb-3`}`}>
                0 <FaRupeeSign />
              </h1>
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;Dashboard
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;Search
              accomodation
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;Search
              University
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;Communication by
              email
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;General Query
              <code>[delay response :5d]</code>
            </div>
            <div className="dropdown-divider"></div>
          </Col>
          <Col xs={12} md={4} className={`${`text-center`} ${`p-auto mt-5`}`}>
            <h1 className={`${priceStyle.third_title} ${`mb-4`}`}>
              Dedicated Service
            </h1>
            <div className="dropdown-divider"></div>
            <div>
              <h1 className={`${priceStyle.price_title} ${`mb-3`}`}>
                28,000
                <FaRupeeSign />
              </h1>
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;Dashboard
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;We Search
              accomodation
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;We Search
              University
            </div>

            <div className="dropdown-divider"></div>
            <div>
              <RiShieldStarFill style={{ color: "blue" }} /> &nbsp; Personal
              Advisor &nbsp;
              <code>[avaible: 24/7]</code>
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <RiShieldStarFill style={{ color: "blue" }} /> &nbsp; career
              advisor &nbsp;
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <RiShieldStarFill style={{ color: "blue" }} /> &nbsp; Financial
              Strategy &nbsp;
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp; Country apply:
              1 &nbsp;
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp; Documentation
              &nbsp;
              <code>[** transscripts ,loan paper you should provide. ]</code>
            </div>
            <div className="dropdown-divider"></div>
          </Col>
          <Col xs={12} md={4} className={`${`text-center`} ${`p-auto mt-5`}`}>
            <h1 className={`${priceStyle.third_title} ${`mb-4`}`}>
              {" "}
              EU - Service{" "}
            </h1>
            <div className="dropdown-divider"></div>
            <div>
              <h1 className={`${priceStyle.price_title} ${`mb-3`}`}>
                52,400
                <FaRupeeSign />
              </h1>
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;Dashboard
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;We Search
              accomodation
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp;We Search
              University
            </div>

            <div className="dropdown-divider"></div>
            <div>
              <RiShieldStarFill style={{ color: "blue" }} /> &nbsp; Personal
              Advisor &nbsp;
              <code>[avaible: 24/7]</code>
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp; Country apply:
              &nbsp; <code>all eu Country</code> &nbsp;
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <RiShieldStarFill style={{ color: "blue" }} /> &nbsp; career
              advisor &nbsp;
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <RiShieldStarFill style={{ color: "blue" }} /> &nbsp; Financial
              Strategy &nbsp;
            </div>
            <div className="dropdown-divider"></div>
            <div>
              <ImCircleRight style={{ color: "blue" }} /> &nbsp; Documentation
              &nbsp;
              <code>[** transscripts ,loan paper you should provide. ]</code>
            </div>
            <div className="dropdown-divider"></div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const OtherServices = () => {
  return (
    <>
      <Container className={`${`mt-5`}`}>
        <Row className={`${`mt-5`}`}>
          <Col className={`${`mt-5`} ${`d-flex flex-column p-2`}`}>
            <h1 className={priceStyle.third_title}>Other services : </h1>
            <div className={`p-2`}>
              <AiFillStar /> Communication Skill Deveopment .
              <code>[coming soon]</code>
            </div>
            <div className={`p-2`}>
              <AiFillStar /> French , German Language Courses .
              <code>[coming soon]</code>{" "}
            </div>
            <div className={`p-2`}>
              <AiFillStar /> HTML,CSS,react,angular Tutorials.
              <code>[coming soon]</code>{" "}
            </div>
            <div className={`p-2`}>
              <AiFillStar /> More brainstromming happening.
              <code>[coming soon]</code>{" "}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const Communication = () => {
  return (
    <>
      <Container className={`${`mt-5`}`}>
        <Row className={`${`mt-5`}`}>
          <Col xs={12} md={6} className={`${`mt-5`}`}>
            <h1 className={priceStyle.fourth_title}> Get a quote</h1>
            <br />
            <Button className={priceStyle.bt_styl1}>Contact us</Button>
          </Col>
          <Col
            xs={12}
            md={6}
            className={`${`mt-5`} ${`d-flex flex-column p-2`}`}
          >
            <div className={`p-2`}>
              <h1 className={priceStyle.fourth_title}> Or let' chat</h1>
            </div>
            <div className={`p-2`}>
              <Button className={priceStyle.bt_styl}>
                Telegram <FaTelegramPlane />
              </Button>
            </div>
            <div className={`p-2`}>
              <Button className={priceStyle.bt_styl}>
                Whatsapp <FaWhatsapp />
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default function pricepage() {
  return (
    <>
      <MainSection />
      <OtherServices />
      <Communication />
    </>
  )
}
