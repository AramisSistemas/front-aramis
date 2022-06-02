import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'   
import messagesReducer from './messagesducks'; 
import usersReducer, {userisactive} from './usersducks';   
import stockReducer from './stockducks';
import clienteReducer from './clientesducks';    

const rootReducer = combineReducers({ 
    users: usersReducer ,
    messages: messagesReducer, 
    stock: stockReducer,
    clientes: clienteReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore(){
    const store = createStore( rootReducer,  composeEnhancers( applyMiddleware(thunk) ))
    userisactive()(store.dispatch)
    return store;
}