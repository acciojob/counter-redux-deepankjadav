import {createStore} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './Reducer';

let store = configureStore({
  reducer, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
});

    export default store;
