import React, { useState } from "react"
import { Container, Input, Grid, Button } from "semantic-ui-react"

export const EventsSearch = () => {
  const [searchField, setSearchField] = useState("")
  return (
    <Container fluid>
      <Grid columns={16}>
        <Grid.Row>
          <Grid.Column width={16}>
            <Input
              fluid
              value={searchField}
              onChange={e => setSearchField(e.target.value)}
              icon="search"
              iconPosition="left"
              size="small"
              placeholder="Search..."
              action={<Button primary icon="arrow right" size="small" />}
              // @ts-ignore wrong enum type
              actionPosition="right"
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
