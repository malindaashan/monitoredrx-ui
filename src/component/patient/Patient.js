import React from "react";
import PatientDT from '../patient/PatientDT'
import PatientForm from '../patient/PatientForm'
import {getAllPatientAction, addPatientAction, updatePatientAction, deletePatientAction} from '../../action/PatientAction'
import { useState } from 'react';


const Patient = () => {
  const [data, setData] = useState({});
  const [editingIndex, setEditingIndex] = useState(-1);

  const fetchData = async () => {
    let response = await getAllPatientAction();
    setData(response);
  };

  const addPatient = async (data) => {
    let response = await addPatientAction(data);
    if (response.status === 200) {
      alert("Patient Added Successfully");
      fetchData();
    } else {
      alert("Something Went wrong");
    }
  };

  const updatePatient = async (updatedRow) => {
    let response = await updatePatientAction(updatedRow);
    if (response.status === 200) {
      alert("Patient Updated Successfully");
      fetchData();
    } else {
      alert("Something Went wrong");
    }
  };

  const deletePatient= async (id) => {
    let response = await deletePatientAction(id);

      if (response.status === 200) {
        alert("Deleted patient " + id + " successfully")
        fetchData()
      } else {
        alert("Something went wrong")
      }
  };

  const handleEdit = (e, colname, editIndex) => {
    setData(data.map((row, rowindex) => (rowindex === editIndex ? { ...row, [colname]: e.target.value } : row)))
  };

  const enableEdit = (i) => {
    setEditingIndex(i)
  };

  const saveEdit = (i) => {
    updatePatient(data[i])
    setEditingIndex(-1)
  };
  return (
    <div>
      <PatientForm
        addPatient={addPatient}
      />
      <PatientDT
        data={data}
        fetchData={fetchData}
        editingIndex={editingIndex}
        enableEdit={enableEdit}
        saveEdit={saveEdit}
        handleEdit={handleEdit}
        deletePatient={deletePatient}

      />
      <br />
    </div>
  )
}

export default Patient;