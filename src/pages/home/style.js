import styled from 'styled-components'

export const HomeWrapper = styled.div`
 width:960px;
 margin:0 auto;
 overflow:hidden;

`
export const HomeLeft = styled.div`
 width:625px;
 padding-top:30px;
 margin-left:15px;
 box-sizing:border-box;
 float:left;
  .banner-img{
      width:625px;
      height:auto;
 }
`
export const HomeRight = styled.div`
 width:280px;
 float:right;
`
//============================话题组件
export const TipicWrapper = styled.div`
overflow:hidden;
padding:20px 0 10px 0;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`
export const TipicItem = styled.div`
float:left;
height:32px;
line-height:32px;
background:#f7f7f7;
font-size:14px;
padding-right:10px;
color:#000;
border:1px solid #dcdcdc;
border-radius:4px;
margin-left:18px;
margin-bottom:8px;
.topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
}
`

// =====================列表

export const ListItem = styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
}
`

export const ListInfo = styled.div`
 width:500px;
 float:left;
 .title{
     font-size:18px;
     font-weight:700;
     color:#333;
     line-height:27px;
 }
 .desc{
     font-size:14px;
     color:#999;
     line-height:24px;
 }
`
export const LoadMore = styled.div`
width:100%;
height:40px;
line-height:40px;
background:#a5a5a5;
text-align:center;
border-radius:5px;
color:#fff;
margin:30px auto; 
cursor:pointer;
 `


// ===================右上角推荐
export const RecommendWrapper = styled.div`
  margin:30px 0;
  width:180px;
`
export const RecommendItem = styled.div`
  width:280px;
  height:50px;
  background:url(${(props) => props.imgUrl});
  background-size:contain;
  border-radius:4px;
`

// ===============wirter 
export const WriterWrapper = styled.div`
width:278px;
height:300px;
border-radius:4px;
border:1px solid #dcdcdc;

`
export const WriterItem = styled.div`
text-align:center;
width:100%;
line-height:300px;
`

// ========= 回到顶部
export const BackTop=styled.div`
position:fixed;
right:100px;
bottom:100px;
font-size:12px;
width:60px;
height:60px;
line-height:60px;
text-align:center;
border:1px solid #dcdcdc;
cursor:pointer
`

