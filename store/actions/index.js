export const GET_STORES = 'GET_STORES';
const baseURL = 'http://localhost:5090/api/';

export const get_store_dispatch = (data)=>{
    return dispatch =>{
        dispatch({type :GET_STORES , data }); // this is the action in redusers
    };
};

export const get_store_action = () =>{
    return async dispatch=>{
        const response = await fetch(baseURL+'store/getGeneralData',
         {
          method:'get',
          'Content-Type':'application/json'      
         }
       );
       const data = await response.json();
       if(data.status)
       {

       }else{
            let message = data.message;
            throw new Error(message); 
       }
    }
}