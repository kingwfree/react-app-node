import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import { composeWithDevTools } from 'redux-devtools-extension'
// import './static/redux'
//它使redux可以做异步操作
//thunk是一个函数，它包装表达式以延迟其计算
import thunk from "redux-thunk";
/*
    react-redux 它能够使你的React组件从Redux store中读取数据，
    并且向store分发actions以更新数据
*/
//Provider 负责数据处理 （容器）
//<Provider/>组件，能够使你的整个app访问到Redux store中的数据
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux"
import {reducer} from './static/redux/redux'
//const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():()=>{}
const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
