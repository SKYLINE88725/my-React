import React,{Component} from 'react';
import  './Jingxuan.css';
import ReactSwipe from 'react-swipe';

import {connect} from 'react-redux';
import * as types from '../../store/types';

import List from '../../common/List/List';
import asyncList from "../../store/actions/asyncList";
import asyncNode from "../../store/actions/asyncNode";

 class Jingxuan extends Component{
     constructor(props){
         super();
         props.get();
         props.nodeGet(4,6)
     }
    render(){
        let {jingxuan,loading}=this.props;
        return(
            <div className="Jingxuan">
                <ReactSwipe
                    className="carousel"
                    swipeOptions={{
                        continuous: true,
                        auto: 2000,
                    }}
                >
                    <div className='slide-item' style={{'lineHeight':'72px','height':'30vw'}}><img src="./images/nv01.jpg" alt=""/></div>
                    <div className='slide-item' style={{'lineHeight':'72px','height':'30vw'}}><img src="./images/nv02.jpg" alt=""/></div>
                    <div className='slide-item' style={{'lineHeight':'72px','height':'30vw'}}><img src="./images/nv03.jpg" alt=""/></div>
                    <div className='slide-item' style={{'lineHeight':'72px','height':'30vw'}}><img src="./images/nv04.jpg"  alt=""/></div>
                </ReactSwipe>
                <List list={jingxuan} loading={loading} dataName='jinxuan'></List>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    jingxuan:state.jingxuan,
    loading:state.loading
});
const mapDispatchToProps=dispatch=>({
    get:()=>dispatch(asyncList({
        url:'/data/faxian.json',
        type:types.UPDATE_JINGXUAN,
        listType:"Jingxuan"
    })),
    nodeGet:(start,count)=>dispatch(asyncNode({
        url:`http://localhost:3000/news?start=${start}&count=${count}`,
        type:types.UPDATE_JINGXUAN,

    }))

});

export default connect(mapStateToProps,mapDispatchToProps)(Jingxuan)
