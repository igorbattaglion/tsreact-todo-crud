/**
 * Action types
 */
export enum TodosTypes {
    'LOAD_REQUEST' = '@todos/LOAD_REQUEST',
    'LOAD_SUCCESS' = '@todos/LOAD_SUCCESS',
    'LOAD_DELETE' = '@todos/LOAD_DELETE',
    'LOAD_FAILURE' = '@todos/LOAD_FAILURE',
    'LOAD_UPDATE' = '@todos/LOAD_UPDATE',
    'LOAD_CREATE' = '@todos/LOAD_CREATE'
}

export interface Todos{
        id: string
        text: string
        created: string
        updated: string
        isCompleted: boolean
        urgency: number
}

export interface newTodo{
        text: string
        isCompleted: boolean
        urgency: number
}

/**
 * Data types
 */
export interface Todo{
    status: string
    todos: Todos[]
}

/**
 * State type
 */
export interface TodosState{
    readonly data: Todo
    readonly loading: boolean
    readonly error: boolean
}