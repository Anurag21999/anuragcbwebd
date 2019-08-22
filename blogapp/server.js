const express=require('express')
const app=express()
const { getallblogs,addblogs,delblogs}=require('./database')
app.use(express.urlencoded({extended: true}))


app.set('view engine','hbs')

app.get('/',(req,res)=>{
    getallblogs().then(blogs=>{
        const blogId=req.query.blog
        const selectedBlog=blogs.find(b=> b._id==blogId)
        console.log(selectedBlog)
        res.render('index',{blogs,selectedBlog})
    })
   
})
app.get('/add',(req,res)=>{
    
    res.render('add')
           
})


app.post('/',(req,res)=>{
    addblogs({
        title:req.body.title,
        body:req.body.body
    }).then(result=>{
        res.redirect('/?blog='+result.ops[0]._id)

    })

    
})
app.get('/upd',(req,res)=>{
  res.render('update')
})


app.post('/upd',(req,res)=>{
    getallblogs().then(blogs=>{
        const blogId=req.body.title
        const selectedBlog=blogs.find(b=> b._id==blogId)
        console.log(selectedBlog)
    res.render('update',{blogs,selectedBlog})
})
})



app.listen(3331,()=>{
console.log("started server")
})