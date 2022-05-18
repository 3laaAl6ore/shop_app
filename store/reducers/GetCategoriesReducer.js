import {GET_CATEGORIES} from '../actions/GetCategoriesAction';

const initialState = {
    all_categories :[]
}

export default (state = initialState , action)=>{

    switch (action.type) {
        case GET_CATEGORIES:
          return{
             ...state, // sprid operiation
             all_categories : action.data             
          }
        default:
            return state
    }

};