// const express= require("express");       
// const app=express();
// const mongoose = require("mongoose");
// const bodyParser=require("body-parser");
// const cors=require("cors");
// require('dotenv/config');

// //middlewares
// app.use(cors());
// app.use(bodyParser.json());

// const postsRoute= require("./routes/route");

// app.use("/register",postsRoute);
// app.use("/",postsRoute);


// //Routes


// //connect to db
// mongoose.connect(process.env.DB_CONNECTION,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,   },()=> console.log("connected to db"));

// app.listen(3500,()=> console.log("App is listening on port 3500"));

const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const corsOptions = require('./config/corsOption');
const PORT= process.env.PORT || 3500;
app.use(cors(corsOptions));
app.use(express.json());
const path=require("path");



const link =
  "mongodb+srv://7twik:zKqW0UzgQO3G3iMy@cluster0.sjxr9uv.mongodb.net/mydb";
mongoose.connect(process.env.MONGODB_URI || link);

app.use("/", require("./routes/route"));
app.use("/register", require("./routes/route"));
app.use("/del", require("./routes/route"));
app.use("/note", require("./routes/route"));
app.use("/Auth", require("./routes/route"));
app.use("/poost", require("./routes/route"));

// app.use(route);
// __dirname=path.resolve();
// if (process.env.NODE_ENV==="production")
// {
//   app.use(express.static(path.join(__dirname,'/frontend/build')));

//   app.get('*',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'frontend',"build","index.html"));
//   })
// } else {
//   app.get("/",(req,res)=>{
//     res.send("API is running... ");
// });

// }


if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}


app.listen(PORT, function () {
  console.log("App is listening on port 3500");
});
