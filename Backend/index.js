const express=require("express");
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app =express();
app.use(cors());


const port=3000;

app.use(express.json())

// const users=[
//     {
       
//         name:"toli",
//         email:"toli@gmail.com",

//     },
//     {
      
//         name:"tufan",
//         email:"tufan@gmail.com",

//     },
//     {
      
//         name:"jannatun",
//         email:"jannatun@gmail.com",

//     },
// ]
app.get("/",(req,res)=>{
    res.send("this is home page")
});



const uri = "mongodb+srv://alitufan702:sWoTBjNMLoWfuxT9@cluster0.kvtrj3x.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


async function run() {
  try {

    const database=client.db("simple-node");
    const userCollection=database.collection("users");

    app.get("/user",async(req,res)=>{
        const allUser=userCollection.find({});
        const SUser=await allUser.toArray();
        res.send(SUser)
     
     })

    app.post("/user", async(req,res)=>{
        const user=req.body;
        // users.push(user)
        // console.log(users);
        const result=await userCollection.insertOne(user)
        res.send(result)
    
    })
  
  } finally {
   
  }
}
run().catch(console.dir);



// app.post("/user",(req,res)=>{
//     const user=req.body;
//     users.push(user)

//    res.send(users)
//    console.log(users);

// })
app.listen(port,()=>{
    console.log(`server is runing http://localhost:${port}`);
})