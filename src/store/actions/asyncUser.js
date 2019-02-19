//异步action //返回函数
import * as types from '../types';

const asyncUser=({url,userName,userPhone,userEmail,userType,password})=>(dispatch,getState)=>{
    console.log('asyncUser',userName, password);
    dispatch({type:types.VIEW_LOADING,payload:true});
    return userType==="Login" ? fetch(
        url,
        /*{
          method:'post',
          headers:{"Content-type":"application/x-www-form-urlencoded"},
          body:{
            username:username,
            password:password
          }
        }*/
    ).then(
        res=>res.json()
    ).then(
        data=>{
                for(let i=0;i<data.user.length;i++){
                    let bLogin = data.user[i].userName==userName ||  data.user[i].userPhone==userName ||  data.user[i].userID==userName || data.user[i].userEmail==userName && data.user[i].password==password
                    if(bLogin){

                        dispatch({type:types.VIEW_LOADING,payload:false});
                        dispatch({type:types.CHECK_USER,payload:{...data.user[i],passWord:null}});
                        dispatch({type:types.CHECK_AUTH,payload:data.auth});
                        return data.auth
                    }else{
                        dispatch({type:types.VIEW_LOADING,payload:false});
                    }
                }

        }
    ):userType==="Reg" ? fetch(
        url,
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            dispatch({type:types.CHECK_USER,payload:{userName,userPhone,userEmail,userID:"1"+Math.floor(Math.random()*100000),passWord:null}});
            dispatch({type:types.CHECK_AUTH,payload:data.auth});
            return data.auth
        }

    ):''
};


export default asyncUser;