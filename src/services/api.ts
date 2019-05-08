import axios from 'axios';

const api = axios.create({
    baseURL: '//localhost:9000/',
});

var headers = {
    "content-type": "application/json",
  }

const apis = {
    getTodos: () => api.get('api/todos', {headers}) 
}

export default apis;