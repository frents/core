import React, { useState } from "react"
import { Container, Grid, Menu, Image } from "semantic-ui-react"

export const ProfileContent = () => {
  const [activeItem, setActiveItem] = useState("all")
  return (
    <Container fluid>
      <Grid>
        <Grid.Row>
          <Menu pointing fluid secondary widths={4}>
            <Menu.Item
              name="all"
              active={activeItem === "all"}
              onClick={() => setActiveItem("all")}
            />
            <Menu.Item
              name="music"
              active={activeItem === "music"}
              onClick={() => setActiveItem("music")}
            />
            <Menu.Item
              name="movies"
              active={activeItem === "movies"}
              onClick={() => setActiveItem("movies")}
            />
            <Menu.Item
              name="books"
              active={activeItem === "books"}
              onClick={() => setActiveItem("books")}
            />
          </Menu>
        </Grid.Row>
        <Grid.Row id="content-grid" columns={3}>
          {new Array(9).fill("").map((_, index) => (
            <Grid.Column>
              <Image
                src={`https://picsum.photos/seed/${Math.random()}/150/150`}
              />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </Container>
  )
}
