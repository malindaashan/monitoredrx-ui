import React from "react";
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TabScrollButton from '@material-ui/core/TabScrollButton';
import Button from '@material-ui/core/Button';


export default function PatientList ({patientdata}) {
  return (
    <List component="nav" aria-label="main mailbox folders">

      {patientdata !== undefined ? patientdata.map((patient) => (
          
          <Button id = {patient.id} fullWidth>
          <ListItemText
          primary={patient.firstname+ " "+patient.lastname}
          >
          </ListItemText>
          </Button>
  )): null}
    </List>
  )
}