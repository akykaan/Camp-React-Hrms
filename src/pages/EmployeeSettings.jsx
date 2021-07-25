import React from "react";
import * as Yup from "yup";
import { Button,Header} from "semantic-ui-react";
import { Formik, Form } from "formik";
import EmployeeService from "../services/employeeService";
import HrmsProjectTextinput from "../utilities/customFormControls/HrmsProjectTextinput";

export default function EmployeeSettings() {
  const initialValues = {
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    address: "",
    phoneNumber: "",
  };

  const schema = Yup.object({
    
    firstName: Yup.string(),
    lastName: Yup.string(),
    email: Yup.string().email("hatalı email"),
    password: Yup.string().max(25, "max 25 karakter girebilirsiniz."),
    address: Yup.string(),
    phoneNumber: Yup.number()
  });
  
  return (
    <div>
      <Header>Employee Settings</Header>
      <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values)=>{
        const data={
          id:values.id,
          firstName:values.firstName,
          lastName:values.lastName,
          email:values.email,
          password:values.password,
          address:values.address,
          phoneNumber:values.phoneNumber
        }
        console.log(data)
         let employeeService=new EmployeeService();
         employeeService.updateById(data)
         .then((response)=>{
           console.log("basarılı: ",response.data);
         })
         .catch((error)=>{
          console.log("hata:", error.data);
         })   

      }}
      >
          <Form className="ui form">
          <HrmsProjectTextinput name="id" placeholder="id"/>
          <HrmsProjectTextinput name="firstName" placeholder="firstName"/>
          <HrmsProjectTextinput name="lastName" placeholder="lastName"/>
          <HrmsProjectTextinput name="email" placeholder="email"/>
          <HrmsProjectTextinput name="password" placeholder="password"/>
          <HrmsProjectTextinput name="address" placeholder="address"/>
          <HrmsProjectTextinput name="phoneNumber" placeholder="phoneNumber"/>
          <Button color="green" type="submit">
            Güncelle
          </Button>
          </Form>
      </Formik>

    </div>
  );
}
