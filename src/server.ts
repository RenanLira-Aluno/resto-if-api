import express from 'express'
import router from './router/api';
import bodyParser from 'body-parser';
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/v1', router)


app.listen('3000', () => {
    console.log('server running')
})