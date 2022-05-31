import React, { useContext } from "react";
import PatientDT from '../patient/PatientDT'
import PatientForm from '../patient/PatientForm'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Add from "@material-ui/icons/Add";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';

 const  Patient = ({page})=>{
  return (
  <div>
        <PatientForm/>
        <PatientDT/>
   <br/>
 </div>
  )
}

export default Patient;