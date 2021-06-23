import React, { useState } from "react";
import { Button, Form, Checkbox } from "semantic-ui-react";
import JobAdvertService from "../services/JobAdvertService";

export default function JobAdvertList() {
  const [appDate, setAppDate] = useState("");
  const [appDateLine, setAppDateLine] = useState("");
  const [openPosition, setOpenPosition] = useState("");
  const [cityName, setCityName] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [typeOfWork, setTypeOfWork] = useState("");
  const [workingTime, setWorkingTime] = useState("");
  


  const handleSubmit = () => {
    const data = {
      appDate: appDate,
      appDateLine: appDateLine,
      openPosition: openPosition,
      cityName: cityName,
      jobDescription: jobDescription,
      typeOfWork: typeOfWork,
      workingTime: workingTime,
      active: false,
    };

    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .postJobAdvert(data)
      .then((response) => {
        console.log("basarılı:", response.data);
        console.log("appdate:", data.appDate);
        console.log("appdateLine:", data.appDateLine);
      })
      .catch((error) => {
        console.log("hata:", error.data);
        console.log("hata appdate:", data);
        console.log("hata appdate:", data.active);
        
      });
  };

  const handleChange = (event, { value }) => setTypeOfWork(value);
  const handleChangeForWorkTime = (event, { value }) => setWorkingTime(value);

  // buton fonk içine almak lazım burayı

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Application Date</label>
          <input
            type="date"
            className="form-control"
            id="appDate"
            placeholder="Application Date yyyy-MM-dd"
            value={appDate}
            onChange={(e) => setAppDate(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Application Dead Line</label>
          <input
            type="date"
            className="form-control"
            id="appDateLine"
            placeholder="Application Dead Line yyyy-MM-dd"
            value={appDateLine}
            onChange={(e) => setAppDateLine(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Open Position</label>
          <input
            type="text"
            className="form-control"
            id="openPosition"
            placeholder="Open Position"
            value={openPosition}
            onChange={(e) => setOpenPosition(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>City Name</label>
          <input
            type="text"
            className="form-control"
            id="cityName"
            placeholder="City Name"
            value={cityName}
            onChange={(e) => setCityName(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          <label>Job Description</label>
          <input
            type="text"
            className="form-control"
            id="jobDescription"
            placeholder="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />
        </Form.Field>

        <Form.Field>
          Seçilen çalışma ortamı : <b>{typeOfWork}</b>
        </Form.Field>

        <Form.Field>
          <Checkbox
            label="Uzaktan Çalışma"
            name="radioGroup"
            value="Uzaktan Çalışma"
            checked={typeOfWork === "Uzaktan Çalışma"}
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field>
          <Checkbox
            label="İş yerinde çalışma ortamı"
            name="radioGroup"
            value="İş yerinde çalışma ortamı"
            checked={typeOfWork === "İş yerinde çalışma ortamı"}
            onChange={handleChange}
          />
        </Form.Field>

        <Form.Field>
          Seçilen çalışma zamanı : <b>{workingTime}</b>
        </Form.Field>

        <Form.Field>
          <Checkbox
            label="Yarı Zamanlı"
            name="radioGroup"
            value="Yarı Zamanlı"
            checked={workingTime === "Yarı Zamanlı"}
            onChange={handleChangeForWorkTime}
          />
        </Form.Field>

        <Form.Field>
          <Checkbox
            label="Tam zamanlı"
            name="radioGroup"
            value="Tam zamanlı"
            checked={workingTime === "Tam zamanlı"}
            onChange={handleChangeForWorkTime}
          />
        </Form.Field>

        <Button onClick={handleSubmit} type="submit">
          Yolla          
        </Button>
        <Form.Field>
          <Checkbox
            readOnly
            disabled
            indeterminate
            type="checkbox"
            id="active"
            label="Henüz yayına geçmemiz ilan. Yetkili Onayı gereklidir."            
          />
        </Form.Field>
      </Form>
    </div>
  );
}
