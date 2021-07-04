const initalState={
        catygory:null,
        sortBy:{
                type:"popular",
                order:"dask"
        }
}

export const sortBy=(state=initalState, action)=>{
        switch (action.type) {
                case "SET_SORT_BY":{
                        return{
                                ...state,
                                sortBy:action.payload
                        }
                }

                case "SET_CATEGORY":{
                        return{
                                ...state,
                                catygory:action.payload
                        }
                }
                        
        
                default:
                        return state;
                        
        }
}

