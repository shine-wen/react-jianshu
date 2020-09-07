import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    totalpage: Math.ceil(data.length / 8)
})

// 创建action
export const searchFocus = () => ({
    type: constants.SESRCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SESRCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});
export const changePageList = (page) => ({
    type: constants.CHANGE_PAGE,
    page
})

//返回一个函数，需要使用redux-thunk中间件
export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(changeList(data.data))
        }).catch((err) => {
            console.log(err)
        })

    }
};
