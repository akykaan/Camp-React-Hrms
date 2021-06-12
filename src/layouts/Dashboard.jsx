import React from "react";
import CandidateList from "../pages/CandidateList";
import { Grid} from 'semantic-ui-react'
import JobTitleList from "../pages/JobTitleList";
import CitiesList from "../pages/CitiesList";

export default function Dashboard() {
  return (
    <div>        
        <Grid divided>
            <Grid.Row>
            <Grid.Column width={4}>
                
            </Grid.Column>
            <Grid.Column width={12}>
                <CandidateList/>
                <JobTitleList/>
                <CitiesList/>
            </Grid.Column>
            </Grid.Row>
        </Grid>        
    </div>
  );
}
