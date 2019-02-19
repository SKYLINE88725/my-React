import React,{Component} from 'react'

import Header from "../common/Header/Header";
import Footer from "../common/Footer/Footer";
import Error from "../common/Error/Error";

import Shujia from "./Shujia/Shujia";
import Jingxuan from "./Jingxuan/Jingxuan";
import Duanpian from "./Duanpian/Duanpian";
import Shuku from "./Shuku/Shuku";
import Faxian from "./Faxian/Faxian";

import Login from './Login/Login';
import Reg from './Reg/Reg';
import Auth from "../guard/Auth";

import Detail from "./Detail/Detail";

import {connect} from "react-redux";
import * as types from "./../store/types";

import {Route,Redirect,Switch} from 'react-router-dom';
// import Auth from "../guard/Auth";
import Loading from "../common/Loading/Loading";

import pubsub from 'pubsub-js';
import Read from "./Read/Read";

class App extends Component{
    componentWillReceiveProps(nextProps){

        console.log(nextProps.location.pathname);

        //监听路由
        let path = nextProps.location.pathname;
        let {view} = this.props;
        if (/shujia|jingxuan|duanpian|shuku|faxian/.test(path)){
            view({type:types.VIEW_FOOT,bl:true});
            view({type:types.VIEW_HEADER,bl:true});
        }
        if (/user/.test(path)){
            view({type:types.VIEW_FOOT,bl:false});
            view({type:types.VIEW_HEADER,bl:true});
        }
        if (/reg|login|detail|read/.test(path)){
            view({type:types.VIEW_FOOT,bl:false});
            view({type:types.VIEW_HEADER,bl:false});
        }

    }
    render(){
        return (
            <>
                {/*rc_root不是响应式数据*/}

                {this.props.bLoading && <Loading/>}
                {this.props.bHeader && <Header user={this.props.user}/>}

                <Switch>

                    <Route path="/jingxuan" component={Jingxuan} />
                    <Route path="/duanpian" component={Duanpian} />
                    <Route path="/shuku" component={Shuku} />
                    <Auth path="/shujia" component={Shujia} />

                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />

                    <Route path="/faxian" component={Faxian} />
                    <Route path="/detail/:id" component={Detail} />
                    <Route path="/read/:id" component={Read} />
                    <Redirect exact from="/" to="/jingxuan" />
                    <Route component={Error} />
                </Switch>


                {this.props.bFooter && <Footer view={(opt)=>{this.props.view(opt)}}/>}

            </>
        )
    }
}
const mapStateToProps = state=>({
    bFooter:state.footer,
    bHeader:state.header,
    bLoading:state.loading,
    user:state.user
});
const mapDispatchToProps=dispatch=>({
    view:({type,bl})=>{
        dispatch({type:type,payload:bl});
    },

});

export default connect(mapStateToProps,mapDispatchToProps)(App)