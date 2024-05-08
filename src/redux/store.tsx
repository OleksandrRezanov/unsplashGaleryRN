import {createStore, applyMiddleware} from 'redux';
import {thunk} from 'redux-thunk';
import {usersReducer} from './reducers/usersReducer';

const store = createStore(usersReducer, applyMiddleware(thunk));

export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
