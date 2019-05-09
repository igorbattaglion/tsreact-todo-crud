/**
 * Action types
 */
export enum SessionsTypes {
    'LOAD_REQUEST' = '@sessions/LOAD_REQUEST',
    'LOAD_SUCCESS' = '@sessions/LOAD_SUCCESS',
    'LOAD_LOGOUT' = '@sessions/LOAD_LOGOUT',
    'LOAD_FAILURE' = '@sessions/LOAD_FAILURE',
    'LOAD_UPDATE' = '@sessions/LOAD_UPDATE'
}

/**
 * Data types
 */
export interface Session{
    status: string
    sessionId: string
    errorRate: number
}

/**
 * State type
 */
export interface SessionsState{
    readonly data: Session[]
    readonly loading: boolean
    readonly error: boolean
    readonly isAuthenticated: boolean
}