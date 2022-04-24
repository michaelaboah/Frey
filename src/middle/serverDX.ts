import express, { Request, Response } from 'express';
import {Wrap} from '../../src/globals';
import {EventEmitter} from 'events'
import cors from 'cors';
import { triggerRecieve, } from '../electron/AppleScripts/controlVW';


let inbox: Wrap = {VWInfo: [], LightingDevices: []}  //The Raw Data from Vectorworks is stored in this object from the VWPost || An sent to the frontend via FreyurGet
let outbox: Wrap = {VWInfo: [], LightingDevices: []} //The Raw Data from Vectorworks is stored in this object from the VWPost || An sent to the frontend via FreyurGet
let temporary = new Map<string, string>([])


export const startDXServer = () =>{
    const app = express();
    app.use(express.json({limit: '5000mb'})); 
    app.use(express.urlencoded({limit: '5000mb'}));
    app.use(cors())
    const port = 29212; // default port to listen

    // define a route handler for the default home page
    app.get( "/", (req: Request, res: Response ) => {
        res.send( "Hello world!" );
    });

    //Changed data from server to Vectorworks
    app.get('/VectorworksGet', (req:Request, res:Response)=> {
        res.send(outbox)
        res.end()
    });

    //Data from Vectorworks into Server
    app.post('/VectorworksPost', (req:Request, res:Response)=> {
        const data: Wrap = req.body;
        serverEvents.emit('VectorworksPost', req.url)
        inbox = data
        res.json({
            // accepted
        })
        res.end()
    })


    //Raw Vectorworks Data to UI
    app.get('/FreyurGet', (req:Request, res:Response)=> {
        res.send(inbox)
        res.end()
    });
    //Changed Data via UI to Vectorworks
    app.post('/FreyurPost', (req:Request, res:Response)=> {
        const data: Wrap = req.body;
        outbox = data
        res.json({
            // accepted
        })
        res.end()
        triggerRecieve()
    })





    app.post('/Test', (req:Request, res:Response) => {
        temporary = req.body;
        res.json({})
        console.log(temporary)
        res.end()
    })

    app.get('/Test', (req:Request, res:Response) => {
        res.send(temporary)
        res.end()
    })


    // start the Express server
    app.listen( port, () => {
        console.log( `server started at http://localhost:${ port }` );
    });
}


export const setInbox = (data:Wrap) => {inbox = data, serverEvents.emit('VectorworksPost')}
export const serverEvents = new EventEmitter();




