import handleCart from "./reducer/handleCart";
import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    handleCart,
})

export default rootReducer;
