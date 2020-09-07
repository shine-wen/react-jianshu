import React from 'react'
import Loadable from 'react-loadable';
// import Loading from './my-loading-component';

// 处理异步组件加载 和 withRouter 的使用 
const LoadableComponent = Loadable({
    loader: () => import('./'),//加载需要加载的组件 这里是路径(当前路径的index.js 文件)
    // loading: Loading, //这个是上面引进的loading 效果组件
    // 加载组件需要时间，这里使用  jsx 语法，直接返回一个loading 函数，作提示
    loading(){
        return <div>正在加载...</div>
    }
});
export default () => <LoadableComponent />;



