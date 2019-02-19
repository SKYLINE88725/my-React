import React,{Component} from 'react';
import {connect} from 'react-redux';
import pubsub from 'pubsub-js';
import async2 from "../../store/actions";

import './ToDoList.css';
import {NavLink} from "react-router-dom";
import Loading from "../Loading/Loading";
 class ToDoList extends Component{

    render(){
        let {list,add,loading}=this.props;
        return(
            <>
                <h3>留言板</h3>
                <input type="button" value="提交" onClick={add}/>
                {loading && <Loading/>}
                <ul>
                    {
                        list.map((val,index)=>(
                            <li key={val.bid} className='book-li'>
                                <NavLink to={{pathname: `/detail/:${val.bid}`}} className='book-layout'>
                                    <img src={`//bookcover.yuewen.com/qdbimg/349573/${val.bid}/150`} className="book-cover" alt={val.bName} />
                                    <div className="book-cell">
                                        <h4 className="book-title">{val.bName}</h4>
                                        <p className="book-desc">{val.desc}</p>
                                        <div className="book-meta">
                                            <div className="book-meta-l">
                                                <span className="book-author" >{val.bAuth}</span>
                                            </div>
                                            <div className="book-meta-r">
                                                <span className="tag-small-group origin-right">
                                                    <em className="tag-small gray">{val.cat}</em>
                                                    <em className="tag-small red">{val.state}</em>
                                                    <em className="tag-small blue">{val.cnt}</em>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

const mapStateToProps = state=>({
    list:state.List,
    loading:state.loading
});
const mapDispatchToProps=dispatch=>({
    add:()=>dispatch(async2()).then(
        (id)=>console.log('回执后的业务',id)
    )
});

export default connect(mapStateToProps,mapDispatchToProps)(ToDoList)

