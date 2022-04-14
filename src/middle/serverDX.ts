import express, { Request, Response } from 'express';
import  {Wrap} from '../../src/globals';
import {EventEmitter} from 'events'
import cors from 'cors';


let inbox: Wrap = {VWInfo: [], LightingDevices: []}
let outbox: Wrap = {VWInfo: [], LightingDevices: []}
export const startDXServer = () =>{
    const server = express();
    server.use(express.json({limit: '5000mb'})); 
    server.use(express.urlencoded({limit: '5000mb'}));
    server.use(cors())
    const port = 29212; // default port to listen

    // define a route handler for the default home page
    server.get( "/", (req: Request, res: Response ) => {
        res.send( "Hello world!" );
    });

    server.get('/VectorworksGet', (req:Request, res:Response)=> {
        res.send(inbox)
        res.end()
    });

    server.post('/VectorworksPost', (req:Request, res:Response)=> {
        const data: Wrap = req.body;
        events.emit('VectorworksPost', req.url)
        inbox = data
        // console.log(data)
        res.json({
            // accepted
        })
        res.end()
    })
    // start the Express server
    server.listen( port, () => {
        console.log( `server started at http://localhost:${ port }` );
    });
}



export const events = new EventEmitter();




