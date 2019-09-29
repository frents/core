import React from "react"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"
import GoogleLogin from "react-google-login"
import {
  FacebookLoginButton,
  GoogleLoginButton
} from "react-social-login-buttons"
import { useMutation } from "@apollo/react-hooks"
import gql from "graphql-tag"
import { ReactRouterProps } from "react-router-dom"
import { withRouter } from "react-router"

const AUTH_USER = gql`
  mutation auth(
    $token: String!
    $name: String!
    $picture: String!
    $email: String!
    $provider: SocialProvider!
    $providerId: String!
  ) {
    auth(
      input: {
        token: $token
        name: $name
        picture: $picture
        email: $email
        provider: $provider
        providerId: $providerId
      }
    ) {
      user {
        id
      }
      token
    }
  }
`

interface IProps {
  setToken: (token: string) => unknown
}

const SocialButtonsComponent: React.FC = (props: IProps & ReactRouterProps) => {
  const [auth, { data }] = useMutation(AUTH_USER)

  function responseFacebook(input) {
    const authInput = {
      email: input.email,
      name: input.name,
      picture: input.picture.data.url,
      provider: "FACEBOOK",
      providerId: input.userID,
      token: input.accessToken
    }

    auth({ variables: authInput })

    if (data && data.auth && data.auth.token) {
      localStorage.setItem("authToken", data.authToken)
      props.setToken(data.authToken)
    }
  }

  function responseGoogle(input) {
    // Google auth not implemented yet
    alert("Coming soon")
  }

  return (
    <>
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        autoLoad={true}
        fields="name,email,picture"
        callback={responseFacebook}
        render={renderProps => (
          <FacebookLoginButton onClick={renderProps.onClick}>
            Login with Facebook
          </FacebookLoginButton>
        )}
      />
      <GoogleLogin
        clientId={null}
        render={renderProps => (
          <GoogleLoginButton onClick={renderProps.onClick}>
            Login with Google
          </GoogleLoginButton>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  )
}

export const SocialButtons = withRouter(SocialButtonsComponent)
