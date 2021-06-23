import React from "react";
import { Grid } from "semantic-ui-react";
import JobTitleList from "../pages/JobTitleList";
import { Route } from "react-router-dom";
import JobAdvertList from "../pages/JobAdvertList";
import HrmsStaffList from "../pages/HrmsStaffList";
import LoginList from "../pages/LoginList";

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
            <Route path="/jobadvert/add" component={JobAdvertList}/>
            <Route path="/hrmsstaff" component={HrmsStaffList}/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
