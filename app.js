const express = require('express');
const app = express();

app.get('/url',(req,res)=>{
    res.json(
        ["Name",
        "Bashiru Suleman",
        "Amelia",
        "Musa",
        "Jane"
        ]);
});

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})