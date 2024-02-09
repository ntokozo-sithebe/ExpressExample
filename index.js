import express from 'express'

// es (import and from) other common js(require)

// create an express app
// almost like calling a function express()
// status code is 200 because everything is okay
//


// create an express app
const app = express()

const port = +process.env.PORT || 3000

// Router
app.get('/', (req, res)=>{
   res.json({
    status: res.statusCode,
    msg: 'You\'re Home Ntokozo'
   })
})
app.get('/about', (req, res)=>{
    res.json({
        status:404,
        msg:'About Meeeee'
    })
})

app.listen(port)

app.all('*',(req,res)=>{
    res.json({
        status: 200,
        msg: 'Well well well '
    })
})
