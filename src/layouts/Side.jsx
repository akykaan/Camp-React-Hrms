import React from "react";
import { Icon, Menu, Sidebar } from "semantic-ui-react";


export default function Side() {

  const returnHomePage=(props)=>{
    console.log("ana sayfa: ")
  }

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
        <Menu.Item onClick={(e)=>returnHomePage()} as="a">
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
