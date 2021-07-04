export const sortPizzas=({type,order})=>{
        return{
                type:"SET_SORT_BY",
                payload:{type,order},
        }
}


export const setCotegory=(val)=>{
        return{
                type:"SET_CATEGORY",
                payload:val
        }
}