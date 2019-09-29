import React from "react"
import styled from "styled-components"

const StyledPageContent = styled.div`
  padding: 70px 0px;
`

interface IProps {
  children: any
}

export const PageContent = (props: IProps) => (
  <StyledPageContent>{props.children}</StyledPageContent>
)
