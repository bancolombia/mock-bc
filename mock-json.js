import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';

dotenv.config();

const PORT = process.env.PORT || 3005;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors({ origin: '*' }));

app.get('/:name', async (req, res) => {
    if(fs.existsSync(`./files/${req.params.name}.json`)){
        const mock = JSON.parse(fs.readFileSync(`./files/${req.params.name}.json`));
        await delay(mock.delay);
        res.status(mock.status).send(mock.response);
    }else{
        res.status(404).send('Mock not found.');
    }
});

app.listen(PORT, () => console.log(`MockJson running in port: ${PORT}`));

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));