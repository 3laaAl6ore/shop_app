export const GET_CATEGORIES = 'GET_CATEGORIES';
//import store_id from "../../src/screens/stores/StoreDetails.js";
const baseURL = 'http://10.0.0.23:5090/api/';
console.log("get i ininiin");
export const get_category_dispatch = (data)=>{
    return dispatch =>{
        dispatch({type :GET_CATEGORIES , data }); // this is the action in redusers
    };
};

export const get_categories_action = () =>{
    return async dispatch=>{
        const response = await fetch(baseURL+'catagory/getAllCategories/627f9784925fbd410f17c4d4',

       );
       const data = await response.json();
       if(data.status)
       {
        dispatch(get_category_dispatch(data));
        console.log("text");
       }else{
            let message = data.message;
              console.log("SSS");
            throw new Error(message); 
          
       }
    }
}