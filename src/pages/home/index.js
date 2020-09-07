import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Tipic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { actionCreators} from './store';
import { HomeWrapper, HomeLeft, HomeRight, BackTop} from './style.js';

//  PureComponent 与 immutable.js 相结合提高性能  PureComponent 底层已现实 shouldComponentUpdate
class Home extends PureComponent{
    handleScrollTop(){
      window.scrollTo(0,0);
    }
    render(){
        return(
            <div>
                <HomeWrapper>
                    <HomeLeft>
                        <img className="banner-img" src="//upload-images.jianshu.io/upload_images/17989922-b82ec5dd1b007b3a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/659/format/webp" alt=""/>
                         <Tipic/>
                         <List/>
                    </HomeLeft>
                    <HomeRight>
                         <Recommend />
                         <Writer />
                    </HomeRight>
                    {
                        this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null
                    }
                </HomeWrapper>
            </div>
        )
    }
    componentDidMount(){
        this.props.changeHomeData();
        // 监听滚动
        this.bindEvent();          
    }
    componentWillUnmount(){
        window.removeEventListener('scroll', this.props.changeScrollTopShow)

    }
    bindEvent() {
         window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}

const mapState=(state)=>({
    showScroll: state.getIn(['home','showScroll'])
})

const mapDispatch=(dispatch)=>({
    changeHomeData() {
        const action=actionCreators.getHomeInfo();
        dispatch(action)
    },
    changeScrollTopShow(e){
        // console.log(document.documentElement.scrollTop)
        if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
})

export default connect(mapState,mapDispatch)(Home)