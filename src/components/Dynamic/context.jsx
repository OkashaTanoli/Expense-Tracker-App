import React ,{createContext, useReducer } from 'react'
import ExpenseTrackerReducer from './reducer'

const objVal = [
]

export const CreatingContext = createContext(objVal)

export const ExpenseProvider = ({children}) =>{
    let [state,dispatch] = useReducer(ExpenseTrackerReducer,objVal)
    function SetAdding(obj){
        console.log(obj)
        let random = Math.random()*1999999999999999
        let flooring = Math.floor(random)
        dispatch({type:'ADD',payload:{text:obj.text,amount:obj.amount,id:flooring}})
    }
    function Remove(id){
        dispatch({type:'REMOVE',payload:id})
        // console.log(id)
    }
    return(
        <CreatingContext.Provider value={{
            context:state,
            SetAdding,
            Remove
            }}>
            {children}
        </CreatingContext.Provider>
    )
}

