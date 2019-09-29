import React from "react"
import { ROUTE } from "./types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import {
  Events,
  Home,
  Login,
  Messages,
  User,
  Suggest,
  UserProfile
} from "../pages"
import { PrivateRoute } from "./routes"

export const AppRouter = () => (
  <Router>
    <Switch>
      <PrivateRoute exact path={ROUTE.HOME} component={Home} />
      <PrivateRoute exact path={ROUTE.CREATE_MESSAGE} component={Home} />
      <PrivateRoute exact path={ROUTE.EVENTS} component={Events} />
      <PrivateRoute exact path={ROUTE.MESSAGES} component={Messages} />
      <PrivateRoute exact path={ROUTE.SUGGEST} component={Suggest} />
      <PrivateRoute exact path={ROUTE.USER} component={User} />
      <PrivateRoute exact path={ROUTE.USER_PROFILE} component={UserProfile} />
      <Route exact path={ROUTE.LOGIN} component={Login} />
    </Switch>
  </Router>
)
