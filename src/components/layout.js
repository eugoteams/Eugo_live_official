import React from "react"
import Navbar from "../components/Navbar/navbar"
import Footer from "../components/Footer/footer"

export default function Layout({ children }) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <div>{children}</div>
      <footer
        style={{
          position: "relative",
          bottom: "0",
          width: "100%",
          height: "15.5rem",
          backgroundColor: "red",
        }}
      >
        <Footer />
      </footer>
    </>
  )
}
