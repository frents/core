import React from "react"
import styled from "styled-components"

interface IProps {
  children: any
}

const StyledLogo = styled.h1`
  font-size: 72px;
  background: #2980b9;
  background: -webkit-linear-gradient(to bottom, #ffffff, #cecece, #2980b9);
  background: linear-gradient(to bottom, #ffffff, #cecece, #2980b9);
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #444;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  letter-spacing: -1px;
`

export const Logo: React.FC = (props: IProps) => (
  <StyledLogo>{props.children}</StyledLogo>
)
