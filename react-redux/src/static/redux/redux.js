const addArtillerymen = '增加炮兵';
const removeArtillerymen = '减少炮兵';
function reducer(state,action) {
    switch(action.type){
        case addArtillerymen:
            return state + 4
        case removeArtillerymen:
            return state - 2
        default:
            return 1
    }
}

function add(){
    return {
        type:addArtillerymen
    }
}
function remove() {
    return {
        type:removeArtillerymen
    }
}

//redux中做异步操做
function removeAsync() {
    return dispatch=>{
        setTimeout(()=>{
            dispatch(remove())
        },2000)
    }
}

export {
    reducer,
    add,
    remove,
    removeAsync
}