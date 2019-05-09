import { action } from 'typesafe-actions'
import { SessionsTypes, Session } from './types';

export const loadRequest = () => action( SessionsTypes.LOAD_REQUEST);

export const loadUptade = (data: number) => action( SessionsTypes.LOAD_UPDATE, data);

export const loadSuccess = (data: Session) => action(SessionsTypes.LOAD_SUCCESS, { data });

export const loadDelete = () => action(SessionsTypes.LOAD_LOGOUT);

export const loadFailure = () => action( SessionsTypes.LOAD_FAILURE);