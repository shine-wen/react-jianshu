import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"

class Login extends Component {
    render() {
        const { loginStatus } = this.props
        if (loginStatus) {
            return (
                <div>
                    这是write 写文章页面
                </div>
            )
        } else {
            return <Redirect to='/login' />
        }
    }
}
const mapState = (state) => ({
    loginStatus: state.getIn(["login", "login"])
})



export default connect(mapState, null)(Login)