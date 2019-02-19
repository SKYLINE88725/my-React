import mongodb from 'mongodb';
import * as types from "../store/types";
export default (opts,dispatch)=>{

    opts = opts||{};
    opts.url=opts.url||'mongodb://localhost:27017';


    const MongoClient = mongodb.MongoClient;//创建连接实例

    MongoClient.connect(opts.url, function(err, client) {

        let db = client.db(opts.dbName);//use 库 使用库

        let collection = db.collection(opts.collection); //连接集合

        collection.find().toArray((err,res)=>{
                dispatch({type:types.VIEW_LOADING,payload:false});
                dispatch({type:types.UPDATE_JINGXUAN,payload:res.data});
                console.log(res)
            })

    })
}