import React, { Component } from 'react';
import { GlobalStyled } from './style.js';
import { GlobalIconFont } from './statics/iconfont/iconfont.js';
import Header from './common/header';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import Detail from './pages/detail/loadable';
import Write from './pages/write'
import Login from './pages/login'

class App extends Component {
  render() {
    return (
      // Provider 在根组件上，提供store ，让其它子组件链接数据
      <Provider store={store}>
        {/* 全局样式 */}
        <GlobalStyled />
        <GlobalIconFont />
        {/* 路由匹配 */}
        <BrowserRouter>
          <Header />
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/Write' exact component={Write}></Route>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </BrowserRouter>
      </Provider>
    )
  }
}
export default App;

