import React from 'react';

import style from './Warning.module.css';

const Warning = ({warn,exit,dataName})=>(
    <div className={style.Warning} onClick={()=>{exit()}} key={dataName}>
        <div className={style["warning-center"]}>
                {warn}
        </div>
    </div>
)
export default Warning
