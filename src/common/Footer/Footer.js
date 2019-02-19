import React from 'react';
import  './Footer.css';
import {NavLink} from 'react-router-dom';
const Footer = ({view}) => (
    <div className='foot-btn'>
            <ul>
            <li><NavLink to={{pathname: '/shujia'}} ><i className="iconfont icon-books"><span>书架</span></i></NavLink></li>
            <li><NavLink to={{pathname: '/jingxuan'}}><i className="iconfont icon-jingxuan"><span>精选</span></i></NavLink></li>
            <li><NavLink to={{pathname: '/duanpian'}}><i className="iconfont icon-wenzhang-copy"><span>短篇</span></i></NavLink></li>
            <li><NavLink  to={{pathname: '/shuku'}}><i className="iconfont icon-fenlei"><span>书库</span></i></NavLink></li>
            <li><NavLink to={{pathname: '/faxian'}}><i className="iconfont icon-faxian"><span>发现</span></i></NavLink></li>
        </ul>
    </div>

);

export default Footer
