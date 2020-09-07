import axios from 'axios'
import * as constants from './constants'

// 返回一个对象action
const changeDetail=(title,content)=>({
    type: constants.CHANGE_DETAIL,
    title,
    content
})

// 返回一个 异步函数
export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {
            const result = res.data.data;
            // dispatch派发action ，项目中 所有reducer.js 都可以接受
            //  现在在 detail文件夹下的store/reducer.js 接受处理
            dispatch(changeDetail(result.title, result.content))
        }).catch((err)=>{
                console.log("请刷新重试！")
        })
    }
}
