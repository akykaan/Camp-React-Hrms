import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Icon, Divider, Header } from "semantic-ui-react";
import HrmsProjectTextinput from "../utilities/customFormControls/HrmsProjectTextinput";
import CvService from "../services/cvService";

export default function CvAdd() {
  const initialValues = {
    githubLink: "",
    linkedinLink: "",
    coverLetter: "",
    workPlaceName: "",
    position: "",
    startYear: "",
    endYear: "",
    cvId: "",
    language: "",
    languageLevel: "",
    programmingLanguage: "",
    programmingLanguageLevel: "",
    schoolName: "",
    departmentName: "",
    startYearForSchool: "",
    endYearForSchool: "",
  };

  const schema = Yup.object({
    schoolName: Yup.string().required("bos bırakmayınız!!"),
    language: Yup.string().required("dil bilgisi bos bırakılamaz!!"),
    languageLevel:Yup
    .number()
    .required("dil seviye bilgisi bos bırakılamaz!!")
    .min(1,"1den kücük girilemez")
    .max(5,"en fazla 5 lvl dil secilebilir."),
    startYear:Yup.string().required("yyyy-mm-dd şeklinde giriniz!!"),
    endYear:Yup.string().required("yyyy-mm-dd şeklinde giriniz!!"),

  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(values) => {      
          const cvlinkData={
            cvId: values.cvId,
            githubLink: values.githubLink,
            linkedinLink: values.linkedinLink,
            coverLetter: values.coverLetter,
          }
          let cvService=new CvService();
          cvService.postCvLink(cvlinkData)


          const jobExperienceData = {
            cvId: values.cvId,
            workPlaceName: values.workPlaceName,
            position: values.position,
            startYear: values.startYear,
            endYear: values.endYear           
          };  
          cvService.postcvWithJobExperience(jobExperienceData)
          
          const languageData = {
            cvId: values.cvId,
            language: values.language,
            languageLevel: values.languageLevel,
          }          
          cvService.postcvWithLanguage(languageData)
          

          const programminglanguageData = {
            cvId: values.cvId,
            programmingLanguage: values.programmingLanguage,            
          }          
         
          cvService.postcvWithProgrammingLanguage(programminglanguageData)
          
          
          const schoolData = {
            cvId: values.cvId,
            schoolName: values.schoolName,
            departmentName: values.departmentName,
            startYearForSchool: values.startYearForSchool,
            endYearForSchool: values.endYearForSchool,
          }          
          console.log(schoolData)
          cvService.postcvWithSchool(schoolData)
        }}

      
      >
        <Form className="ui form">
          <Divider horizontal>
                <Header as="h4">
                    <Icon name="tag"/>Linkler
                </Header>
          </Divider>
          <HrmsProjectTextinput name="cvId" placeholder="cvId"/>
          <HrmsProjectTextinput name="githubLink" placeholder="githubLink"/>
          <HrmsProjectTextinput name="linkedinLink" placeholder="linkedinLink"/>
          <HrmsProjectTextinput name="coverLetter" placeholder="coverLetter"/>
          <Divider horizontal>
                <Header as="h4">
                    <Icon name="tag"/>İş yeri tecrübesi
                </Header>
          </Divider>
          <HrmsProjectTextinput name="workPlaceName" placeholder="workPlaceName"/>
          <HrmsProjectTextinput name="position" placeholder="position"/>
          <HrmsProjectTextinput name="startYear" placeholder="startYear"/>
          <HrmsProjectTextinput name="endYear" placeholder="endYear"/>
          <Divider horizontal>
                <Header as="h4">
                    <Icon name="tag"/>Dil Bilgisi
                </Header>
          </Divider>
          <HrmsProjectTextinput name="language" placeholder="language"/>
          <HrmsProjectTextinput name="languageLevel" placeholder="languageLevel"/>
          <Divider horizontal>
                <Header as="h4">
                    <Icon name="tag"/>Programlama Dili
                </Header>
          </Divider>
          <HrmsProjectTextinput name="programmingLanguage" placeholder="programmingLanguage"/>
          <Divider horizontal>
                <Header as="h4">
                    <Icon name="tag"/>Okul bilgisi
                </Header>
          </Divider>
          <HrmsProjectTextinput name="schoolName" placeholder="schoolName" />
          <HrmsProjectTextinput name="departmentName" placeholder="departmentName"/>
          <HrmsProjectTextinput type="text" name="startYearForSchool" placeholder="startYearForSchool"/>
          <HrmsProjectTextinput type="text" name="endYearForSchool" placeholder="endYearForSchool"/>
          <Button color="green" type="submit">
            Ekle
          </Button>
        </Form>
      </Formik>
    </div>
  );
}
