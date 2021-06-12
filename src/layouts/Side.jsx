import React from "react";
import { Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";

export default function Side() {
  return (
    <div>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        inverted
        vertical
        visible
        width="thin"
      >
        <Menu.Item as="a">
          <Icon name="home" />
          Ana Sayfa
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="gamepad" />
          İş arayanlar
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="camera" />
          İş verenler
        </Menu.Item>
      </Sidebar>
    </div>
  );
}
