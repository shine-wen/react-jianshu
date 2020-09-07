import styled from 'styled-components'

export const LoginWrapper = styled.div`
z-index:0;
position:absolute;
left:0;
top:56px;
right:0;
bottom:0;
background:#eee;
`

export const LoginBox=styled.div`
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
`

export const Input=styled.input`
display:block;
width:200px;
height:30px;
line-height:30px;
padding:5px 10px;
margin:10px auto;
color:#777;
border-radius:4px;
outline:none;

`
export const Button=styled.button`
    margin: 20px auto 0;
    width: 200px;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    background: #3194d0;
    cursor: pointer;
    outline: none;
    display: block;
    clear: both;
`