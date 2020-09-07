import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderBox, HeaderWrapper, LoGo, Nav, NavItem, NavSearchWrapper,
  NavSearch, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem, Addition, Button
} from './style.js';
import { actionCreators } from './store'
import { actionCreators as loginActionCreators } from '../../pages/login/store'


class Header extends Component {
  getListArea = () => {
    const { focused, list, page, totalpage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();//将 immutable 数据类型 换回js类型
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * 8; i < page * 8; i++) {
        if (newList[i]) {
          pageList.push(
            <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
          )
        }
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
                  热门搜索
                   <SearchInfoSwitch onClick={() => handleChangePage(page, totalpage, this.spinIcon)}>
              <i ref={(icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe606; </i>
                   换一批 </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList
            }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
  render() {
    const { focused, handleInputFocus, handleInputBlur, list, login,logout} = this.props
    return (
      <HeaderBox className="headerBox">
        <HeaderWrapper>
          <Link to='/'>
            <LoGo />
          </Link>
        
          <Nav>
            <NavItem className="left active">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
           
             {
              login?
                <NavItem onClick={logout} className="right">退出</NavItem>:
               <Link to="/login"> <NavItem className="right">登录</NavItem></Link>
             }
            <NavItem className="right"><i className="iconfont">&#xe636;</i></NavItem>
            <NavSearchWrapper>
              <CSSTransition
                in={focused}
                timeout={200}
                classNames="slide">
                <NavSearch className={focused ? "focused" : ""}
                  onFocus={() => handleInputFocus(list)}
                  onBlur={handleInputBlur}>
                  {/* 为什么要将方法放到props上呢？ 
                     因为下面有个映射关系叫着 mapDispathToProps
                     当你聚焦输入框的时候， 你就要改变store上的数据，那么你就要 调用dispatch方法
                     那么只有你把方法写到mapDispathToProps里面，才能调用dispatch 方法
                  
                  */}
                </NavSearch>
              </CSSTransition >
              <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe60b;</i>
              {this.getListArea()}
            </NavSearchWrapper>
          </Nav>
          <Addition>
            <Link to="/write">
              <Button className="writting"><i className="iconfont">&#xe678;</i>  写文章</Button>
            </Link>
            <Button className="reg">注册</Button>
          </Addition>
        </HeaderWrapper>
      </HeaderBox>
    )
  }
}


//组件和sotre 链接的时候，store 的数据如何映射到Props上？
//这时会接受stote 的数据 state
const mapStateToProps = (state) => {
  // 这里拿 reducer.js 中 定义的defaultState里面的数据
  // 就是拿 defaultState.focused 传到组件的props上面 
  //然后页面上就是用 this.props.focused
  return {
    // 通过redux-immutable 来实现state数据变成 immutable对象化取值
    focused: state.getIn(['header', 'focused']),
    // focused: state.get('header').get('focused'),
    list: state.getIn(['header', 'list']),
    page: state.getIn(["header", 'page']),
    totalpage: state.getIn(["header", 'totalpage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login:state.getIn(["login","login"])
  }
}
// 组件链接store ,要改动store的数据，要调用 dispatch 方法
const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      //  0 先判断是否有数据，没数据再发送 action
      (list.size === 0) && dispatch(actionCreators.getList());
      //1 首先定义一个action
      const action = actionCreators.searchFocus();
      //2 dispatch action 派发给store,
      //store接受action并结合之前的数据，把action和数据一起给到reducer
      dispatch(action);
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalpage, spin) {
      // 利用 ref 传来dom 节点，实现换一换那个旋转动画
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = "rotate(" + (originAngle + 360) + "deg)"
      if (page < totalpage) {
        dispatch(actionCreators.changePageList(page + 1));
      } else {
        dispatch(actionCreators.changePageList(1));
      }
    },
    logout(){
      dispatch(loginActionCreators.logout())
    }
  }
}
// connect  接受两个默认的参数 
export default connect(mapStateToProps, mapDispathToProps)(Header);
