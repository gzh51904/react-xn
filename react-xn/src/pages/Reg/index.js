import React, { Component } from 'react';

import './index.scss';
import { api } from '../../utils';
class Reg extends Component {
    constructor(props) {//构造函数
        super(props);
        this.state = {
            username:'',
            password:''
        }
        this.usernameChange=this.usernameChange.bind(this);
        this.passwordChange=this.passwordChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
        
    }
    usernameChange(e){
        this.setState({username:e.target.value});

        
    }
    
    
    passwordChange(e){
        this.setState({password:e.target.value})
    }
    onSubmit(){
        // window.alert(this.state.username)
        // window.alert(this.state.password)

    }
    async componentDidMount(){
            let {data} = await api.post('/login',{
                // params:{
                //     act:''
                // }
            })
            console.log(data);
            
    }   
    render() {

        return (
            <>
                <header className="title3">
                    <a href="##" className="pull1">
                        <span className="zjt1">
                        </span>
                    </a>
                    会员注册
            </header>
                <main className="main3">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">手机</label>
                            <input id="username"
                             className="form-control" 
                             type="text" 
                             onChange={this.usernameChange}
                             />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">密码</label>
                            <input id="password"
                             className="form-control" 
                             type="password" 
                             onChange={this.passwordChange}
                             />
                        </div>
                        <button 
                        className="btn btn-lg btn-primary btn-block" 
                        type="submit"
                        onClick={this.onSubmit}
                        >同意以下协议并注册</button>
                    </form>
                </main>
            </>
        )
    }
}
export default Reg;