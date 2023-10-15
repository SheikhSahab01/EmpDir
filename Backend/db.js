const mongoose = require('mongoose');
const mongoURI = 'mongodb://EmpDir:asifarjitproject@ac-il1g0ah-shard-00-00.9gmox9a.mongodb.net:27017,ac-il1g0ah-shard-00-01.9gmox9a.mongodb.net:27017,ac-il1g0ah-shard-00-02.9gmox9a.mongodb.net:27017/Emp_Database?ssl=true&replicaSet=atlas-133ge7-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.set("strictQuery", false);


const mongoDB=async()=>{
    await mongoose.connect(mongoURI,{useNewUrlParser: true},async(err,result)=>{
        if(err) console.log("...",err);
        else
        {
        console.log("db connected");
        const fetched_data = await mongoose.connection.db.collection('employees');
        fetched_data.find({}).toArray(async function(err,data){
            if(err) console.log(err)
            else {
              global.employees = data;
            }
        })
        }
    });
}

module.exports = mongoDB;