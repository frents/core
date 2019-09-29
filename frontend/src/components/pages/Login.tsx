import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { withRouter } from "react-router"
import { ReactRouterProps } from "react-router-dom"

import { SocialButtons } from "../molecules/SocialButtons"
import { Logo } from "../molecules/Logo"
import { ROUTE } from "../router/types"

const StyledLogin = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3494e6;
  background: -webkit-linear-gradient(to right, #ec6ead, #3494e6);
  background: linear-gradient(to right, #ec6ead, #3494e6);
`

const ButtonsContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`

export const LoginComponent = (props: ReactRouterProps) => {
  const [token, setToken] = useState("")

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      props.history.push(ROUTE.EVENTS)
    }
  }, [token, props.history])

  return (
    <StyledLogin>
      <Logo>frents</Logo>
      <ButtonsContainer>
        <SocialButtons setToken={setToken} />
      </ButtonsContainer>
    </StyledLogin>
  )
}

export const Login = withRouter(LoginComponent)
