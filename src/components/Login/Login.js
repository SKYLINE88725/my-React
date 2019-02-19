import React,{Component} from 'react'
import style from './Login.module.css'
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import asyncUser from "../../store/actions/asyncUser";


class Login extends Component{

    render(){
        return (
            <div className={style.Login}>
                <div className={style["login-head"]}>
                    <p className={["head-lbtn"]}><a href="javascript:window.history.go(-1);" className={'iconfont icon-2fanhui '+style.ifont}></a></p>
                    <p className={style.welcome}>
                        笔趣阁登录<br/>
                        Welcome to Biquge Login
                    </p>
                </div>
                <div className={style["login-wrap"]}>
                    <p className={style["login-logo"]}>起</p>
                    <div className={style["login-form"]}>
                        <ul className={style["form-list"]}>
                            <li className={style["login-input"]}>
                                <em className={"iconfont icon-yonghu " + style["input-font"]}/>
                                <input type="text" name="userName" className={style["input-item"]} placeholder="请输入邮箱/个性账号" value={this.state.userName} onChange={this.changeIpt.bind(this)} />
                            </li>
                            <li className={style["login-input"]}>
                                <em className={"iconfont icon-mima " + style["input-font"]}/>
                                <input type={this.state.viewPass?"text":"password"} name="password" className={style["input-item"]} placeholder="请输入密码"  value={this.state.password} onChange={(ev)=>this.changeIpt(ev)}/>
                                <em
                                    className={this.state.viewPass?"iconfont icon-xianshimima "+ style["eye-icon"]:"iconfont icon-yincangmima "+ style["eye-icon"]}
                                    onClick={()=>{this.state.viewPass?this.show(false):this.show(true)}}
                                />
                            </li>
                        </ul>
                        <div className={style["login-user"]}>
                            <a href={"javascript:;"}>忘记密码？</a>
                            <Link to={{pathname:'/reg'}}>用户注册</Link>
                        </div>

                        <p className={style["login-start"]}>
                            <i  className={style["login-start-button"]} onClick={
                                this.props.login.bind(null,this.state.userName,this.state.password,this.props.history)
                            }>登录</i>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    state={
        viewPass:false,
        userName:'',
        password:'',
    };
    show(bl){
        this.setState({
            viewPass:bl
        })
    }
    changeIpt(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    /*login(){

      console.log('login',this.state.username,this.state.password);

      fetch(
        // `http://localhost:3000/login?username=${this.state.username}&password=${this.state.password}`
        `/data/user.json`
      ).then(
        res=>res.json()
      ).then(
        data=>{
          if (data.auth){
            this.props.history.push({pathname:'/user',search:'data数据'})
          } else {
            this.props.history.push({pathname:'/error'})
          }
        }
      )

    }*/
}
const initMapStateToProps=state=>({
    // username:state.user.data.username
});
const initMapDispatchToProps=dispatch=>({
    login:(userName,password,history)=>dispatch(asyncUser({
        url:'/data/user.json',
        userType:'Login',
        userName,password
    })).then(
        (auth)=>auth ?
            history.push({pathname:'/shujia'}) :
            history.push({pathname:'/login'})
    )
});


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Login);