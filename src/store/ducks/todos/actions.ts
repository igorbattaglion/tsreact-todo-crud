import { action } from 'typesafe-actions'
import { TodosTypes, Todo } from './types';

export const loadTodos = () => action( TodosTypes.LOAD_REQUEST);

export const updateTodo = (todoID: string, text?: string, isCompleted?: boolean, urgency?: number) => action( TodosTypes.LOAD_UPDATE, {todoID, text, isCompleted, urgency});

export const createTodo = (text: string, isCompleted: boolean, urgency: number) => action( TodosTypes.LOAD_CREATE, {text, isCompleted, urgency});

export const successTodo = (data: Todo) => action(TodosTypes.LOAD_SUCCESS, {data});

export const deleteTodo = (todoID: string) => action(TodosTypes.LOAD_DELETE, todoID);

export const failureTodo = () => action( TodosTypes.LOAD_FAILURE);