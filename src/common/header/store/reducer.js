import * as constants from './constants'
import { fromJS} from 'immutable'

// immutable 库 用于管理 state数据，使用它可以防止reducer 更改原来的state
// 引入后又immutable 对象

const defaultState = fromJS({
    focused: false,
    list:[],
    mouseIn:false,
    page:1,
    totalpage:1
});

// 导出纯函数，接受两个默认参数
//一个state,一个action,最后返回新的state
export default (state = defaultState, action) => {
    // 这里要判断action的类型，然后正确的返回所要的数据
    switch (action.type) {
        case constants.SESRCH_FOCUS: {
            //immutable对象的set方法，会结合之前的immtable 对象的值
            //和设置的值，返回一个全新的对象
            return state.set('focused',true)
        }
        case constants.SESRCH_BLUR: {
            return state.set('focused', false)
        }
        case constants.CHANGE_LIST:{
            // 如果要set 多个值，可以使用merge 语法
            return state.merge({
                list: action.data,
                totalpage: action.totalpage
            })
          
        }
        case constants.MOUSE_ENTER: {
            return state.set('mouseIn',true)
        }
        case constants.MOUSE_LEAVE:{
            return state.set('mouseIn',false)
        }   
        case constants.CHANGE_PAGE:{
            return state.set('page', action.page)
        }   
        default: {
            return state
        }
    }
}
