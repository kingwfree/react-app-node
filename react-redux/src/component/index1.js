import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { composeWithDevTools } from 'redux-devtools-extension'
// import './static/redux'
//它使redux可以做异步操作
//thunk是一个函数，它包装表达式以延迟其计算
import thunk from "redux-thunk";

import { createStore,applyMiddleware } from "redux"
import {reducer,add,remove,removeAsync} from './static/redux/redux'
//const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():()=>{}
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

render();
function render(){
    ReactDOM.render(
        <App 
            store={store}
            add={add}
            remove={remove}
            removeAsync={removeAsync}
        />, 
        document.getElementById('root')
    );
}
store.subscribe(render)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

