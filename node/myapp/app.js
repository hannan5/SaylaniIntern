const express = require('express');
const { dirname } = require('path');
const app = express()
const port = 3000
const path = require('path');
const fs = require('fs')


app.get('/login',(req,res)=>{
    res.sendFile(path.join(__dirname,'/login.html'));
})

app.post('/home', (req, res) => {
    res.sendFile(path.join(__dirname,'/home.html'));
    let data = ''
    req.on('data', (chunk)=>{
        data += chunk
    // console.log(data)
    })
    req.on('end', ()=>{
        fs.readFile('./file.txt', 'utf8', (err, olddata)=>{
const newdata = olddata + '\n' + data
fs.writeFile('./file.txt', newdata, ()=>{
    console.log(data)
})
        })
       
    })
})

app.get('*',(req, res)=>{
    res.write('404')
    res.end()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})