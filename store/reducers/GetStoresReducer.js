import {GET_STORES} from '../actions/GetStoresAction';

const initialState = {
    allStores :[]
}

export default (state = initialState , action)=>{

    switch (action.type) {
        case GET_STORES:
          return{
             ...state, // sprid operiation
             allStores : action.data             
          }
        default:
            return state
    }

};

