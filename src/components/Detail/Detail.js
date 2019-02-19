import React,{Component} from 'react';
import style from './Detail.module.css';
import asyncList from "../../store/actions/asyncList";
import * as types from "../../store/types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import Loading from "../../common/Loading/Loading";
import querystring from 'query-string';
import BHeader from "../../common/BHeader/BHeader";

 class Detail extends Component{
     constructor(props){
         super();
         this.state={
             bTitle:false
         };
         this.show=this.show.bind(this)
     }
     componentDidMount(){
         let bid=this.props.match.params.id;
         let dataName=querystring.parse(this.props.location.search).dataName;
         this.props.get(bid, dataName);

     }
     show(bl){
         console.log(bl,'子bl');
         this.setState({

             bTitle:bl
         })
     }
    render(){
        let {detail,loading,history}=this.props;
        return(
            <div className={style.Detail}>
                {loading && <Loading/>}
                <img src={`//bookcover.yuewen.com/qdbimg/349573/${detail.bid}/300`} className={style["book-cover-blur"]} alt={detail.bName} />
                <BHeader bName={detail.bName} history={history} bTitle={this.state.bTitle} show={this.show}/>

                <div className={style["detail-book-layout"]}>
                    <img src={`//bookcover.yuewen.com/qdbimg/349573/${detail.bid}/150`} className={style["book-cover"]} alt={detail.bName} />
                    <div className={style["book-cell"]}>
                        <h2 className={style["book-title"]}>{detail.bName}</h2>
                        <p to={{pathname:'/author/'+detail.cid}} className={style['book-auth']}>{detail.bAuth}</p>
                        <p className={style["book-meta"]}>{detail.cat}</p>
                        <p className={style["book-meta"]}>{detail.cnt} | {detail.state}</p>
                    </div>
                </div>
                <div className={style["detail-book-desc"]}>
                    {detail.desc}
                </div>
                <div className={style.start}>
                    <Link  className={style.link} to={{pathname:`/read/${detail.bid}`}}>体验试读</Link>
                    <Link className={style.link} to={{pathname:'/shujia'}}>加入书架</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state=>({
    detail:state.detail,
    loading:state.loading
});
const mapDispatchToProps=dispatch=>({
    get:(bid,dataName)=>dispatch(asyncList({
        bid,
        listType:'Detail',
        url:'/data/faxian.json',
        type:types.UPDATE_DETAIL,

    }))
});

export default connect(mapStateToProps,mapDispatchToProps)(Detail)