import React from "react"
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap"
import { GiEuropeanFlag } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { TiThMenu } from "react-icons/ti"
import { GoHome } from "react-icons/go"
import { GrBlog } from "react-icons/gr"
import { FaCreditCard, FaTeamspeak } from "react-icons/fa"
import * as navbarStyle from "./navbar.module.css"
import { Link } from "gatsby"
import Login from "../login"


const CustomNavbar = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  const onClose = () => setShowResults(false)

  const FullScreenMenu = () => {
    return (
      <Container fluid className={`${navbarStyle.big_menu} ${``}`}>
        <Row>
          <Col className="text-left">
            <div className={`${`text-left`} ${navbarStyle.close}`}>
              <AiOutlineClose onClick={onClose} />
            </div>
          </Col>
        </Row>
        <Container className="py-5">
          <Row className="py-4">
            <Col sm={12} md={12} className="text-center">
              <div>
                <Nav.Link href="/">
                  <GoHome /> Home
                </Nav.Link>
              </div>
            </Col>
          </Row>
          <Row className="py-4">
            <Col sm={12} md={12} className="text-center">
              <div>
                <Nav.Link href="/blog">
                  <GrBlog /> Blogs
                </Nav.Link>
              </div>
            </Col>
          </Row>
          <Row className="py-4">
            <Col sm={12} md={12} className="text-center">
              <div>
                <Nav.Link>
                  <FaCreditCard /> Purchase
                </Nav.Link>
              </div>
            </Col>
          </Row>
          <Row className="py-4">
            <Col sm={12} md={12} className="text-center">
              <div>
                <Nav.Link href="/aboutus">
                  <FaTeamspeak /> Team
                </Nav.Link>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <div className={navbarStyle.tag}>
                © CopyRight 2020 Created with ♥ in meghaSolution
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }

  /**
   * Big Screen nav
   */
  return (
    <>
      <Container
        className="py-2"
        fluid
        style={{
          backgroundColor: "#021B32",
          height: "65px",
        }}
      >
        <Row className="d-none d-sm-none d-lg-flex ">
          <Col md={3}>
            <Navbar.Brand href="/" className={navbarStyle.logo}>
              Eug
              <GiEuropeanFlag style={{ color: "red" }} />
            </Navbar.Brand>
          </Col>
          <Col md={6} className="text-center">
            <Nav className="justify-content-center">
              <Link
                to="/"
                className={`${navbarStyle.nav_item_style} `}
                activeStyle={{ color: "red" }}
              >
                Home
              </Link>
              <Link
                to="/blog"
                className={`${navbarStyle.nav_item_style} `}
                activeStyle={{ color: "red" }}
              >
                Blogs
              </Link>
              <Link
                to="/price"
                className={`${navbarStyle.nav_item_style} `}
                activeStyle={{ color: "red" }}
              >
                Purchase
              </Link>
              <Link
                to="/aboutus"
                className={`${navbarStyle.nav_item_style}`}
                activeClassName={navbarStyle.actStyl}
              >
                Team
              </Link>
            </Nav>
          </Col>
          <Col
            md={3}
            className={`${navbarStyle.nav_login_style} ${`text-center`}`}
          >
            <Login />
          </Col>
        </Row>

        <Row sm={3} className=" d-sm-flex d-lg-none">
          <Col className="p-2">
            <div style={{ paddingLeft: "3px" }}>
              <TiThMenu
                style={{
                  color: "white",
                  height: "30px",
                  width: "30px",
                  padding: "2xp",
                }}
                onClick={onClick}
              />
            </div>
            {showResults ? <FullScreenMenu /> : null}
          </Col>
          <Col className="text-center p-2">
            <div>
              <Navbar.Brand href="/" className={navbarStyle.logo}>
                Eug
                <GiEuropeanFlag style={{ color: "red" }} />
              </Navbar.Brand>
            </div>
          </Col>
          <Col className="text-right">
            <div className={`${navbarStyle.nav_item_style} ${`pt-2`}`} >
           <Login />
             
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default function navbar() {
  return (
    <>
      <CustomNavbar />
    </>
  )
}
