import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID N2_I1Y32HTZ0zpLout8Tf1kvuISUxE0pcpBdXytv2l0'
    }
});