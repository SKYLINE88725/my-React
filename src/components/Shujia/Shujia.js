import React,{Component} from 'react';
import  './Shujia.css';
import connect from "react-redux/es/connect/connect";
import * as types from "../../store/types";
import asyncList from "../../store/actions/asyncList";
import  BSList from "../../common/BSList/BSList";
 class Shujia extends Component{
     constructor(props){
         super();
         props.get(props.user.userID)
     }
     // componentDidMount() {
     //     this.props.get()
     // }

     render(){
        let {user,shujiaList,exit}=this.props;
        return(
            <div className="shujia">
                {user.userName}|{user.userID}
                <em onClick={()=>{exit(this.props.history)}}>退出登录</em>
                <BSList  shujiaList={shujiaList} dataName='Shujia'/>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    user:state.user,
    shujiaList:state.shujiaList
});
const mapDispatchToProps=(dispatch,state)=>({
    exit:(history)=>{
        dispatch({type:types.CHECK_AUTH,payload:false});
        dispatch({type:types.CHECK_USER,payload:{}});
        history.push({pathname:'/jingxuan'})
    },
    get:(uid)=>dispatch(asyncList({
        url:'/data/shujia.json',
        listType:'Shujia',
        type:types.UPDATE_SHUJIA,
        uid
    })).then(
        (ShuJiaArr)=>dispatch(asyncList({
            url:'/data/faxian.json',
            listType:'ShuJiaArr',
            type:types.UPDATE_SHUJIALIST,
            ShuJiaArr
    })))

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Shujia);
