import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//脚手架基于webpack的高度封装 所以可以解释less scss css
//App根组件
import App from './App';
//脚手架引入模块可以不带后缀
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
/* 
    如果希望应用程序脱机工作并更快地加载，
    可以在下面将unregister（）更改为register（）。
    注意，这会带来一些陷阱。
    了解有关服务工作者的更多信息：https://bit.ly/cra-pwa
*/
serviceWorker.unregister();

//index.js是程序入口