import React from "react"
import styled from "styled-components"

import { AppRouter } from "./components/router"

const StyledApp = styled.div`
  height: 100%;
  width: 100%;
`

const App: React.FC = () => (
  <StyledApp>
    <AppRouter />
  </StyledApp>
)

export default App
