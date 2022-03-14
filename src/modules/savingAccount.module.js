const mongoose = require('mongoose');

const savingAccountSchema = new mongoose.Schema({
    account_number :{type: String, required: true},
    balance :{type:Number ,required: true},
    interestRate:{type:Number, required: true};

},{versionKey:false,timestamps:true});

const SavingAccount = mongoose.model('savingAccount',savingAccountSchema);

module.exports = SavingAccount;



SavingsAccount

account_number ( required and should be unique)
balance ( required )
interestRate ( required )
createdAt (required)
updatedAt (required)
