import {createStore} from 'redux';
import rootReducer from './action';

const store = createStore(rootReducer);

export default store ;  