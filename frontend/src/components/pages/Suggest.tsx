import React from "react"
import styled from "styled-components"

import {
  AddSuggestion,
  Nav,
  RecentSuggestions,
  PageContent,
  Header
} from "../molecules"
import { ROUTE } from "../router/types"

const SuggestContainer = styled.div`
  height: 100%;
  width: 100%;
`

export const Suggest = () => (
  <SuggestContainer>
    <Header actionIcon="envelope" actionRoute={ROUTE.MESSAGES} />
    <PageContent>
      <AddSuggestion />
      <RecentSuggestions />
    </PageContent>
    <Nav activePage="suggest" />
  </SuggestContainer>
)
