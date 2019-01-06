import React from "react"
import ReactDom from "react-dom"
import "@babel/polyfill"
import App from "./App"
import "./styles.css"
import DefaultErrorBoundry from "./DefaultErrorBoundry"

ReactDom.render(
  <React.StrictMode>
    <DefaultErrorBoundry>
      <App />
    </DefaultErrorBoundry>
  </React.StrictMode>,
  document.getElementById("app")
)
