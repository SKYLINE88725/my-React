//纯函数： 不改输入，输出可控，必输出
//reducer : 业务逻辑，拷贝并更新后的state+返回，负责获取state

const reducer = (state,action) => {

    // console.log('reducer',state,action);

    let {type,payload}=action;

    switch (type) {
        case 'ADD_ITEM':
            //业务逻辑
            // return 拷贝 并 更新后的state
            /*return Object.assign({},state,{
              list:state.list.concat(payload)
            });*/

            return {
                ...state,
                List:state.List.concat(payload)
            };
        case 'UPDATE_JINGXUAN':
            return {
                ...state,
                jingxuan:payload
            };
        case 'UPDATE_SHUJIA':
            return {
                ...state,
                shujia:payload
            };
        case 'UPDATE_SHUJIALIST':
            return {
                ...state,
                shujiaList:payload
            };
        case 'UPDATE_DETAIL':
            return {
                ...state,
                detail:payload
            };
        case 'VIEW_LOADING':
            return {
                ...state,
                loading:payload
            };
        case 'VIEW_HEADER':
            return {
                ...state,
                header:payload
            };
        case 'VIEW_FOOT':
            return {
                ...state,
                footer:payload
            };
        case 'CHECK_USER':
            return {
                ...state,
                user:payload
            };
        case 'CHECK_AUTH':
            return {
                ...state,
                auth:payload
            };
        default:
            return state
    }
};

export default  reducer;