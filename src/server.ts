import express from 'express'
import router from './router';
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

    return res.json({
        'hello': 'world'
    })
})

app.use(router)


app.listen('3000', () => {
    console.log('server running')
})