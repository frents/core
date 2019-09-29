import React from "react"
import { Header as SemanticHeader, Menu, Icon } from "semantic-ui-react"
import { withRouter, RouteComponentProps } from "react-router"
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic"

import { ROUTE } from "../router/types"

interface IProps {
  title: string
  actionIcon: SemanticICONS
  actionRoute: ROUTE
}

const HeaderComponent = (props: IProps & RouteComponentProps) => (
  <Menu
    id="top-nav"
    fixed="top"
    borderless
    style={{ display: "flex", justifyContent: "space-between" }}
  >
    <Menu.Item
      position="left"
      name="back"
      onClick={() => props.history.goBack()}
    >
      <Icon name="chevron left" />
    </Menu.Item>

    <Menu.Item name="title" header disabled>
      <SemanticHeader style={{ textAlign: "center" }}>
        {props.title || "frents"}
      </SemanticHeader>
    </Menu.Item>

    <Menu.Item
      name="action"
      position="right"
      onClick={() => props.history.push(props.actionRoute)}
    >
      <Icon name={props.actionIcon} />
    </Menu.Item>
  </Menu>
)

export const Header = withRouter(HeaderComponent)
