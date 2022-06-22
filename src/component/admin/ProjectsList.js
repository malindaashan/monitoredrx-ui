import React from "react";
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

export default function ProjectsList({projectdata,handleProjectClick}) {
  return (
    <List component="nav" aria-label="main mailbox folders">
        {projectdata !== undefined ? projectdata.map((project) => (
          
                <Button id = {project.id} onClick={() => { handleProjectClick(project.id)}} fullWidth>
                <ListItemText
                primary={project.projectName}
                >
                </ListItemText>
                </Button>
        )): null}
    </List>
  )
}