import axios from 'axios';

const KEY = 'AIzaSyAX5FE0RgM1FUDOydL-wwanEK7_E4z646k';


export default axios.create({
    baseURL:'www.googleapis.com/youtube/v3/search',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});