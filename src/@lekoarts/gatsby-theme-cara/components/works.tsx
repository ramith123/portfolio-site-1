/** @jsx jsx */
import { jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import WorkMDX from "../sections/work"

const Works = ({ offset, factor = 2 }: { offset: number; factor?: number }) => (
  <div>
    <Divider
      bg=" linear-gradient(to right, #ff9966, #ff5e62)"
      
      clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)"
      speed={0.2}
      offset={offset}
      factor={factor}
    />
    <Content speed={0.2} offset={offset} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <WorkMDX />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="codingInterface" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG icon="codingSlash" width={8}  color="icon_orange" left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={24} color="icon_brightest" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <SVG icon="codingSlash" width={12}  color="icon_brightest" left="90%" top="30%" />
        <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="codingSlash" hiddenMobile width={16}  color="icon_teal" left="18%" top="75%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_darkest" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="codingInterface" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="codingInterface" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="hexa" width={16}  color="icon_blue" left="75%" top="30%" />
      <SVG icon="hexa" width={8}  color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Works
