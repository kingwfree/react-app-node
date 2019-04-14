import React, { Component } from 'react';
//import {BrowserRouter} from 'react-router-dom'
//给BrowserRouter取个别名 首字母大写
import {BrowserRouter as Zfq,Route,Link,NavLink,Switch} from 'react-router-dom'
import Info from './component/info/index'
import News from './component/news/index'
import Person from './component/person/index'
import Not from './component/404/index'
import Newsdetail from './component/newsdetail/index'

class App extends Component {
  
  render() {
    return (
      <Zfq>
        <div className="App">
          
          <hr />
          <Link to="/" >跳转news</Link>
          <NavLink activeClassName={'on'} to="/a">跳转info</NavLink>
          <hr />
          <br />
          <Switch>
            <Route exact path="/" component={News}></Route>
            <Route path="/a" component={Info}></Route>
            <Route path="/b" component={Person}></Route>
            <Route path="/newsd/:a" component={Newsdetail}/>
            <Route path="/newsd" component={Newsdetail}/>
            <Route component={Not}></Route>
          </Switch>
        </div>
      </Zfq>
    );
  }
}

export default App;
