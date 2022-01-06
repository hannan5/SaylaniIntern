const express = require('express');
const app = express()
app.use(express.urlencoded({extended:false}))
const port = 3000
const bcrypt = require('bcrypt')



const profile = []




app.set('view-engine', 'ejs')

app.get('/', (req, res)=>{
    res.render('index.ejs')
})
app.get('/login', (req, res)=>{
    res.render('login.ejs')
})

app.post('/login', (req, res) =>{
    
})

app.get('/register', (req, res)=>{
    res.render('register.ejs')
})
app.post('/register', async (req, res) =>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        profile.push({
          id: Date.now().toString(),
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        })
        res.redirect('/login')    
    }
        catch{
            res.redirect('/register')
        }
        console.log(profile)
})









// app.get('/users' , (req, res) =>{
//     res.json(users)
// })

// app.post('/users', async (req, res) =>{
//     try{
//         const salt = await bcrypt.genSalt()
//         const hasedPassword = await bcrypt.hash(req.body.password, 10)
//         const user = {name :req.body.name, password: hasedPassword}
//         users.push(user)
//         res.status(201).send()
//     }
//     catch{
//         res.status(500).send()
//     }  
// })

// app.post('/users/login', async (req,res) => {
//     const user = user.find(user.name = req.body.name)
//     if(user == null){
//         return res.status(400).send('Can not find user')
//     }
//     try{
//         if(await bcrypt.compare(req.body.password, user.password)){
//             res.send('Success')
//         } else{
//             res.send('Not Allowed')
//         }

//     }
//     catch{
//         res.status(500).send()
//     }
// })

app.listen(port)
