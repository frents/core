import React from "react"
import styled from "styled-components"

import { Logo, Nav } from "../molecules"

const UserContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
`

export const User = () => (
  <UserContainer>
    <Logo>User</Logo>
    <Nav activePage="user" />
  </UserContainer>
)
