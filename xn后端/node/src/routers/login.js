const express = require('express');

const Router = express.Router();

const {mongo:{find}} = require('../db');
const {formatData,token}=require('../utils')

Router.get('/',async (req,res)=>{
    let {username,password} = req.query;console.log(username,password)

    let result = await find('user',{username,password});console.log(result)

    if(result.length>0){
        //生成token并返回客户端
        let Athorization=token.create(username);
        // res.send('Athorization',Athorization);
        res.send(formatData({data:Athorization}))
    }else{
        res.send(formatData({code:250}))
    }

    // res.send(result)
})


module.exports = Router;