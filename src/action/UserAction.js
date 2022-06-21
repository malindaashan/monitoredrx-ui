import { BASE_URL } from '../action/Settings'
import axios from 'axios';

export const getUserDataAction  = async () => {
    try {
        const { data: response } = await axios.get(BASE_URL + '/allUsers');
        return response;
      } catch (error) {
        console.error(error)
      }
}