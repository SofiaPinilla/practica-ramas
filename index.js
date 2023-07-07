const express = require("express")
const app = express()
const PORT = 3000
app.get("/products", (req,res)=>{
    res.send('Get products')
})
app.listen(PORT, ()=> console.log(`Servidor levantado en el puerto ${PORT}`))