import React from "react"
import { render } from "react-testing-library"
import App from "./App"

describe("App", () => {
  it("Renders with no errors", () => {
    render(<App />)
  })
})
