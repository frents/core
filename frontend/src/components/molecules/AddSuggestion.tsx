import React, { useState, SyntheticEvent } from "react"
import {
  Container,
  Input,
  Grid,
  Button,
  Select,
  DropdownProps
} from "semantic-ui-react"

enum SUGGESTION_TYPES {
  BOOK = "BOOK",
  MOVIE = "MOVIE",
  MUSIC = "MUSIC"
}

export const AddSuggestion = () => {
  const [searchField, setSearchField] = useState("")
  const [searchType, setSearchType] = useState(SUGGESTION_TYPES.MUSIC)

  const options = [
    {
      key: "book",
      text: "Book",
      value: "BOOK"
    },
    {
      key: "movie",
      text: "Movie",
      value: "MOVIE"
    },
    {
      key: "music",
      text: "Music",
      value: "MUSIC"
    }
  ]

  return (
    <Container fluid>
      <Grid columns={16} padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Input
              fluid
              value={searchField}
              onChange={e => setSearchField(e.target.value)}
              placeholder="Search..."
              action
            >
              <Select
                item
                size="small"
                compact
                style={{
                  borderTopRightRadius: "0px",
                  borderBottomRightRadius: "0px"
                }}
                onChange={(
                  event: SyntheticEvent,
                  option: DropdownProps & { value: SUGGESTION_TYPES }
                ) => {
                  setSearchType(option.value)
                }}
                options={options}
                value={searchType}
              />

              <input
                style={{
                  borderLeft: "0px",
                  borderTopLeftRadius: "0px",
                  borderBottomLeftRadius: "0px"
                }}
              />
              <Button primary icon="plus" />
            </Input>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
