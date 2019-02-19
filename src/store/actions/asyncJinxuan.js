//异步action //返回函数
import * as types from '../types';
import mongoose from 'mongoose';

const asyncJinxuan=()=>(dispatch,getState)=>{

    dispatch({type:types.VIEW_LOADING,payload:true});
    mongoose
};


export default asyncJinxuan;