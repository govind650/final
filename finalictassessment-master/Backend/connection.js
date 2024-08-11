const mongoose = require("mongoose");
//Write missing code 
mongoose.connect('mongodb+srv://rgovindraj77:govind123@govind650.0mtvi9q.mongodb.net/empdb?retryWrites=true&w=majority&appName=govind650').then((res)=>{
  console.log('DB is connected')
}).catch((res)=>{
  console.log('DB not connected')
})
