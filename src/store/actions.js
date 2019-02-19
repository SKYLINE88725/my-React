//异步action

//1.给外面的dispatch返回对象
//2. 公共的异步处理业务
//3. 提交请求到的数据给reducer,同时也可给调用方一个回执

//返回对象
const async1=(dispatch)=>{

  //公共的异步处理业务
  fetch(
    `/data/index.data`
  ).then(
    res=>res.json()
  ).then(
    data=>{
      setTimeout(()=>{
        //提交请求到的数据给reducer,同时也可给调用方一个回执
        dispatch({type:'VIEW_LOADING',payload:false});
        dispatch({type:'ADD_ITEM',payload:data[0].title})
      },1000);
    }
  );


  //给外面的dispatch返回对象
  return {type:'VIEW_LOADING',payload:true};
};


//返回函数
const async2=()=>(dispatch,getState)=>{
  // getState==redux 的 getState方法  {a,b,list,...}
  dispatch({type:'VIEW_LOADING',payload:true});

  return fetch(
    `/data/faxian.json`
  ).then(
    res=>res.json()
  ).then(
    data=>{
      dispatch({type:'VIEW_LOADING',payload:false});
      dispatch({type:'ADD_ITEM',payload:data.data});
      return data.data[0];//模拟一个回执
    }
  )

};

export default async2;