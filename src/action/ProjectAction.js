import { BASE_URL } from './Settings'
import axios from 'axios';

export const getProjectByUserId  = async (id) => {
    try {
        const { data: response } = await axios.get(BASE_URL + '/getProjectByUser/'+ id);
        return response;
      } catch (error) {
        console.error(error)
      }
}

