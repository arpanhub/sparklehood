import express from 'express';
import {Express,Response,Request} from 'express';
import incidentRouter from './routes/incident';
import postIncident from './routes/postIncidents';
import { errorHandler } from './middleware/errorhandler';
import findIncident from './routes/findIncident';
import deleteIncident from './routes/deleteIncident';
import {limiter} from './middleware/rateLimiter';
const app:Express=express();
const port:number = 5050;

app.use('/api/',limiter);
app.use(express.json());
app.use('/api/v1',incidentRouter);
app.use('/api/v1',postIncident);
app.use('/api/v1',findIncident);
app.use('/api/v1',deleteIncident);




app.get('/',(req:Request,res:Response):void=>{
    res.send("APi is running");
})
app.use(errorHandler);
app.listen(port,():void=>{
    console.log(`Server is running at http://localhost:${port}`);
})