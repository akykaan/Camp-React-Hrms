import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

export default function SignedIn({signOut}) {
  return (
    <div>
      <Menu.Item>        
        <Dropdown pointing="top left" text="Kaan">
          <Dropdown.Menu>
            <Dropdown.Item text="bilgilerim" icon="info"/>
            <Dropdown.Item onClick={signOut} text="çıkış yap" icon="sign-out"/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
