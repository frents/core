import React, { useEffect, useState } from "react"
import * as qs from "querystring"
import axios from "axios"
import styled from "styled-components"

const SpotifyButton = styled.div`
  text-align: center;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  background-color: green;
  color: #fff;
  padding: 20px;
`

export const SocialButtons: React.FC = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)

  const spotifyQuery = {
    client_id: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
    response_type: "code",
    scopes: `'user-read-private user-read-email'`
  }

  const queryObjectString = qs.stringify(spotifyQuery)

  useEffect(() => {
    if (!isLoggingIn) {
      return
    }

    axios.get(`https://accounts.spotify.com/authorize?${queryObjectString}`)
  }, [isLoggingIn, queryObjectString])

  return (
    <SpotifyButton onClick={() => setIsLoggingIn(true)}>
      Login to Spotify
    </SpotifyButton>
  )
}
