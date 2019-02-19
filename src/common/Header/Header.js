import React from 'react';
import  './Header.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => (
    <div className='head-btn'>
        <ul>
            <li className='home'><NavLink to={{pathname: '/home'}} >主页</NavLink></li>
            <li className='write'><NavLink to={{pathname: '/buycar'}}>关注</NavLink></li>
            <li className='my'><NavLink to={{pathname: '/user'}}>用户</NavLink></li>
        </ul>
    </div>
);

export default Header
