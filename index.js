const express = require('express')
const useRouter = require('./router/users')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

const mongoose = require('mongoose')

const url = 'mongodb+srv://cluster0.ogrba.mongodb.net/test?appName=mongosh+1.1.9'

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

app.get('/', function(request, response){
    const kelas = {
        id: 1,
        nama : 'Fenny'
    }
    response.json(kelas)
})

app.get('/about', function(request, response){
    response.redirect('https://expressjs.com/')
})

app.use(useRouter)

app.listen(3000, function() {
    console.log('server is okay')
})