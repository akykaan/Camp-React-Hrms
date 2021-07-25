import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

export default function SignedIn({signOut}) {
  const history = useHistory();

  const handleSubmit = () => {
    history.push("/employeesettings");
  };

  return (
    <div>
      <Menu.Item>        
        <Dropdown pointing="top left" text="Kaan">
          <Dropdown.Menu>
            <Dropdown.Item text="bilgilerim" icon="info"/>
            <Dropdown.Item onClick={signOut} text="çıkış yap" icon="sign-out"/>
            <Dropdown.Item onClick={handleSubmit} text="profili düzenle" icon="setting"/>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
