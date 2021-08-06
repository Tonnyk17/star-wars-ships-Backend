import {server} from './server';
import './db';


server.start({port: 8000}, ({port}) => {
    console.log('server on port', port)
})