import express, { Request, Response } from 'express';
import  {Wrap} from '../../src/globals';
import {EventEmitter} from 'events'
import cors from 'cors';
import { triggerRecieve, } from '../electron/AppleScripts/controlVW';


let inbox: Wrap = {VWInfo: [], LightingDevices: []}  //The Raw Data from Vectorworks is stored in this object from the VWPost || An sent to the frontend via FreyurGet
let outbox: Wrap = {VWInfo: [], LightingDevices: []} //The Raw Data from Vectorworks is stored in this object from the VWPost || An sent to the frontend via FreyurGet

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

    //Changed data from server to Vectorworks
    server.get('/VectorworksGet', (req:Request, res:Response)=> {
        res.send(outbox)
        res.end()
    });

    //Data from Vectorworks into Server
    server.post('/VectorworksPost', (req:Request, res:Response)=> {
        const data: Wrap = req.body;
        events.emit('VectorworksPost', req.url)
        inbox = data
        res.json({
            // accepted
        })
        res.end()
    })


    //Raw Vectorworks Data to UI
    server.get('/FreyurGet', (req:Request, res:Response)=> {
        res.send(inbox)
        res.end()
    });
    //Changed Data via UI to Vectorworks
    server.post('/FreyurPost', (req:Request, res:Response)=> {
        const data: Wrap = req.body;
        outbox = data
        res.json({
            // accepted
        })
        res.end()
        triggerRecieve()
    })
    // start the Express server
    server.listen( port, () => {
        console.log( `server started at http://localhost:${ port }` );
    });
}


export const setInbox = (data:Wrap) => {inbox = data, events.emit('VectorworksPost')}
export const events = new EventEmitter();




