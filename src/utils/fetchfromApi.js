import axios from "axios";
import  {React_App_Api_Key} from  "./Key";
const Base_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': React_App_Api_Key,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchfromApi = async(url) => {
 const {data} = await axios.get(`${Base_URL}/${url}`, options)
 return data;
};