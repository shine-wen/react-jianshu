import { createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));
export default store;
// 第一步，这里创建store 并导出
//2：创建reducer.js  
//3：在根组件上app.js，引入store 并且利用Provider 将store绑定到根组件上
//4：在子组件上，利用 connect 方法，链接根组件上提供的store 数据
