import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FaFacebookF, FaTelegram, FaWhatsapp } from "react-icons/fa"
import { FiLinkedin, FiInstagram } from "react-icons/fi"
import * as footerStyle from "./footer.module.css"

const MaintFooterSection = () => {
  return (
    <>
      <Container fluid className={`${`footer`} ${``}`} style={{ backgroundColor: "#303030" }}>
        <Row>
          <Col
            xs={12}
            md={3}
            className="d-flex flex-row bd-highlight mb-3 mt-3"
          >
            <div className="p-2 bd-highligh">
              <FaFacebookF className={footerStyle.sc_media} />
            </div>
            <div className="p-2 bd-highligh">
              <FiInstagram className={footerStyle.sc_media} />
            </div>
            <div className="p-2 bd-highligh">
              <FiLinkedin className={footerStyle.sc_media} />
            </div>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex flex-column bd-highlight mb-3 mt-3"
          >
            <div>
              <h3 className={footerStyle.ft_title}>Useful Links</h3>
            </div>

            <div className={`${footerStyle.ft_sub_title} ${`p-2`}`}>
              Services
            </div>
            <div className={`${footerStyle.ft_sub_title} ${`p-2`}`}>
              Contact us
            </div>
            <div className={`${footerStyle.ft_sub_title} ${`p-2`}`}>
              Terms of Services
            </div>
            <div className={`${footerStyle.ft_sub_title} ${`p-2`}`}>
              Privacy Policy
            </div>
          </Col>
          <Col
            xs={12}
            md={3}
            className="d-flex flex-column bd-highlight mb-3 mt-3"
          >
            <div>
              <h3 className={footerStyle.ft_title}>Popular Blogs</h3>
            </div>

            <div className={`${footerStyle.ft_bg_title} ${`p-2`}`}>
              How to Build User Flows October 12, 2020 Design
            </div>
            <div className={`${footerStyle.ft_bg_title} ${`p-2`}`}>
              How to Build User Flows October 12, 2020 Design
            </div>
            <div className={`${footerStyle.ft_bg_title} ${`p-2`}`}>
              How to Build User Flows October 12, 2020 Design
            </div>
            <div className={`${footerStyle.ft_bg_title} ${`p-2`}`}>
              How to Build User Flows October 12, 2020 Design
            </div>
          </Col>

          <Col
            xs={12}
            md={3}
            className="d-flex flex-column bd-highlight mb-3 mt-3"
          >
            <div>
              <h3 className={footerStyle.ft_title}>Paris</h3>
              <div className={`${footerStyle.ft_sub_title} ${`p-1`}`}>
                Phone: +1 888 598 0440
              </div>
              <div className={`${footerStyle.ft_sub_title} ${`p-1`}`}>
                Email: eugo.teams@gmail.com
              </div>
              <div className={`${footerStyle.ft_sub_title} ${`p-1`}`}>
                Address: 16 rude de conde, 7501 paris
              </div>
            </div>

            <div className={`${footerStyle.ft_sub_title} ${`p-2`}`}>
              <h3 className={footerStyle.ft_title}>Let’s Chat On:</h3>
              <div className={`${footerStyle.ft_sub_title} `}>
                <FaTelegram />
                &nbsp; Telegram
              </div>
              <div className={`${footerStyle.ft_sub_title} `}>
                <FaWhatsapp />
                &nbsp; WhatsApp
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={12} className="text-center">
            <div className="dropdown-divider"></div>
            <div className={`${`mt-4`} ${`mb-4`} ${footerStyle.tag}`}>
              © CopyRight 2021 Created with ♥ in meghaSolution
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default function footer() {
  return (
    <div>
      <MaintFooterSection />
    </div>
  )
}
