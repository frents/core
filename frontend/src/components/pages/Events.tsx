import React from "react"
import styled from "styled-components"

import { EventsSearch, Nav, Header, PageContent } from "../molecules"
import { ROUTE } from "../router/types"

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const Events = () => (
  <PageContainer>
    <Header title="frents" actionIcon="envelope" actionRoute={ROUTE.MESSAGES} />
    <PageContent>
      <EventsSearch />
    </PageContent>
    <Nav activePage="events" />
  </PageContainer>
)
