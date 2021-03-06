import React from 'react';
import style from './List.module.css';
import {Link} from 'react-router-dom';

import Loading from "../Loading/Loading";

const List = ({list,loading,dataName}) => (
    <div className={style["newlist"]}>
        {loading && <Loading/>}
        <ul>
            {
                list.map(item=>(
                    <li key={item.bid} className={style["book-li"]}>
                        <Link to={{pathname: `/detail/${item.bid}`,serch:'?dataName='+dataName}} className={style["book-layout"]}>
                            <img src={`//bookcover.yuewen.com/qdbimg/349573/${item.bid}/150`} className={style["book-cover"]} alt={item.bName} />
                            <div className={style["book-cell"]}>
                                <h4 className={style["book-title"]}>{item.bName}</h4>
                                <p className={style["book-desc"]}>{item.desc}</p>
                                <div className={style["book-meta"]}>
                                    <div className={style["book-meta-l"]}>
                                        <span className={style["book-author"]} >{item.bAuth}</span>
                                    </div>
                                    <div className={style["book-meta-r"]}>
                                                <span className={style["tag-small-group"]} >
                                                    <em className={style["tag-small"]+' '+style.gray}>{item.cat}</em>
                                                    <em className={style["tag-small"]+' '+style.red}>{item.state}</em>
                                                    <em className={style["tag-small"]+' '+style.blue}>{item.cnt}</em>
                                                </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))
            }
        </ul>
    </div>

);

export default List
