import { Session } from "../store/ducks/sessions/types";

export const loadState = () => {
    try{
      const serializedState = localStorage.getItem('session')
  
      if(serializedState === null){
        return undefined
      }
      return JSON.parse(serializedState)
    }catch(err){
      return undefined
    }
  }
  
  export const saveState = (state: Session) => {
    try {
      const serializedState = JSON.stringify(state)
      localStorage.setItem('session', serializedState)
    } catch (error) {
      
    }
  }

  export const deleteState = () => {
    try {
      localStorage.removeItem('session')
    } catch (error) {
      
    }
  }