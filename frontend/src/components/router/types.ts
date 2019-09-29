import React from "react"

export interface IRouteProps {
  component: React.ElementType
  exact?: boolean
  path?: ROUTE
  match?: any
}

export enum ROUTE {
  HOME = "/",
  EVENTS = "/events",
  LOGIN = "/login",
  MESSAGES = "/messages",
  SUGGEST = "/suggest",
  USER = "/user",
  USER_PROFILE = "/user/:id",
  CREATE_MESSAGE = "/create_message"
}

// @param: this fancy type is because of react-router
export type TRouteParam = {
  [paramName: string]: string | number | boolean | undefined
}
