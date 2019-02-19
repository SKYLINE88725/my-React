import React,{Component} from 'react';
import style from './Read.module.css';
import Iframe from '@trendmicro/react-iframe';
import {connect} from "react-redux";
import * as types from "../../store/types";

 class Read extends Component{
     componentDidMount(){
         this.props.show(true);

     }
    render(){
        let {match,show}=this.props;
        return(
            <div className={style["read"]}>

                <i className={"iconfont icon-2fanhui " + style.fanhui} onClick={() => this.props.history.go(-1)}/>
                <Iframe
                    className={style['read-iframe']}
                    src={`https://m.qidian.com/book/${match.params.id}/0`}

                    onLoad={({ event, iframe }) => {
                        if (!(iframe && iframe.contentDocument)) {
                            show(false);
                            return;
                        }

                        const target = iframe.contentDocument.body;
                        const nextHeight = target.offsetHeight;
                        console.log(nextHeight);
                        iframe.style.height = `${nextHeight}px`;

                        const observer = new ResizeObserver(entries => {
                            const target = iframe.contentDocument.body;
                            const nextHeight = target.offsetHeight;
                            iframe.style.height = `${nextHeight}px`;
                        });
                        observer.observe(target);
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state=>({

    loading:state.loading
});
const mapDispatchToProps=dispatch=>({
    show:(bl)=>{
        dispatch({type:types.VIEW_LOADING,payload:bl});
    },

});

export default connect(mapStateToProps,mapDispatchToProps)(Read)