import React, { useState, useEffect } from "react";
import { Icon, Menu, Table } from "semantic-ui-react";
import CityService from "../services/cityService";

export default function CitiesList() {
    
    const [cities, setCities] = useState([]);
    
    useEffect(() => {
      let cityService= new CityService();
      cityService
      .getCities()
      .then((result)=>setCities(result.data.data));
    }, []);
  
    return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id </Table.HeaderCell>
            <Table.HeaderCell>Şehirler </Table.HeaderCell>            
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {
            // js kodu gelen veri kalan olusturur
            cities.map((cities) => (
              <Table.Row key={cities.id}>
                <Table.Cell>{cities.id}</Table.Cell>
                <Table.Cell>{cities.city}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
