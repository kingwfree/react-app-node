import React, { Component } from 'react';

class App extends Component {
  render() {
    //console.log(this.props)
    const {store,add,remove,removeAsync} = this.props;
    // store.subscribe(()=>{
    //     console.log()
    // })
    //console.log(store.getState)
    
    return (
      <div className="App">
        <p>{store.getState()}</p>
        <button
          onClick = {()=>{
            store.dispatch(add())
          }}
        >
          增加炮兵
        </button>
        <button
          onClick={()=>{
            store.dispatch(remove())
          }}
        >
          减少炮兵
        </button>
        <button
          onClick = {()=>{
            store.dispatch(removeAsync())
          }}
        >
          减少炮兵异步
        </button>
      </div>
    );
  }
}

export default App;
