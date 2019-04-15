var Zangoose=require ('mongoose');
var Schema=Zangoose.Schema;
var Auth_User=new Schema(
    {
        username:{type:String, required:true},
        password:{type:String,required:true},
        email:{type:String,required:true}
    });

module.exports=Zangoose.model('Auth_User',Auth_User);
