import React, { useContext } from "react";
import PatientDT from '../patient/PatientDT'
import PatientForm from '../patient/PatientForm'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Add from "@material-ui/icons/Add";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import {useState} from 'react';
import axios from 'axios';
 const  Patient = ({page})=>{
  const [data, setData] = useState({});
  const fetchData = async () => {
    try {
      const { data: response } = await axios.get('http://localhost:8080/allPatients');
      console.log(response)
      setData(response);
    } catch (error) {
      console.error(error)
    }
  };
   const addPatient = async (data) => {
    console.log("hereee")
    try {
      const response = await axios.post('http://localhost:8080/addPatient',data);
     // console.log(response)
      if(response.status == 200){
        alert("Patient Added Successfully");
        fetchData();
      } else {
        alert("Something Went wrong");
      }
    } catch (error) {
      alert("Something Went wrong");
      console.error(error);
    }
  };

  return (
  <div>
        <PatientForm
        fetchData={fetchData}
        addPatient={addPatient}
        />
        <PatientDT
          data = { data }
          fetchData={fetchData}
          
        />
   <br/>
 </div>
  )
}

export default Patient;