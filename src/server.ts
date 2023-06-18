import express from 'express'
import router from './router/api';
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', router)


app.listen('3000', () => {
    console.log('server running')
})