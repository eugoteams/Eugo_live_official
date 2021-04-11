import React, { Component } from "react"
import { Table, OverlayTrigger, Tooltip, Form, Row, Col } from "react-bootstrap"
import RangeSlider from "react-bootstrap-range-slider"
import { BsQuestionCircle } from "react-icons/bs"
import { IoMdArrowDropdown } from "react-icons/io"
import { RiArrowUpSFill } from "react-icons/ri"
import { BiRupee } from "react-icons/bi"
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css"
import data from "../../functions/listofbanks"

export default class finance extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listofBank: [],
      loanAmount: 500000,
      loanYear: 3,
    }
  }

  componentDidMount() {
    this.getResource()
  }
  getResource() {
    fetch("/.netlify/functions/listofbanks")
      .then(res => res.text())
      .then(text => {
        this.setState({
          listofBank: JSON.parse(text),
        })
      })
  }

  renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      The ammount charged by the bank to process your loan document.
    </Tooltip>
  )

  displayTable() {
    return (
      <>
        <div>
          <Table striped bordered hover style={{ cursor: "pointer" }}>
            <thead className="text-center">
              <tr>
                <th>#</th>
                <th>Bank Name</th>
                <th>Interest Rate</th>
                <th>
                  Fees{" "}
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={this.renderTooltip}
                  >
                    <BsQuestionCircle />
                  </OverlayTrigger>
                </th>
                <th>EMI</th>
              </tr>
            </thead>
            <tbody>
              {this.state.listofBank.map((element, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{element.name}</td>
                  <td>{element.ir}</td>
                  <td>{element.fees}</td>
                  <td>
                    max
                    <RiArrowUpSFill style={{ color: "red" }} /> :{" "}
                    {Number(
                      this.calculateEmi(
                        element.max,
                        this.state.loanYear,
                        this.state.loanAmount
                      )
                    ).toFixed(1)}{" "}
                    <BiRupee />
                    <br />
                    min
                    <IoMdArrowDropdown style={{ color: "green" }} /> :{" "}
                    {Number(
                      this.calculateEmi(
                        element.min,
                        this.state.loanYear,
                        this.state.loanAmount
                      )
                    ).toFixed(1)}{" "}
                    <BiRupee />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </>
    )
  }

  thousands_separators(num) {
    var num_parts = num.toString().split(".")
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    return num_parts.join(".")
  }

  calculateEmi(rateOfInterest, loantenureyears, loanamount) {
    var monthlyinterestrateration = rateOfInterest / 100 / 12
    var loantenureinmonths = loantenureyears * 12
    var top = Math.pow(1 + monthlyinterestrateration, loantenureinmonths)
    var bottom = top - 1
    var emi = ((loanamount * monthlyinterestrateration * top) / bottom).toFixed(
      3
    )
    return emi
  }

  formToDisplay() {
    return (
      <>
        <div
          style={{ margin: `0 auto`, maxWidth: 1050, padding: `0 1rem` }}
          className="justify-content-md-center"
        >
          <Form>
            <Form.Group as={Row}>
              <Col xs="3" className="text-right p-2">
                <Form.Label>Loan Amount(&#8377;) :</Form.Label>
              </Col>
              <Col xs="5">
                <RangeSlider
                  min={500000}
                  max={3000000}
                  value={this.state.loanAmount}
                  onChange={e => this.setState({ loanAmount: e.target.value })}
                />
              </Col>
              <Col xs="4">
                <Form.Control
                  value={this.thousands_separators(this.state.loanAmount)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col xs="3" className="text-right p-2">
                <Form.Label>Loan Duration :</Form.Label>
              </Col>
              <Col xs="5">
                <RangeSlider
                  min={5}
                  max={30}
                  value={this.state.loanYear}
                  onChange={e => this.setState({ loanYear: e.target.value })}
                  variant="dark"
                />
              </Col>
              <Col xs="4">
                <Form.Control
                  value={
                    this.thousands_separators(this.state.loanYear) + " Years"
                  }
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
      </>
    )
  }

  render() {
    return (
      <div style={{ margin: `0 auto`, maxWidth: 1050, padding: `0 1rem` }}>
        {this.formToDisplay()}
        <p>This is a fince page</p>
        {this.displayTable()}
      </div>
    )
  }
}
