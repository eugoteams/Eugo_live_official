import React, { Component } from "react"
import { GoogleLogin, GoogleLogout } from "react-google-login"
import {
  Image,
  Button,
  OverlayTrigger,
  Popover,
  ListGroup,
} from "react-bootstrap"
import { FiLogOut } from "react-icons/fi"
import { IoMdArrowDropdown } from "react-icons/io"
import { handleLogin } from "../services/auth"
import { navigate } from "gatsby"



export default class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loginbtx: true,
      userimage: "",
      username: "",
      modalShow: false,
      showDropDown: false,
    }
  }

  responseLoginGoogle = response => {
    console.log(">>>>>>>>>>>>>>>>> Logged succesfully")
    handleLogin("true")
    this.setState({
      loginbtx: false,
      userimage: response.profileObj.imageUrl,
      username: response.profileObj.givenName,
      modalShow: false,
    })
  }

  secureSignOut() {
    const auth2 = window.gapi.auth2.getAuthInstance()
    if (auth2 != null) {
      auth2.signOut().then(auth2.disconnect().then(this.props.onLogoutSuccess))
    }
  }

  responseLogoutGoogle = response => {
    console.log(">>>>>>>>>>>>>>>>> Logged out  succesfully")
    handleLogin("false")
    this.secureSignOut()
    this.setState({
      loginbtx: true,
      userimage: "",
      username: "",
    })
  }

  login() {
   return (
      <>
        <GoogleLogin
          clientId="1037660703349-rs1p3l9vs7rivvmee827vlv3j0l85f8b.apps.googleusercontent.com"
          render={renderProps => (
            <div
              role="button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="border-0"
            >
            Login
            </div>
          )}
          buttonText="Login"
          isSignedIn={true}
          onSuccess={this.responseLoginGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </>
    )
  }

  logout() {
    return (
      <>
        <GoogleLogout
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          render={renderProps => (
            <div className="d-flex flex-row justify-content-center">
              <Image
                src={this.state.userimage}
                roundedCircle
                width="35"
                height="35"
              />
              <OverlayTrigger
                trigger="focus"
                key="bottom"
                placement="bottom"
                overlay={
                  <Popover id={`popover-positioned-bottom`}>
                    <Popover.Title as="h3" className="text-center">
                      <i>
                        Welcome, <b>{this.state.username}</b> <br />
                        You're on a Google account.
                      </i>
                    </Popover.Title>
                    <Popover.Content>
                      <ListGroup>
                        <ListGroup.Item className="py-2 text-center">
                          <Button
                            className="border-0"
                            onClick={() => navigate("/app/market")}
                            style={{
                              color: "black",
                              backgroundColor: "transparent",
                            }}
                          >
                            Market place
                          </Button>
                        </ListGroup.Item>
                        <ListGroup.Item className="py-2 text-center">
                          <Button
                            className="border-0"
                            onClick={() => navigate("/app/rent")}
                            style={{
                              color: "black",
                              backgroundColor: "transparent",
                            }}
                          >
                            Accomodation
                          </Button>
                        </ListGroup.Item>
                        <ListGroup.Item className="py-2 text-center">
                          <Button
                            className="border-0"
                            onClick={() => navigate("/app/finance")}
                            style={{
                              color: "black",
                              backgroundColor: "transparent",
                            }}
                           >
                            Finance
                          </Button>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          <Button
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            style={{
                              backgroundColor: "#011A32",
                              width: "100%",
                            }}
                          >
                            {" "}
                            <FiLogOut /> Logout
                          </Button>
                        </ListGroup.Item>
                      </ListGroup>
                    </Popover.Content>
                  </Popover>
                }
              >
                <Button
                  className="border-0"
                  style={{ color: "white", backgroundColor: "transparent"}}
                >
                  {this.state.username} <IoMdArrowDropdown />
                </Button>
              </OverlayTrigger>
            </div>
          )}
          buttonText="Logout"
          onLogoutSuccess={this.responseLogoutGoogle}
        ></GoogleLogout>
      </>
    )
  }

  render() {
    return <div>{this.state.loginbtx ? this.login() : this.logout()}</div>
  }
}
