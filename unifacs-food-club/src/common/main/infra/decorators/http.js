// dependencies
import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost/', 

    headers: {                  
        "Access-Control-Allow-Origin": "http://localhost:3000/",
        "credentials": "include",
        "mode": 'CORS',
    },
});

async function get(url, config) {
    return request( { url, method: 'get', ...config } );
}

async function post(url, config) {
    return request( { 
        url,
        method: 'post',
        headers: {'Content-Type': 'multipart/form-data'},
        ...config,
    });
}

async function _delete(url, config) {
    return request( { url, method: 'delete', ...config } );
}

export { get, post, _delete };