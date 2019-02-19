//异步action //返回函数
import * as types from '../types';

const asyncList=({type,url,start,count,listType,bid,uid,ShuJiaArr})=>(dispatch,getState)=>{

    dispatch({type:types.VIEW_LOADING,payload:true});

    return fetch(
        url,
        /*{
          method:'post',
          headers:{"Content-type":"application/x-www-form-urlencoded"},
          body:{
            start:start,
            count:count
          }
        }*/
    ).then(
        res=>res.json()
    ).then(
        data=>{
            dispatch({type:types.VIEW_LOADING,payload:false});
            console.log(data,ShuJiaArr,listType,uid);
            switch (listType) {
                case "Jingxuan":
                    dispatch({type:type,payload:data.data});
                    break;
                case "Shujia":
                    return data.filter(item=>item.userID===uid)[0];
                case "Detail":
                    dispatch({ type:type, payload:data.data.filter(item=>item.bid==bid)[0]});
                    break;
                case "ShuJiaArr":
                    dispatch({ type:type, payload:data.data.filter(item=>ShuJiaArr['bookShelf'].some(val=>item.bid==val))});
                    break;
                default:
                    dispatch({type:types.VIEW_LOADING,payload:false});


            }

        }
    )
};


export default asyncList;