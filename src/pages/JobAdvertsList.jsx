import React, { useState, useEffect } from "react";
import JobAdvertService from "../services/jobAdvertService";
import { Formik, Form } from "formik";
import {
  Button,
  Icon,
  Menu,
  Table,
  Dropdown,
  Header,
  Grid,
  Segment,
} from "semantic-ui-react";
import HrmsProjectTextinput from "../utilities/customFormControls/HrmsProjectTextinput";

export default function JobAdvertsList() {
  const [jobAdverts, setJobAdverts] = useState([]);
  //const dispatch = useDispatch();

  const [pageSize, setPageSize] = useState("10");

  const [pageNumber, setPageNumber] = useState("1");

  useEffect(() => {
    const defaultSearchData = {
      keyword: "",
      pageSize: "",
      pageNumber: "",
    };

    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getAllSearchJobAdvert(defaultSearchData)
      .then((response) => setJobAdverts(response.data.data));
  }, []);

  const handleAddToFav = (jobAdvert) => {
    //dispatch(addToCart(jobAdvert));
    console.log(jobAdvert);
  };

  const options = [
    { key: 1, text: "10'li getir", value: 10 },
    { key: 2, text: "20'li getir", value: 20 },
    { key: 3, text: "50'lu getir", value: 50 },
    { key: 4, text: "100'lü getir", value: 100 },
  ];

  const initialValues = {
    keyword: "",
    pageSize: "",
    pageNumber: "",
  };

  const getPageSizeValue = (event, { value }) => {
    setPageSize(value);
    console.log("getPageSizeValue:", value);
  };

  const getPageNumberValue = (event, { value }) => {
    setPageSize(value);
    console.log("getPageNumberValue:", value);
    console.log("event:", event);
  };

  return (
    <div>
      <Header>İş ilanları </Header>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          const searchData = {
            keyword: values.keyword,
            pageSize: pageSize,
            pageNumber: pageNumber,
          };
           console.log("buton : ", searchData);
          let jobAdvertService = new JobAdvertService();
          jobAdvertService
          .getAllSearchJobAdvert(searchData)
          .then((response) => setJobAdverts(response.data.data));
        }}
      >
        <Form className="ui form" > 
        
          <Segment placeholder >
            <Grid columns="equal" divided > 
              <Grid.Row >

                <Grid.Column>
                  <HrmsProjectTextinput name="keyword" placeholder="Sehir, Calısma Tipi" />
                </Grid.Column>

                <Grid.Column verticalAlign="middle">
                  <Dropdown
                    clearable
                    options={options}
                    selection
                    compact
                    onChange={getPageSizeValue}
                  />
                </Grid.Column>

                <Grid.Column verticalAlign="middle">
                  <Button
                    content="Ara"
                    icon="search"
                    size="large"
                    type="submit"
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

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
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {jobAdverts.map((jobAdvert) => (
                <Table.Row key={jobAdvert.id}>
                  <Table.Cell>{jobAdvert.applicationDate}</Table.Cell>
                  <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
                  <Table.Cell>{jobAdvert.openPosition}</Table.Cell>
                  <Table.Cell>{jobAdvert.cityName}</Table.Cell>
                  <Table.Cell>{jobAdvert.jobDescription}</Table.Cell>
                  <Table.Cell>{jobAdvert.typeOfWork}</Table.Cell>
                  <Table.Cell>{jobAdvert.workingTime}</Table.Cell>
                  <Table.Cell>
                    <Button
                      onClick={() => handleAddToFav(jobAdvert)}
                      animated="vertical"
                    >
                      <Button.Content hidden>Favla</Button.Content>
                      <Button.Content visible>
                        <Icon name="favorite" />
                      </Button.Content>
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
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
        </Form>
      </Formik>
    </div>
  );
}
