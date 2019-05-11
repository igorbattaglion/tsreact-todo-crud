import { action } from 'typesafe-actions'
import { SessionsTypes, Session } from './types';

export const loadSession = () => action( SessionsTypes.LOAD_REQUEST);

export const updateSession = (data: number) => action( SessionsTypes.LOAD_UPDATE, data);

export const successSession = (data: Session) => action(SessionsTypes.LOAD_SUCCESS, { data });

export const deleteSession = () => action(SessionsTypes.LOAD_LOGOUT);

export const failureSession = () => action( SessionsTypes.LOAD_FAILURE);