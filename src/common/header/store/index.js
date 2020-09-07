import reducer from './reducer'
import * as actionCreators from './actionCreators';
import * as constants from './constants';
export { reducer, actionCreators, constants}


// 1：这个文件主要 是引入reducer.js 并导出reducer
// 可以减少 大reducer.js引入的文件目录路径（全部整合reducer的文件）

//2：同理 其它文件一样

//3： 将多个文件一起引入并导出，方便其它页面引入 
//如 header/index.js 里面引入 actionCreators ，只需要写路径./store 即可