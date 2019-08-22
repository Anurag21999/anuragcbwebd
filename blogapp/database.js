const { MongoClient } = require('mongodb')

const url = 'mongodb://localhost:27017';

const connectdb = (dbName) => {
    return MongoClient.connect(url).then(client => client.db(dbName))
  }
  
 

  // function getallblogs(){
  //     return connectdb('testdb').then(db=>{
  //         return db.collection('blogs').find()
  //     }).then(blogscursor=>blogscursor.toarrray())
  // }


const getallblogs=()=>
connectdb('test1db')
.then(db=>db.collection('blogs').find())
.then(b => b.toArray() )


const addblogs = blog =>
    connectdb('test1db')
    .then(db => db.collection('blogs'))
    .then(collection => collection.insertOne(blog))
    
const delblogs = blog =>
    connectdb('test1db')
    .then(db => db.collection('blogs'))
    .then(collection =>db.collection.deleteOne(blog))
    .then(a=>a.toArray())


module.exports={
   getallblogs,
   addblogs,
   delblogs
}