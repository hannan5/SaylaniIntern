const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const publicPath = path.join(__dirname, '../', 'build');
app.use(express.static(publicPath));
console.log(publicPath)
app.get('/', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });


app.get('/api/users', async (req,res) =>{
    const user = [
        {user:"hannan@gmail.com", password:"admin123"},
        {user:"anus@gmail.com", password:"123456"}
    ]
    res.send(user)
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
 });