const express = require("express")
const app = express()
const PORT = 3000

app.get("/categories",(req,res)=>{
    res.send("GET CATEGORIES")
})

app.get("/products", (req,res)=>{
    res.send('Get products')
})
app.get("/users", (req,res)=>{
    res.send('Get users')
})
app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))