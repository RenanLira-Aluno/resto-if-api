import express, { Request, Response } from 'express'
import router from './router/api';
import bodyParser from 'body-parser';
import "reflect-metadata"
import { AppDataSource } from './db/database';
import dayjs from 'dayjs';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const app = express()

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));
app.use('/api/v1', router)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
AppDataSource.initialize()
    .then(async () => {

    })
    .catch((error: any) => console.log(error))


app.get('/test', (req: Request, res: Response) => {

    const comecoSemana = dayjs().startOf('week')
    const fimSemana = dayjs().endOf('week')


    res.json({comecoSemana, fimSemana})
})

app.listen('3000', () => {
    console.log('server running')
})
