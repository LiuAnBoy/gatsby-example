//Global CSS
import React from "react"
import Layout from "../component/layout"
import { ExampleButton } from "../component/button"

export default function Home() {
  return (
    <Layout>
      <h1 style={{ color: "red", textTransform: "uppercase" }}>
        Hello from Gatsby!
      </h1>
      <h1>Hello World</h1>
      <h1>Hello People</h1>
      <ExampleButton>click me</ExampleButton>
    </Layout>
  )
}
