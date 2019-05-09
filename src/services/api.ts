import axios from 'axios';

const api = axios.create({
    baseURL: '//localhost:9000/api/',
});


const apis = {
    getSession: () => api.post('session', {headers: {"content-type": "application/json"}}), 
    patchSession: (session: string, errorRate: number) => api.patch('session',{errorRate : errorRate}, {headers : {"content-type": "application/json", "sessionId": session}}), 
    deleteSession: (session: string) => api.delete('session', {headers : {"content-type": "application/json", "sessionId": session}}), 
}

export default apis;