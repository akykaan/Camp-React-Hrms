import React, { useState, useEffect } from "react";
import { Button, Icon, Menu, Table } from "semantic-ui-react";
import HrmsStaffService from "../services/hrmsStaffService";
import JobAdvertService from "../services/JobAdvertService";

export default function HrmsStaffList() {
  // job advert list kısmından iş ilanı eklendiğinde
  // bu başka bir tabloda tutulsun
  // o tabloyu buraya çekip
  // personelin onayı gereksin
  // onay butonuna basıldığı an itibari ile
  // onaylanmış iş ilanları tablosuna geçsin
  // onu sonra listele

  // veya

  // job advert list kısmından ekleyen iş ilanlarını
  // aktif true olarak tutalım true olanlar listelensin
  // false olanlar ise beklemede kalsın
  // gelen ilanın idsini al update işlemi
  // ile false yerine true yaz
  // formatDate
  const [activeJobAdverts, setActiveJobAdverts] = useState([]);
  const [state, setstate] = useState()

  useEffect(() => {
    let hrmsStaffService = new HrmsStaffService();
    hrmsStaffService
      .getAllUnconfirmedJobAdverts()
      .then((result) => {
        setActiveJobAdverts(result.data.data);
        console.log("active:", result.data);        
      })
      .catch((error) => {
        console.log(error);
        console.log(error.data);
      });
  }, [state]);

  const getAllJobAdvert = (jobAdvertId) => {    
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .updateJobAdvert(jobAdvertId)
      .then((response) => {
        console.log("basarılı: ", response);
        console.log("basarılı: ", response.request);
        setstate(jobAdvertId)
      })
      .catch((error) => {
        console.log("hata update: ", error.response);
        console.log("hata update: ", error.request);
        console.log("hata update: ", error.message);
      });
  };

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Application Date</Table.HeaderCell>
            <Table.HeaderCell>Application DateLine</Table.HeaderCell>
            <Table.HeaderCell>Open Position</Table.HeaderCell>
            <Table.HeaderCell>City Name</Table.HeaderCell>
            <Table.HeaderCell>Job Description</Table.HeaderCell>
            <Table.HeaderCell>Type Of Work</Table.HeaderCell>
            <Table.HeaderCell>Working Time</Table.HeaderCell>
            <Table.HeaderCell>Aktif Durumları</Table.HeaderCell>
            <Table.HeaderCell>Onay Butonları</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {activeJobAdverts.map((adverts) => (
            <Table.Row key={adverts.id}>
              <Table.Cell>{adverts.applicationDate}</Table.Cell>
              <Table.Cell>{adverts.applicationDeadline}</Table.Cell>
              <Table.Cell>{adverts.cityName}</Table.Cell>
              <Table.Cell>{adverts.jobDescription}</Table.Cell>
              <Table.Cell>{adverts.openPosition}</Table.Cell>
              <Table.Cell>{adverts.typeOfWork}</Table.Cell>
              <Table.Cell>{adverts.workingTime}</Table.Cell>
              <Table.Cell>{String(adverts.active)}</Table.Cell>
              <Table.Cell>
                <Button
                  //onClick={sendId(adverts.id)}
                  onClick={() => getAllJobAdvert(adverts.id)}
                  type="submit"
                  primary
                >
                  Onayla
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="9">
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
