import axios from "axios";

export function API(catygory, sortBy, order) {
  return axios.get(`http://localhost:3001/pizzas?${catygory !== null?`category=${catygory}`:""}&_sort=${sortBy}&_order=${order}`)
 .then(({ data }) => {
      return data;
    });
    
   
}
