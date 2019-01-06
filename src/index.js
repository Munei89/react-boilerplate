import React from "react"
import ReactDom from "react-dom"
import "@babel/polyfill"
import App from "./App"
import "./styles.css"
import DefaultErrorBoundry from "./DefaultErrorBoundry"

if (process.env.NODE_ENV === "development") {
  const axe = require("react-axe")
  axe(React, ReactDom, 1000)
}

ReactDom.render(
  <React.StrictMode>
    <DefaultErrorBoundry>
      <App />
    </DefaultErrorBoundry>
  </React.StrictMode>,
  document.getElementById("app")
)
