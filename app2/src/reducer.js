 var reducer=(state={type:"aa"},action)=>{
       
       if(state.type ==="aa"){
        state=[action.payload]
       }
       else{
        state= [
            ...state,
            action.payload
     ]
       }
    

    return state;

 }
 export default reducer;