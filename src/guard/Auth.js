import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import connect from "react-redux/es/connect/connect";

//同步条件

const Auth = ({ component: Component,auth, ...rest }) => (
    <Route {...rest} render={props =>
        auth ?
            <Component {...props} />
            : <Redirect to="/login" />
    }
    />
);


const initMapStateToProps=state=>({
    auth:state.auth
});
const initMapDispatchToProps=dispatch=>({

});


export default connect(
    initMapStateToProps,
    initMapDispatchToProps
)(Auth);