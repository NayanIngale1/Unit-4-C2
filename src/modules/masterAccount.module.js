const mongoose = require('mongoose');

const masterAccountSchema = new  mongoose.Schema({
    balance:{type: Number, required: true},
    userId:{type:mongoose.Schema.Types.ObjectId,required: true,unique: true},
    managerId:{type: mongoose.Schema.Types.ObjectId, required: true},
    nomi
    
},{versionKey:false,timestamps:true});


const MasterAccount = mongoose.model('masterAccount',masterAccountSchema);



module.exports = MasterAccount;




