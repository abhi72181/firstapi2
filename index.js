const app=express();

app.get("",function(req,res){
    res.send("hello")
})

app.get("/books",function(req,res){
    res.json([{Bookname:"Lord of the rings",id:"1"},
              {Bookname:"harry potter",id:"2"},
             {Bookname:"The Bible",id:"3"},
            {Bookname:"how to handle success",id:"4"}])
})

app.listen(2004,function(){
    console.log("listening port 2004")
})

