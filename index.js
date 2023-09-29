const express=require('express')
const cors = require('cors')
const we=require('./Data/We.json')
const news=require('./Data/news.json')
const categories=require('./Data/categories.json')
const app=express()
const port= process.env.PORT || 5000


app.use(cors())

app.get('/',(req,res)=>{
    res.send(`Suvrodev ${port}`)
})

app.get('/we',(req,res)=>{
    console.log("We All:");
    res.send(we)
})
app.get('/we/:id',(req,res)=>{
    const id=req.params.id;
    console.log(id);

    const targetId=we.find(w=>w.id===id)||{}
    res.send(targetId)
})

app.get('/categories',(req,res)=>{
    console.log("All categories: ",categories);
    res.send(categories)
})
app.get('/categories/:id',(req,res)=>{
    const id=req.params.id
    console.log("Id: ",id);
    let newsUnderCategory
    if(id!=0){
        newsUnderCategory= news.filter(nws=>nws.category_id===id) 
    }else{
        newsUnderCategory=news
    }
    
    res.send(newsUnderCategory)
})

app.get('/news',(req,res)=>{
    console.log("All News: ");
    res.send(news)
})

app.get('/news/:id',(req,res)=>{
    const id=req.params.id
    console.log("Id: ",id);

    const targetNews=news.find(ns=>ns._id===id)
    console.log("Target News: ",targetNews);
    res.send(targetNews)

})


app.listen(port,()=>{
    console.log(`This app is running on port: ": ${port}`);
})