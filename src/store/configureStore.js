import {createStore} from 'redux';
import reducers from '../reducers';
import initialState from './initialState';

const configureStore = () => {
    return createStore(
        reducers,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
};

export default configureStore;
