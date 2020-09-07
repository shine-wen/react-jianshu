import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { TipicWrapper, TipicItem} from '../style'
class Topic extends PureComponent{
    render(){
        return(
            <TipicWrapper>
                {
                    this.props.list.map((item)=>{
                              return(
                                  < TipicItem key={item.get('id')}>
                                      <img className="topic-pic"
                                          src={item.get('imgUrl')} alt="" />
                                          {item.get('title')}
                                  </TipicItem>
                              )
                    })
                }
            </TipicWrapper>
        )
    }
}
const mapState=(state)=>({
   list: state.get('home').get('topicList')
})

export default connect(mapState,null)(Topic)