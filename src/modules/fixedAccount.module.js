const mongoose = require('mongoose');

const fixedAccountSchema = new mongoose.Schema({
    account_number :{type:Number , required: true ,unique: true},
    masterAccountId:{type:mongoose.Schema.Types.ObjectId, required: true},
    balance :{type: Number , required: true},
    interestRate:{type:Number , required: true},
    startDate:{type:Date, required: true},
    maturityDate:{type:Date, required: true}

},{versionKey:false,timestamps:true});

const FixedAccount = mongoose.model('fixedAccount',fixedAccountSchema);

module.exports = FixedAccount;

