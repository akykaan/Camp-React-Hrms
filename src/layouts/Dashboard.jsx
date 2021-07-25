import React from "react";
import { Grid } from "semantic-ui-react";
import JobTitleList from "../pages/JobTitleList";
import { Route } from "react-router-dom";
import JobAdvertAdd from "../pages/JobAdvertAdd";
import JobAdvertList from "../pages/JobAdvertsList";
import LoginList from "../pages/LoginList";
import CvAdd from "../pages/CvAdd";
import CandidatePage from "../pages/CandidatePage";
import EmployeeList from "../pages/EmployeeList";
import EmployeeSettings from "../pages/EmployeeSettings";
import testList from "../pages/testList";

export default function Dashboard() {
  return (
    <div>
      <Grid divided>
        <Grid.Row>
          {/*<Grid.Column width={4}></Grid.Column>*/}
          <Grid.Column width={12}>
            {/* <CandidateList/>
                <JobTitleList/>
                <CitiesList/>*/}
            <Route path="/login" component={LoginList}/>
            <Route exact path="/" component={JobTitleList} />
            <Route exact path="/jobtitle" component={JobTitleList} />            
            <Route path="/jobadvert/add" component={JobAdvertAdd}/>

            <Route path="/jobadverts" component={JobAdvertList}/>

            <Route path="/employeepage" component={EmployeeList}/>
            <Route path="/employeesettings" component={EmployeeSettings}/>
            <Route path="/cv" component={CvAdd}/>
            <Route path="/testLogin" component={testList}/>
            <Route path="/candidatePage" component={CandidatePage}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
