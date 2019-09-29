import React, { useState } from "react"
import { Feed as SemanticFeed, Icon, Image, Grid } from "semantic-ui-react"

const images = [
  "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
  "https://react.semantic-ui.com/images/avatar/large/molly.png",
  "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
  "https://react.semantic-ui.com/images/avatar/large/steve.jpg"
]
const names = ["matthew", "molly", "elliot", "jenny"]
const activities = [
  `added ${Math.floor(Math.random() * 10)}  suggestions`,
  `liked ${names[Math.floor(Math.random() * names.length)]}'s suggestion`,
  "joined the platform",
  `added ${
    names[Math.floor(Math.random() * names.length)]
  }'s suggestion to their library`
]

export const Feed = () => {
  return (
    <Grid padded>
      <Grid.Column>
        <SemanticFeed>
          {new Array(12).fill("").map(() => (
            <SemanticFeed.Event>
              <SemanticFeed.Label>
                <Image
                  wrapped
                  src={`${images[Math.floor(Math.random() * images.length)]}`}
                />
              </SemanticFeed.Label>

              <SemanticFeed.Content>
                <SemanticFeed.Summary>
                  <SemanticFeed.User>
                    {names[Math.floor(Math.random() * names.length)]}
                  </SemanticFeed.User>
                  {` ${
                    activities[Math.floor(Math.random() * activities.length)]
                  }`}
                  <SemanticFeed.Date>
                    {Math.floor(Math.random() * 6)} Hours Ago
                  </SemanticFeed.Date>
                </SemanticFeed.Summary>
                <SemanticFeed.Meta>
                  <SemanticFeed.Like>
                    <Icon name="like" />
                    {Math.floor(Math.random() * 1000)} Likes
                  </SemanticFeed.Like>
                </SemanticFeed.Meta>
              </SemanticFeed.Content>
            </SemanticFeed.Event>
          ))}
        </SemanticFeed>
      </Grid.Column>
    </Grid>
  )
}
