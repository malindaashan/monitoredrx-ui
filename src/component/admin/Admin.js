import React from "react";
import UserList from './UserList'
import ProjectsList from './ProjectsList'
import PatientList from './PatientList'
import Grid from '@material-ui/core/Grid'

const Admin = () => {
    const [userdata, setUserdata] = React.useState({});


  return (
    <Grid container  item spacing={3}>
   
    <Grid item xs={4} style={{maxHeight: '100vh', overflow: 'auto'}} > 
        <h2>Users</h2>
        <UserList/>
    </Grid>

    <Grid item xs={4} > 
        <h2>Research Projects</h2>
        <ProjectsList/>
    </Grid>

    <Grid item xs={4} >
        <h2>Patients</h2>
        <PatientList/>
    </Grid>
</Grid>
  )
}

export default Admin;