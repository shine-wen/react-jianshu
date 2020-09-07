import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderBox = styled.div`
      position:relative;
      width:100%;
      height:56px;
      border-bottom:1px solid #f0f0f0;
      z-index:1;
`

export const HeaderWrapper = styled.div`
      position:relative;
      height:100%;
      min-width: 768px;
      max-width: 1440px;
      margin: 0 auto;
`
export const LoGo = styled.div`
position:absolute;
top:0;
left:0;
display:block;
width:100px;
height:56px;
background:url(${logoPic});
background-size:contain
`;

export const Nav = styled.div`
position: relative;
width:960px;
padding:right:70px;
box-sizing:border-box;
height:100%;
margin:0 auto;
`;

export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
fons-size:17px;
color:#333;
cursor:pointer;
&.left{
    float:left;
}
&.right{
    float:right;
    color:#969696;
}
&.active{
    color:#ea6f5a;
}
`;

export const NavSearchWrapper = styled.div`
position:relative;
 float:left;
 .zoom{
   position:absolute;
   right:5px;
   bottom:3px;
   width:30px;
   line-height:30px;
   border-radius:15px; 
   text-align:center;
   &.focused{
       background:#d6d6d6;
       color:#fff
   }
 }
`;
 
export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
width:160px;
height:38px;
padding:0 30px 0 20px;
box-sizing:border-box;
margin:9px 0 0 20px;
border:none;
outline:none;
border-radius:19px;
background:#eee;
font-size:14px;
color:#666;
&::placeholder{
    color:#999
}
&.focused{
    width:240px;
}
 &.slide-enter{
     transition:all .2s ease-out;
 }
 &.slide-enter-active{
     width:240px;
 }
  &.slide-exit{
     transition:all .2s ease-out;
 }
 &.slide-exit-active{
     width:160px;
 }
`;
export const SearchInfo=styled.div`
position:absolute;
left:0;
top:58px;
padding:0 20px 15px;
background:#ffffff;
width:240px;
box-shadow:0 0 9px rgba(0,0,0,.2);
border-radius: 4px;
`

export const SearchInfoTitle = styled.div`
margin:20px 0 15px 0;
line-height:20px;
font-size:14px;
color:#969696;
`


export const SearchInfoSwitch = styled.span`
float:right;
font-size:12px;
cursor:pointer;
.spin{
    display:block;
    float:left;
    font-size:12px;
    margin-right:2px;
    -webkit-transition: .5s ease;
    -o-transition: .5s ease;
    transition: .5s ease;
    transform-origin:center center;
}
`
export const SearchInfoList = styled.div`
 overflow:hidden;
`
export const SearchInfoItem = styled.a`
display:block;
float:left;
font-size:12px;
line-height:20px;
padding:2px 6px;
border:1px solid #ddd;
color:#787878;
border-radius:3px;
margin:0 10px 12px 0;
cursor:pointer;
`


export const Addition = styled.div`
position:absolute;
right:0;
top:0;
height:56px;
`;

export const Button = styled.div`
float:right;
margin:9px 20px;
padding:6px 12px;
min-width:80px;
text-align:center;
height:38px;
line-height:24px;
border-radius:19px;
box-sizing:border-box;
border:1px solid #ec6149;
font-size:14px;
&.red{
    color:#ec6149;
}
&.writting{
    color:#ffffff;
    background:#ed6149;
}
`;

