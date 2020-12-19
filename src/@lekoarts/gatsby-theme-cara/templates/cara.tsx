import React from "react"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Projects from "../components/projects"
import About from "../components/about"
import Contact from "../components/contact"
import Works from "../components/works"

const Cara = () => (
  <Layout>
    <Parallax pages={5.4}>
      <Hero offset={0} factor={1} />
      <Works offset = {1} factor={2} />
      <Projects offset={2.1} factor={2} />
      <About offset={3.9} factor={1} />
      <Contact offset={4.5} factor={1} />
    </Parallax>
  </Layout>
)

export default Cara
