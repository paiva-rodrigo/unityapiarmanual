const express = require('express');
const app = express();



const PORT = process.env.PORT || 8877;

app.get('/',(req,res)=>{
    res.json({
        msg:"OK"
    })
})
app.get('/Figuras',(req,res)=>{
    res.json({
        nome:"figura1",
        tamanho:"1MB",
        posicao:"X Y Z",
        linkDownload:"link"
    })
})

app.listen(PORT,()=>{
    console.log(' Escutando na porta'+PORT);
})
