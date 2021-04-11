import React from "react"
import * as meetteamStyle from "./meetteam.module.css"

import { Container, Row, Col, Card, Image } from "react-bootstrap"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import target from "../../images/target.png"
import ceo1 from "../../images/ceo1.png"
import ceo2 from "../../images/ceo2.jpg"

const SubSection = () => {
  return (
    <>
      <Row>
        <Col xs={12} md={4}>
          <Image src={target} />
        </Col>
        <Col xs={12} md={8} className={`${`d-flex flex-column mt-3`} ${``}`}>
          <div className={`${`p-2 mt-2`}`}>
            <h1 className={meetteamStyle.sm_title}>
              Eugot was founded in 2021 with the desire to play an active role
              in the digitalization of higher education industry
            </h1>
          </div>
          <br />
          <br />
          <div className={`${`p-2 mt-5`}`}>
            <p className={meetteamStyle.desc}>
              World’s biggest brands trust our software to support them with
              daily insight into their market. We collect more than 7 billion
              point-of-sale data every day. Our Artificial Intelligence and Big
              Data technologies connect this information with your internal data
              to offer you a true data set and a 360° view of the market. We
              provide a complete monitoring tool where you can visualize all
              your analysis in one click. To find out more about our tool, visit
              the Solutions page.
            </p>
          </div>
          <br />
          <div className={`${`p-2 mt-4`}`}>
            <p className={meetteamStyle.desc}>
              <ImQuotesLeft /> we make your stay career path easy as never
              before <ImQuotesRight />
            </p>
          </div>
        </Col>
      </Row>
    </>
  )
}

const Section1 = () => {
  return (
    <>
      <Container fluid style={{ backgroundColor: "#021B32", color: "white" }}>
        <Row className={`${`text-center py-5`}`}>
          <Col xs={12} md={12}>
            <h1>We transform complex data into simple actions</h1>
          </Col>
        </Row>
        <Row className={`${`mt-5 p-2`}`}>
          <Col xs={12} md={12}>
            <Card
              className={`${`text-center border-0 shadow-lg p-3 mb-5 bg-white rounded`}`}
            >
              <Card.Body
                style={{
                  backgroundColor: "#ffffff",
                  backgroundImage:
                    "linear-gradient(315deg, #ffffff 0%, #d7e1ec 74%)",
                }}
              >
                <SubSection />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className={"py-5"}>
        <Row className={`${`mt-4 p-2  py-5`}`}>
          <Col xs={12} md={6} className={`${`mt-4 p-2`}`}>
            <Card className={`${`border-0`} `}>
              <Card.Body className={`${`d-flex flex-column mb-3`} ${``} `}>
                <div className={`${`p-2 text-center`} ${``}`}>
                  <h1 className={meetteamStyle.team_title}>Meghana Aravi</h1>
                  <sub className={meetteamStyle.sub_title}>CEO, Founder</sub>
                </div>
                <div className={`${`p-2 text-center`}`}>
                  <Image src={ceo1} className={`${``} ${``} ${``}`} fluid />
                </div>
                <div className={`${`p-2 mt-4`} ${meetteamStyle.desc}`}>
                  <p>
                    Meghana aravi is an Ex-Google and Ex-Facebook Software
                    Engineer who runs a YouTube channel with over 200k
                    subscribers. After graduating with a degree in Mathematics
                    from the University of Pennsylvania in May 2016, he decided
                    to learn programming and to enroll in Fullstack Academy, an
                    immersive coding bootcamp in New York City. While there, he
                    fell in love with full-stack development and algorithm
                    analysis. Upon completion of the program, he dove deeper
                    into the field of algorithms and aced the Google interviews.
                    The frustration that he felt during his interview prep led
                    him to creating AlgoExpert. He used AlgoExpert to prepare
                    for the Facebook interviews; unsurprisingly, he aced them!
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className={`${`mt-4 p-2`}`}>
            <Card className={` ${`border-0`}`}>
              <Card.Body className={`${`d-flex flex-column mb-3`} ${``} `}>
                <div className={`${`p-2 text-center`} ${``}`}>
                  <h1 className={meetteamStyle.team_title}>Vijay Rolla</h1>
                  <sub className={meetteamStyle.sub_title}>
                    Opeartion head, Co-founder
                  </sub>
                </div>
                <div className={`${`p-2 text-center`}`}>
                  <Image src={ceo1} className={`${``} ${``} ${``}`} fluid />
                </div>
                <div className={`${`p-2 mt-4`} ${meetteamStyle.desc}`}>
                  <p>
                    Meghana aravi is an Ex-Google and Ex-Facebook Software
                    Engineer who runs a YouTube channel with over 200k
                    subscribers. After graduating with a degree in Mathematics
                    from the University of Pennsylvania in May 2016, he decided
                    to learn programming and to enroll in Fullstack Academy, an
                    immersive coding bootcamp in New York City. While there, he
                    fell in love with full-stack development and algorithm
                    analysis. Upon completion of the program, he dove deeper
                    into the field of algorithms and aced the Google interviews.
                    The frustration that he felt during his interview prep led
                    him to creating AlgoExpert.
                    <br />
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className={`${`mt-4 p-2`}`}>
            <Card className={`${`border-0`}`}>
              <Card.Body className={`${`d-flex flex-column mb-3`} ${``} `}>
                <div className={`${`p-2 text-center`} ${``}`}>
                  <h1 className={meetteamStyle.team_title}>
                    Vinay Kumar Pilla
                  </h1>
                  <sub className={meetteamStyle.sub_title}>Advisory head</sub>
                </div>
                <div className={`${`p-2 text-center mt-5`}`}>
                  <Image src={ceo2} className={`${``} ${``} ${``}`} fluid />
                </div>
                <div className={`${`p-2 mt-4`} ${meetteamStyle.desc}`}>
                  <p>
                    Meghana aravi is an Ex-Google and Ex-Facebook Software
                    Engineer who runs a YouTube channel with over 200k
                    subscribers. After graduating with a degree in Mathematics
                    from the University of Pennsylvania in May 2016, he decided
                    to learn programming and to enroll in Fullstack Academy, an
                    immersive coding bootcamp in New York City. While there, he
                    fell in love with full-stack development and algorithm
                    analysis. Upon completion of the program, he dove deeper
                    into the field of algorithms and aced the Google interviews.
                    The frustration that he felt during his interview prep led
                    him to creating AlgoExpert. He used AlgoExpert to prepare
                    for the Facebook interviews; unsurprisingly, he aced them!
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} className={`${`mt-4 p-2`}`}>
            <Card className={`${`border-0`}`}>
              <Card.Body className={`${`d-flex flex-column mb-3`} ${``} `}>
                <div className={`${`p-2 text-center`} ${``}`}>
                  <h1 className={meetteamStyle.team_title}>Karthik Maturi</h1>
                  <sub className={meetteamStyle.sub_title}>CTO, Co-founder</sub>
                </div>
                <div className={`${`p-2 text-center`}`}>
                  <Image src={ceo1} className={`${``} ${``} ${``}`} fluid />
                </div>
                <div className={`${`p-2 mt-4`} ${meetteamStyle.desc}`}>
                  <p>
                    Meghana aravi is an Ex-Google and Ex-Facebook Software
                    Engineer who runs a YouTube channel with over 200k
                    subscribers. After graduating with a degree in Mathematics
                    from the University of Pennsylvania in May 2016, he decided
                    to learn programming and to enroll in Fullstack Academy, an
                    immersive coding bootcamp in New York City. While there, he
                    fell in love with full-stack development and algorithm
                    analysis. Upon completion of the program, he dove deeper
                    into the field of algorithms and aced the Google interviews.
                    The frustration that he felt during his interview prep led
                    him to creating AlgoExpert. He used AlgoExpert to prepare
                    for the Facebook interviews; unsurprisingly, he aced them!
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default function meetteam() {
  return (
    <>
      <Section1 />
    </>
  )
}
