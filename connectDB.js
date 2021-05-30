const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CDTT', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const account = new Schema({
  username: String,
  password: String
},{
    collection: 'Account'
});
const AccountModel = mongoose.model('account', account);
AccountModel.find({
    username: 'test'
})
.then((data)=>{
    console.log(data)
})
.catch((err)=>console.log(err))