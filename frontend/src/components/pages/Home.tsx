import React from "react"
import styled from "styled-components"

import { Nav, Header, PageContent, Feed } from "../molecules"

import { ROUTE } from "../router/types"

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background: white;
`

export const Home = () => (
  <PageContainer>
    <Header title="frents" actionIcon="envelope" actionRoute={ROUTE.MESSAGES} />
    <PageContent>
      <Feed></Feed>
    </PageContent>
    <Nav activePage="home" />
  </PageContainer>
)
