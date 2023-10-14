const express=require("express");
const cors = require('cors');
const app =express();
app.use(cors());


const port=3000;


const users=[
    {
        id:1,
        name:"toli",
        email:"toli@gmail.com",

    },
    {
        id:2,
        name:"tufan",
        email:"tufan@gmail.com",

    },
    {
        id:3,
        name:"jannatun",
        email:"jannatun@gmail.com",

    },
]
app.get("/",(req,res)=>{
    res.send("this is home page")
});


app.get("/user",(req,res)=>{
   res.send(users)

})

app.listen(port,()=>{
    console.log(`server is runing http://localhost:${port}`);
})