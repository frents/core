import React from "react"
import { Redirect, Route } from "react-router"

import { ROUTE, IRouteProps } from "./types"

export const PrivateRoute = (props: IRouteProps) => {
  const { component: Component, ...rest } = props
  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("authToken") ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: ROUTE.LOGIN, state: { from: props.location } }}
          />
        )
      }
    />
  )
}
