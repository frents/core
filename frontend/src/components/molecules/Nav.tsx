import React from "react"
import { Menu, Icon } from "semantic-ui-react"
import { ReactRouterProps } from "react-router-dom"
import { withRouter } from "react-router"

import { ROUTE } from "../router/types"

interface IProps {
  activePage: string
}

const NavComponent = (props: IProps & ReactRouterProps) => (
  <Menu id="bottom-nav" fixed="bottom" widths={5} inverted>
    <Menu.Item
      name="home"
      active={props.activePage === "home"}
      onClick={() => props.history.push(ROUTE.HOME)}
    >
      <Icon name="home" />
    </Menu.Item>

    <Menu.Item
      name="events"
      active={props.activePage === "events"}
      onClick={() => props.history.push(ROUTE.EVENTS)}
    >
      <Icon name="search" />
    </Menu.Item>

    <Menu.Item
      name="suggest"
      className="primary-bg-important"
      active={props.activePage === "suggest"}
      onClick={() => props.history.push(ROUTE.SUGGEST)}
    >
      <Icon name="plus" />
    </Menu.Item>

    <Menu.Item
      name="messages"
      active={props.activePage === "messages"}
      onClick={() => props.history.push(ROUTE.MESSAGES)}
    >
      <Icon name="envelope outline" />
    </Menu.Item>

    <Menu.Item
      name="user"
      active={props.activePage === "user"}
      onClick={() => props.history.push(`${ROUTE.USER}/julian`)}
    >
      <Icon name="user" />
    </Menu.Item>
  </Menu>
)

export const Nav = withRouter(NavComponent)
