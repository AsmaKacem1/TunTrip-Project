const express = require('express');
const app = express();
const path=require('path')

const RouterHome=require('./routers/home.router')

app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine','ejs')
app.set('views','views')

app.use('/',RouterHome)

app.listen(3001,()=>console.log('server running'))