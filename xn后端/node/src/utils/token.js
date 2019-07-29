
const jwt=require('jsonwebtoken');
//加密生成token
const {pKey}=require('../config.json')
exports.create=(data,expiresIn=60*60*2)=>{
    //签名：加密 data是加密的数据
 let token=jwt.sign({data},pKey,{

     // expiresIn：token有效期
     expiresIn
 });
 return token;

}
//解密/校验token
exports.verify=(token)=>{
 let res=false;
 try{
   jwt.verify(token,pKey); 
    res=true
 }catch(err){
     res=false;
 }
 return res;
}