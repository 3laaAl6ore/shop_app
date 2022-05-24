export const GET_CATEGORIES = 'GET_CATEGORIES';
//import store_id from "../../src/screens/stores/StoreDetails.js";
const baseURL = 'http://192.168.0.101:5090/api/';
console.log("get i ininiin");
export const get_category_dispatch = (data)=>{
    return dispatch =>{
        dispatch({type :GET_CATEGORIES , data }); // this is the action in redusers
    };
};

export const get_categories_action = (store_id) =>{
    return async dispatch=>{
        const response = await fetch(baseURL+'catagory/getAllCategories/'+store_id,

       );
       const data = await response.json();
       if(data.status)
       {
        dispatch(get_category_dispatch(data));
        console.log("text");
       }else{
            let message = data.message;
              console.log("SSS");
            throw new Error(message); // 1 .2 .6 .8 .10
          
       }
    }
}