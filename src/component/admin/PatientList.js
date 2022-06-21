import React from "react";
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import TabScrollButton from '@material-ui/core/TabScrollButton';


const PatientList = () => {
  return (
    <List component="nav" aria-label="main mailbox folders">

        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Patient1" />
        <Divider />
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Patient2" />
        <Divider />
    </List>
  )
}

export default PatientList;