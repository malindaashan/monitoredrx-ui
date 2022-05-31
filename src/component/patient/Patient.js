import React, { useContext } from "react";
import PatientDT from '../patient/PatientDT'
import PatientForm from '../patient/PatientForm'
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Add from "@material-ui/icons/Add";
import {BASE_URL} from '../action/Settings'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import {useState} from 'react';
import axios from 'axios';
 const  Patient = ()=>{

  const [data, setData] = useState({});
  const [editingIndex, setEditingIndex] = useState(-1);
  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(BASE_URL+'/allPatients');
      setData(response);
    } catch (error) {
      console.error(error)
    }
  };
   const addPatient = async (data) => {

    try {
      const response = await axios.post(BASE_URL+'/addPatient',data);
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

  const updatePatient = async (updatedRow) => {

    try {
      const response = await axios.put(BASE_URL+'/updatePatient',updatedRow);
     // console.log(response)
      if(response.status == 200){
        alert("Patient Updated Successfully");
        fetchData();
      } else {
        alert("Something Went wrong");
      }
    } catch (error) {
      alert("Something Went wrong");
      console.error(error);
    }
  };
  const deletePatient = async (id) => {
    try {
      const response  = await axios.delete('http://localhost:8080/deletePatient/'+id);
      if(response.status == 200){
          alert("Deleted patient "+id+" successfully")
          fetchData()
      } else{
          alert("Something went wrong")
      }
    } catch (error) {
      console.error(error)
    }
  };

   const handleEdit = (e,colname,i) => {
    console.log(e.target.value)  
    setData(data.map((row, j) => (j ==i? { ...row,[colname]: e.target.value} :row)))
    };

  const enableEdit = (i) => {
    setEditingIndex(i)
  };

  const saveEdit = (row,i) => {
    updatePatient(data[i])
    setEditingIndex(-1)
  };
  return (
  <div>
        <PatientForm
        addPatient={addPatient}
        />
        <PatientDT
          data = { data }
          fetchData={fetchData}
          editingIndex={editingIndex}
          enableEdit={enableEdit}
          saveEdit={saveEdit}
          handleEdit={handleEdit}
          deletePatient={deletePatient}
          
        />
   <br/>
 </div>
  )
}

export default Patient;