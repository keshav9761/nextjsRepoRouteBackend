import axios from 'axios'
import EndPoints from './endPoints'

const instance = axios.create({
    baseURL: 'http://localhost:8080', // Replace with your API's base URL
    // You can also add other configuration options here, like headers, timeouts, etc.
});

class Servies {
    constructor() {
        // Response
        instance.interceptors.response.use(
            response => {
                console.log("response", response)
                // Modify the response data or do something with it
                return response;
            },
            error => {
                // Handle response error
                // You can also throw an error to propagate it to the calling code
                return Promise.reject(error);
            })
        // Request
        instance.interceptors.request.use(
            request => {
                console.log("request", request)
                // Modify the request data or do something with it
                return request;
            },
            error => {
                // Handle response error
                // You can also throw an error to propagate it to the calling code
                return Promise.reject(error);
            })
    }

    getApi = async (endPoints, params) => {
        const response = await instance.get(endPoints)
        return response;
    }
    // postApi
    postApi = async (endPoints,body) => {
        const response = await instance.post(endPoints,body)
        return response;
    }
}

export { EndPoints }

export default new Servies();
