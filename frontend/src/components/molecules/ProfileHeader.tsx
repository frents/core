import React from "react"
import {
  Container,
  Grid,
  Image,
  Button,
  Icon,
  Progress
} from "semantic-ui-react"

interface IProps {
  id: string
  name: string
  username: string
  bio: string
  profileImage: string
}

export const ProfileHeader = (props: IProps) => {
  return (
    <Container fluid>
      <Grid columns={2} stretched>
        <Grid.Column>
          <Image src={props.profileImage} wrapped circular size="small" />
        </Grid.Column>
        <Grid.Column>
          <Grid.Row style={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <Grid.Column>1,387 Suggestions</Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ paddingTop: "0px", paddingBottom: "0px" }}>
            <Grid.Column>14 Followers</Grid.Column>
          </Grid.Row>
          <Grid.Row style={{ paddingTop: "0px", paddingBottom: "20px" }}>
            <Grid.Column>200 Following</Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Progress
                percent={Math.round(Math.random() * 100)}
                indicating
                progress
                label="Similarity"
              />
            </Grid.Column>
          </Grid.Row>
        </Grid.Column>
      </Grid>
      <Grid columns={1}>
        <Grid.Column
          style={{
            fontWeight: "bold",
            paddingTop: "0px",
            paddingBottom: "0px"
          }}
        >
          {props.name}
        </Grid.Column>
        <Grid.Column style={{ paddingTop: "0px", paddingBottom: "0px" }}>
          {props.bio}
        </Grid.Column>
      </Grid>
      <Grid columns={2}>
        <Grid.Column>
          <Button fluid primary>
            <Icon name="plus" />
            Follow
          </Button>
        </Grid.Column>
        <Grid.Column>
          <Button fluid secondary>
            <Icon name="envelope" />
            Message
          </Button>
        </Grid.Column>
      </Grid>
    </Container>
  )
}
