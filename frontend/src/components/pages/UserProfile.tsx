import React from "react"
import styled from "styled-components"

import {
  Header,
  Nav,
  PageContent,
  ProfileContent,
  ProfileHeader
} from "../molecules"
import { ROUTE } from "../router/types"

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background: white;
`

const user = {
  id: "blah",
  name: "Julian Pearce",
  username: "julian",
  bio: "I like to code 🤪",
  profileImage:
    "https://victorygirlsblog.com/wp-content/uploads/2019/07/boris1.-squarepng.png"
}

export const UserProfile = () => (
  <PageContainer>
    <Header
      title={`@${user.username}`}
      actionIcon="ellipsis horizontal"
      actionRoute={ROUTE.CREATE_MESSAGE}
    />
    <PageContent>
      <ProfileHeader {...user} />
      <ProfileContent />
    </PageContent>
    <Nav activePage="user" />
  </PageContainer>
)
