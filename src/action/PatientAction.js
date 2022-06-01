import { BASE_URL } from '../action/Settings'
import axios from 'axios';

export const getAllPatientAction  = async () => {
    try {
        const { data: response } = await axios.get(BASE_URL + '/allPatients');
        return response;
      } catch (error) {
        console.error(error)
      }
}

export const addPatientAction  = async (data) => {
    try {
        const response = await axios.post(BASE_URL + '/addPatient', data);
        return response;
      } catch (error) {
        alert("Something Went wrong");
        console.error(error);
      }
}

export const updatePatientAction  = async (updatedRow) => {
    try {
        const response = await axios.put(BASE_URL + '/updatePatient', updatedRow);
        return response;
      } catch (error) {
        alert("Something Went wrong");
        console.error(error);
      }
}

export const deletePatientAction  = async (id) => {
    try {
        const response = await axios.delete(BASE_URL + '/deletePatient/'+id);
        return response;
      } catch (error) {
        alert("Something Went wrong");
        console.error(error);
      }
}