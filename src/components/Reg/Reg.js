import React,{Component} from 'react'
import style from './Reg.module.css'
import {Link} from 'react-router-dom'
import connect from "react-redux/es/connect/connect";
import asyncUser from "../../store/actions/asyncUser";
import Warning from "../../common/Warning/Warning";


class Reg extends Component{

    show(bl){
        this.setState({
            viewPass:bl
        })
    }
    render(){
        return (
            <div className={style.Reg}>
                <div className={style["reg-head"]}>
                    <p className={["head-lbtn"]}><a href={"javascript:window.history.go(-1);"} className={'iconfont icon-2fanhui '+style.ifont}></a></p>
                    <p className={style.welcome}>
                        笔趣阁注册<br/>
                        Welcome to Biquge Reg
                    </p>
                </div>
                <div className={style["reg-wrap"]}>
                    <p className={style["reg-logo"]}>起</p>
                    <div className={style["reg-form"]}>
                        <ul className={style["form-list"]}>
                            <li className={style["reg-input"]}>
                                <em className={"iconfont icon-yonghu " + style["input-font"]}/>
                                <input type="text" name="userName" className={style["input-item"]} placeholder="请输入注册账号"  value={this.state.userName} onChange={this.changeIpt.bind(this)} />
                            </li>
                            <li className={style["reg-input"]}>
                                <em className={"iconfont icon-yonghu " + style["input-font"]}/>
                                <input type="text" name="userPhone" className={style["input-item"]} placeholder="请输入注册手机"  value={this.state.userPhone} onChange={this.changeIpt.bind(this)} />
                            </li>
                            <li className={style["reg-input"]}>
                                <em className={"iconfont icon-yonghu " + style["input-font"]}/>
                                <input type="text" name="userEmail" className={style["input-item"]} placeholder="请输入注册邮箱"  value={this.state.userEmail} onChange={this.changeIpt.bind(this)} />
                            </li>
                            <li className={style["reg-input"]}>
                                <em className={"iconfont icon-mima " + style["input-font"]}/>
                                <input type={this.state.viewPass?"text":"password"} name="password" className={style["input-item"]} placeholder="请输入注册密码"  value={this.state.password} onChange={(ev)=>{this.changeIpt(ev)}} />
                                <em
                                    className={this.state.viewPass?"iconfont icon-xianshimima "+ style["eye-icon"]:"iconfont icon-yincangmima "+ style["eye-icon"]}
                                    onClick={()=>{this.state.viewPass?this.show(false):this.show(true)}}
                                />
                            </li>
                            <li className={style["reg-input"]}>
                                <em className={"iconfont icon-mima " + style["input-font"]}/>
                                <input type={this.state.viewPass?"text":"password"} name="rePass" className={style["input-item"]} placeholder="请输入重复密码"  value={this.state.rePass}   onChange={(ev)=>{this.changeIpt(ev)}}  onBlur={()=>{this.rePass()}} />
                                <em
                                    className={this.state.viewPass?"iconfont icon-xianshimima "+ style["eye-icon"]:"iconfont icon-yincangmima "+ style["eye-icon"]}
                                    onClick={()=>{this.state.viewPass?this.show(false):this.show(true)}}
                                />
                            </li>
                        </ul>
                        <div className={style["reg-user"]}>
                            <a href={"javascript:;"}>忘记密码？</a>
                            <Link to={{pathname:'/login'}}>用户登录</Link>
                        </div>

                        <p className={style["reg-start"]}>
                            <i className={style["reg-start-button"]} onClick={
                                this.props.reg.bind(null, this.state.userName, this.state.userPhone,this.state.userEmail,this.state.password, this.props.history)
                            }>注册</i>
                        </p>
                    </div>
                </div>
                { !this.state.passBl && <Warning warn={this.state.warn} exit={()=>{this.rePass(true)}} dataName="Reg"/>}
            </div>
        )
    }
    state={
        viewPass:false,
        userName:'',
        userPhone:"",
        userEmail:"",
        password:'',
        rePass:"",
        passBl:true,
        warn:''
    };
    changeIpt(ev){
        this.setState({
            [ev.target.name]:ev.target.value
        })
    }
    rePass(exit){
        this.state.password===this.state.rePass || exit?this.setState({passBl:true,warn:""}):this.setState({passBl:false,warn:"重复密码输入不一致"})
    }

    /*reg(){

      console.log('reg',this.state.username,this.state.password);

      fetch(
        // `http://localhost:3000/reg?username=${this.state.username}&password=${this.state.password}`
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
    reg:(userName,userPhone,userEmail,password,history)=>dispatch(asyncUser({
        url:'/data/user.json',
        userType:"Reg",
        userName,userPhone,userEmail,password,
    })).then(
        (auth)=>auth ?
            history.push({pathname:'/shujia'}) :
            history.push({pathname:'/reg'})
    )
});


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Reg);