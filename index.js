const express = require("express")
const app = express()
const PORT = 3000

app.get("/categories",(req,res)=>{
    res.send("GET CATEGORIES")
})

app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))