import React from "react";
import UserList from './UserList'
import ProjectsList from './ProjectsList'
import PatientList from './PatientList'
import Grid from '@material-ui/core/Grid'
import {getAllUserDataAction} from '../../action/UserAction'
import {getProjectByUserId} from '../../action/ProjectAction'
import {patientFromProjectIdAction} from '../../action/PatientAction'
import { useEffect } from 'react';

const Admin = () => {
    const [userdata, setUserdata] = React.useState({});
    const [projectdata, setProjectdata] = React.useState({});
    const [patientdata, setPatient] = React.useState({});

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        let response = await getAllUserDataAction();
        setUserdata(response);
    };

    

    const handleUserClick = async (id) => {
        let response = await getProjectByUserId(id);
        setProjectdata(response);
    };
    const handleProjectClick = async (id) => {
        let response = await patientFromProjectIdAction(id);
        setPatient(response);
    };


  return (
    <Grid container  item spacing={3}>
   
    <Grid item xs={4} style={{maxHeight: '100vh', overflow: 'auto'}} > 
        <h2>Users</h2>
    {
       userdata.length > 0?
       <UserList
       userdata = {userdata}
       handleUserClick={handleUserClick}
       />  : null
    }
    </Grid>

    <Grid item xs={4} style={{maxHeight: '100vh', overflow: 'auto'}} > 
        <h2>Research Projects</h2>
        {
            projectdata.length > 0 ?
            <ProjectsList
                projectdata = {projectdata}
                handleProjectClick={handleProjectClick}
            /> : null
        }
        
    </Grid>

    <Grid item xs={4} style={{maxHeight: '100vh', overflow: 'auto'}} > 
        
        <h2>Patients</h2>
        {
            patientdata.length > 0 ?
            <PatientList
            patientdata={patientdata}
            /> : null
        
        }
    </Grid>
</Grid>
  )
}

export default Admin;