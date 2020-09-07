import React, { PureComponent } from 'react';
import { WriterWrapper,WriterItem } from '../style'

class Writer extends PureComponent{
    render(){
        return(
            <WriterWrapper>
                <WriterItem>
                    推荐作者模块
                </WriterItem>
            </WriterWrapper>
        )
    }
}
export default Writer