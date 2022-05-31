import * as React from 'react';
import axios from 'axios';

export const AddPatient = async (data) => {
    try {
      const response = await axios.post('http://localhost:8080/addPatient',data);
     // console.log(response)
      if(response.status == 200){
        alert("Patient Added Successfully");
      } else {
        alert("Something Went wrong");
      }
      return response;
    } catch (error) {
      alert("Something Went wrong");
      console.error(error);
    }
  };