import React from "react"
import { Container, Grid, Header } from "semantic-ui-react"
import { Suggestion } from "./"

const fakeData = [
  {
    title: "Mr Robot",
    imageUrl: "https://react.semantic-ui.com/images/avatar/large/matthew.png",
    user: { name: "@diego" },
    description: "Cool film about a h4ck3r"
  },
  {
    title: "Harry Potter",
    imageUrl: "https://react.semantic-ui.com/images/avatar/large/molly.png",
    user: { name: "@julian" },
    description: "Wizard goes to hogwarts"
  },
  {
    title: "Requiem for a Dream",
    imageUrl: "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
    user: { name: "@julian" },
    description: "Trippy psychological thriller"
  },
  {
    title: "Mary Poppins",
    imageUrl: "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
    user: { name: "@julian" },
    description: "Lady flies around with an umbrella"
  },
  {
    title: "The Shawshank Redemption",
    imageUrl: "https://react.semantic-ui.com/images/avatar/large/steve.jpg",
    user: { name: "@julian" },
    description: "Man escapes prison"
  }
]

export const RecentSuggestions = () => {
  return (
    <Container fluid>
      <Grid columns={16} padded>
        <Grid.Row>
          <Grid.Column width={16}>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <Header size="large">Recent Suggestions</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid stackable columns={5}>
              {fakeData.map(f => (
                <Grid.Column>
                  <Suggestion {...f} />
                </Grid.Column>
              ))}
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}
