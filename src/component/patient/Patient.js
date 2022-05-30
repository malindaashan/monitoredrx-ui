import React, { useContext } from "react";
import PatientDT from '../patient/PatientDT'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Add from "@material-ui/icons/Add";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

 const  Patient = ({page})=>{

  return (
  <div>
        <h3><b>Patient Management</b></h3>
        <br/>
   <PatientDT/>
   <br/>

    <Button id="addbutton" variant="contained" color="primary" sx={{ height: 40 }} startIcon={<Add />}>
        Add Patient
    </Button>
    &nbsp;&nbsp;&nbsp;
  <Button id="updatebutton" variant="contained" color="primary" sx={{ height: 40 }} startIcon={<AddPhotoAlternateIcon />}>
    Update Patient
  </Button>
  &nbsp;&nbsp;&nbsp;
  <Button id="deletebutton" variant="contained" color="secondary" sx={{ height: 40 }} startIcon={<HighlightOffIcon />}>
    Delete Patient
  </Button>
 </div>
  )
}

export default Patient;