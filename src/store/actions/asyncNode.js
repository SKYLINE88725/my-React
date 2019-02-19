//异步action //返回函数
import * as types from '../types';

const asyncNode=({url,type})=>(dispatch,getState)=>{
    dispatch({type:types.VIEW_LOADING,payload:true});
    fetch(
        url,
        // {
        //     method:'get',
        //     headers:{"Content-type":"application/x-www-form-urlencoded"},
        //     mode:'cors',
        // //     credentials: 'include',
        // //
        // //     // body:{
        // //     //     username:"username",
        // //     //     password:"password"
        // //     // }
        // }
    ).then(
        res=>res.json()
    ).then(
        data=>{
                console.log(data);
            dispatch({type:type,payload:data});
                dispatch({type:types.VIEW_LOADING,payload:false});

        }
    )
};


export default asyncNode;