const ExpenseTrackerReducer = (state,action) =>{
    switch(action.type){
        case 'ADD':{
            return [action.payload,...state]
        }
        case 'REMOVE':{
            return state.filter(val=>val.id !== action.payload)
        }
        default:
            return state
    }
}
export default ExpenseTrackerReducer