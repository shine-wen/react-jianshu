// import {combineReducers} from 'redux';//没有redux-immutable 管理state时调用
import { combineReducers } from 'redux-immutable';

import { reducer as headerReducer } from '../common/header/store'
// 多个reducer 进行整合，整合出大的reducer,这样可以分块拆分
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store'
import { reducer as loginReducer } from '../pages/login/store'

const reducer = combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})
export default reducer

