import axios from "axios";


export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID RcQKPs9Jo_mbN0MBI-vSRBhHqftQGRqk_r-Zak94zBk'
        }
});