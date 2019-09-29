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
      <Route exact path={ROUTE.HOME} component={Home} />
      <Route exact path={ROUTE.CREATE_MESSAGE} component={Home} />
      <Route exact path={ROUTE.EVENTS} component={Events} />
      <Route exact path={ROUTE.MESSAGES} component={Messages} />
      <Route exact path={ROUTE.SUGGEST} component={Suggest} />
      <Route exact path={ROUTE.USER} component={User} />
      <Route exact path={ROUTE.USER_PROFILE} component={UserProfile} />
      <PrivateRoute exact path={ROUTE.LOGIN} component={Login} />
    </Switch>
  </Router>
)
