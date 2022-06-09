import {createStore} from 'redux';
import rootReducers from '../redux/action/reducer';

const store = createStore(rootReducers);

export default store ;  