var express = require("express")
var app = express();
app.use(express.json());
app.get("/myname",(req,res)=>{
    res.json({"msg":"prasath"});
}); 

app.post("/myname",(req,res)=>{
    res.json({"msg":"node post"});
}); 


app.post("/login",(req,res)=>{
    let {email,password} = req['query'];
    
if(email == 'iamprasath15@gmail.com' && password =='admin'){
        res.json({"msg":"you are crct"})
}else{
    res.json({"msg":"you are wrong"})
}
});

app.post("/register",(req,res)=>{
    let {name,email,password,address} = req.body;

if(name == "muthu" && email == "muthu@gmail.com" && address == "ambatur" && password == "123456"){
    res.json({"msg":"you are correct"})
}else{
    res.json({"msg":"you are wrong"})
}
});

app.post("/add",(req,res)=>{
    let {num1,num2,sum} = req.body;
if(num1==null && num2 == null){
    res.json({"msg":"Enter the two number"})
}else{
    let sum = num1 + num2
    res.json({"msg":sum})
}

})
  
app.listen(8080,()=>{
    console.log("server started")
})
