import React from "react"
import styled from "styled-components"
import { List, Image, Grid, Label } from "semantic-ui-react"

import { Header, Nav, PageContent } from "../molecules"
import { ROUTE } from "../router/types"

const PageContainer = styled.div`
  height: 100%;
  width: 100%;
  background: white;
`

const names = ["julian", "diego", "giovanni", "dexter"]
const messages = [
  "hello",
  "bye",
  "whats up",
  "check this out :0",
  "this ones a really long message to see what happens omg im scared"
]

export const Messages = () => (
  <PageContainer>
    <Header
      title="Messages"
      actionIcon="pencil"
      actionRoute={ROUTE.CREATE_MESSAGE}
    />
    <PageContent>
      <List fluid selection relaxed="very" divided>
        {new Array(6).fill("").map((message, index) => (
          <List.Item key={index}>
            <Grid columns={2}>
              <Grid.Column width={3} style={{ paddingRight: "0px" }}>
                <Image
                  circular
                  src={`https://picsum.photos/seed/${Math.random()}/50/50`}
                />
              </Grid.Column>
              <Grid.Column width={13}>
                <List.Content verticalAlign="middle">
                  <List.Header as="a">
                    {names[Math.floor(Math.random() * names.length)]}
                  </List.Header>
                  <List.Description
                    style={{
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden"
                    }}
                  >
                    {messages[Math.floor(Math.random() * messages.length)]}
                  </List.Description>
                  <Label basic pointing>
                    {index + 1} hours ago.
                  </Label>
                </List.Content>
              </Grid.Column>
            </Grid>
          </List.Item>
        ))}
      </List>
    </PageContent>
    <Nav activePage="messages" />
  </PageContainer>
)
