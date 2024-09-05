//整个项目的入口 从这里开始运行


//react的两个核心包
import React from 'react';
import ReactDOM from 'react-dom/client';

//导入项目的根组件
import App from './App';
import UseState from './UseState'
import Style from "./Style";
import Comment from "./Comment";

//把App组件渲染到id为root的dom中。-> public/index.html 里id为root的dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Comment/>
        {/*<App/>*/}
        {/*<UseState/>*/}
        {/*<Style/>*/}
    </>
);

