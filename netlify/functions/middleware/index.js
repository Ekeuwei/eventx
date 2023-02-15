import axios from 'axios'
import { BASE_URI } from '../../../src/App';
const fetch = require("node-fetch");

// exports.handler = async (url) => {
//   let statusCode, data;

//   try {
//     const response = await fetch(url);
//     data = await response.json();
//     statusCode = 200;
//   } catch (err) {
//     statusCode = err.statusCode || 500;
//     data = { error: err.message };
//   }

//   return {
//     data,
//     // statusCode,
//     // body: JSON.stringify(data),
//   };
// };

exports.handler = async (event, context, details, config)  =>{
    let result;
    const { keyword } = event.queryStringParameters;
    try {

        const { data } = await axios.post(`${BASE_URI}/auth/authenticate`)

        result.data = data;
    } catch (error) {
      result.error = error
    }

    return result;
}