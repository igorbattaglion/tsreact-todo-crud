import axios from 'axios';

const api = axios.create({
    baseURL: '//localhost:9000/api/',
});


const apis = {
    getSession: () => api.post('session', {headers: {"content-type": "application/json"}}), 
    patchSession: (session: string, errorRate: number) => api.patch('session',{errorRate : errorRate}, {headers : {"content-type": "application/json", "sessionId": session}}), 
    deleteSession: (session: string) => api.delete('session', {headers : {"content-type": "application/json", "sessionId": session}}), 
    getTodos: (session: string) => api.get('todos', {headers : {"content-type": "application/json", "sessionId": session}}), 
    createTodo: (session: string, text: string, isCompleted: boolean, urgency: number) => api.post('todos', {text: text, isCompleted: isCompleted, urgency: urgency}, {headers : {"content-type": "application/json", "sessionId": session}}), 
    deleteTodo: (session: string, todoID: string) => api.delete(`todos/${todoID}`, {headers : {"content-type": "application/json", "sessionId": session}}), 
    updateTodo: (session: string, todoID: string, text?: string, isCompleted?: boolean, urgency?: number) => api.patch(`todos/${todoID}`, {text: text, isCompleted: isCompleted, urgency: urgency}, {headers : {"content-type": "application/json", "sessionId": session}}), 
}

export default apis;