import React from "react"
import {
  Card,
  Image,
  Grid,
  GridColumn,
  GridRow,
  Button
} from "semantic-ui-react"

interface IProps {
  title: string
  description: string
  imageUrl: string
  user: {
    name: string
  }
}

export const Suggestion = (props: IProps) => {
  return (
    <Card>
      <Image src={props.imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.title}</Card.Header>
        <Card.Meta>
          <span className="date">Suggested by {props.user.name}</span>
        </Card.Meta>
        <Card.Description>{props.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Grid>
          <GridRow columns={2}>
            <GridColumn>
              <Button secondary icon="plus" />
            </GridColumn>
            <GridColumn>
              <Button primary floated="right" icon="heart" />
            </GridColumn>
          </GridRow>
        </Grid>
      </Card.Content>
    </Card>
  )
}
