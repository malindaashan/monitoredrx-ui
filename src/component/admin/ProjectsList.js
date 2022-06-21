import React from "react";
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const ProjectsList = () => {
  return (
    <List component="nav" aria-label="main mailbox folders">

        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Project1" />
        <Divider />
        <ListItemIcon>
        </ListItemIcon>
        <ListItemText primary="Project2" />
        <Divider />
    </List>
  )
}

export default ProjectsList;