import { createStore } from "redux";

function reducer(state,action) {
    switch(action.type){
        case '骑兵':
            return state + 4
        case '炮兵':
            return state - 2
        default:
            return 1
    }
}
/*
    createStore (reducer, initialState, enhancer)
    
    这个方法是Redux核心中的核心，
    它将所有其他的功能连接在一起，
    暴露操作的API供开发者调用。

    createStore会主动触发一次dispach，
    它的action.type是系统内置的INIT，
    所以在reducer中不会匹配到任何开发者自定义的action.type，
    它走的是switch中default的逻辑，
    目的是为了得到初始化的状态。

    第三个参数enhancer只有在使用中间件时才会用到，
    通常情况下我们搭配applyMiddleware来使用
*/ 
/*
    createStore会返回一些操作API，包括：

        getState：获取当前的state值

        dispatch：触发reducer并执行listeners中的每一个方法

        subscribe：将方法注册到listeners中，通过dispatch来触发
*/ 

/*
const INIT = '@@redux/INIT_' + Math.random().toString(36).substring(7)

function createStore (reducer, initialState, enhancer) {  
    if (typeof initialState === 'function') {
        enhancer = initialState
        initialState = undefined
    }  
    let state = initialState  
    const listeners = []  
    const store = {
        getState () {      
            return state
        },
        dispatch (action) {      
            if (action && action.type) {
                state = reducer(state, action)
                listeners.forEach(listener => listener())
            }
        },
        subscribe (listener) {      
            if (typeof listener === 'function') {
                listeners.push(listener)
            }
        }
    }  
    if (typeof initialState === 'undefined') {
        store.dispatch({ type: INIT })
    }  
    if (typeof enhancer === 'function') {    
        return enhancer(store)
    }  
    return store
}


*/


const store = createStore(reducer)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({
    type:'骑兵'
})
store.dispatch({
    type:'炮兵'
})