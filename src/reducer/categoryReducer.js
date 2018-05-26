import { CATEGORY_UPDATE,SORT_UPDATE,GOODSLIST_UPDATE } from "../actionTypes";
export default (state,action) => {
   
    switch (action.type) {
        case CATEGORY_UPDATE:
            var newState = {...state}
            newState.navList = action.text;

            return newState;
            break;
        
        case SORT_UPDATE:
            var newState = {...state}
            newState.bottomList = action.text;

            return newState;
            break;
        case GOODSLIST_UPDATE || GOODSSHOW_UPDATE:
            var newState = {...state}
            newState.goodsList = action.text;

            return newState;
            break;
    
        default:
            return state;
            break;
    }
}