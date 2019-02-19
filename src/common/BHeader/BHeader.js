import React from 'react';
import style from './BHeader.module.css';
import {Link} from "react-router-dom";

const BHeader = ({bName,history,bTitle,show}) => (
    <React.Fragment>
        <div className={bTitle?style.active+' '+style["detail-title"]:style["detail-title"]}>
            <div className={style["lbtn"]}>
                <i className={"iconfont icon-2fanhui " + style.sfont} onClick={() => history.go(-1)}/>
                <span className={style["detail-title-s"]}>{bName}</span>
            </div>
            <div className={style["rbtn"]}>
                <i className={"iconfont icon-sousuo " + style.sfont} />
                {!bTitle && <i className={"iconfont icon-webicon03 " + style.sfont} onClick={()=>{show(true)}}/>}
                {bTitle && <i className={"iconfont icon-quxiao " + style.sfont}  onClick={()=>{show(false)}}/>}
            </div>

            {
                bTitle &&
                    <div className={style["nav-show"]}>
                        <ul className={style["detail-nav"]}>
                            <li className={style["nav-li"]}><Link to={{pathname: '/shujia'}} className={style["nav-a"]}><i className={"iconfont icon-books "+style.bfont}><span>书架</span></i></Link></li>
                            <li className={style["nav-li"]}><Link to={{pathname: '/jingxuan'}} className={style["nav-a"]}><i className={"iconfont icon-jingxuan "+style.bfont}><span>精选</span></i></Link></li>
                            <li className={style["nav-li"]}><Link to={{pathname: '/duanpian'}} className={style["nav-a"]}><i className={"iconfont icon-wenzhang-copy " +style.bfont}><span>短篇</span></i></Link></li>
                            <li className={style["nav-li"]}><Link  to={{pathname: '/shuku'}} className={style["nav-a"]}><i className={"iconfont icon-fenlei " +style.bfont}><span>书库</span></i></Link></li>
                            <li className={style["nav-li"]}><Link to={{pathname: '/faxian'}} className={style["nav-a"]}><i className={"iconfont icon-faxian " +style.bfont}><span>发现</span></i></Link></li>
                        </ul>
                        <div className={style["my-book-shelf"]}>
                            <Link to={{pathname: '/shujia'}}>我的书架</Link>
                        </div>
                    </div>


            }


        </div>
        {bTitle &&<div className={style.mask}/>}
    </React.Fragment>
);

export default BHeader
