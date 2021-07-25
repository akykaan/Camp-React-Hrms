import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Tab, Header } from "semantic-ui-react";
import HrmsProjectTextinput from "../utilities/customFormControls/HrmsProjectTextinput";
import LoginService from "../services/loginService";

const UserContext = React.createContext();

export default function LoginList() {
  const initialValues = {
    email: "",
    password: "",
  };

  const history = useHistory();

  const panes = [
    {
      menuItem: "İŞ ARAYAN GİŞİRİ",
      pane: (
        <Tab.Pane key="is arayanlar">
          <Form className="ui form test">
            <HrmsProjectTextinput name="email" placeholder="email" />
            <HrmsProjectTextinput name="password" placeholder="password" />
            <Button color="green" type="submit">
              Giriş yap
            </Button>
          </Form>
        </Tab.Pane>
      ),
      render: () => <Tab.Pane></Tab.Pane>,
    },
    {
      menuItem: "İŞ VEREN GİRİŞİ",
      pane: (
        <Tab.Pane key="is verenler">
          <Form className="ui form test">
            <HrmsProjectTextinput name="email" placeholder="email" />
            <HrmsProjectTextinput name="password" placeholder="password" />
            <Button color="green" type="submit">
              Giriş yap
            </Button>
          </Form>
        </Tab.Pane>
      ),
      render: () => <Tab.Pane></Tab.Pane>,
    },
  ];

  const schema = Yup.object({
    email: Yup.string().email("hatalı email").required("email zorunludur!!"),
    password: Yup.string().required("Boş bırakılamaz."),
  });
  const [errorLogin, setErrorLogin] = useState("");
  const [userId, setUserId] = useState();

  return (
    <UserContext.Provider value={userId}>
      <div>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => {
            const data = {
              email: values.email,
              password: values.password,
            };
            let loginService = new LoginService();
            loginService.postCandidate(data).then((result) => {
              if (result.data.success) {
                setUserId(123); // result.data.Id
                history.push("/candidatePage");
              } else {
                setErrorLogin(result.data.message);
              }
            });
          }}
        >
          {<Tab panes={panes} renderActiveOnly={false} />}
        </Formik>
        <Header as="h3">{errorLogin}</Header>
      </div>
    </UserContext.Provider>

    // <div>
    //   <Formik
    //     initialValues={initialValues}
    //     validationSchema={schema}
    //     onSubmit={(values) => {
    //       const data = {
    //         email: values.email,
    //         password: values.password,
    //       };
    //       console.log(values);
    //       let loginService = new LoginService();
    //       loginService
    //         .postCandidate(data)
    //         .then((response) => {
    //           console.log("basarılı:", response.data);
    //           history.push("/candidatePage");
    //         })
    //         .catch((error) => {
    //           console.log("hata:", error.data);
    //         });
    //     }}
    //   >
    //     {<Tab panes={panes} renderActiveOnly={false} />}
    //   </Formik>
    // </div>
  );
}
