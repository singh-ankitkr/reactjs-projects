import axios from 'axios';

const KEY = 'AIzaSyC6nVSr6LaHuzIqzmOjkmzCMlRmlhEjJdI';


export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3" ,
    params: {
        part: "snippet",
        type: "video",
        maxResults: "5",
        key: KEY
    }
});