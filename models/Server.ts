import Express, { Application } from "express";
import Cors from "cors";
import router from '../routes/users.routes';

class Server{

    public app:Application;
    public port:string | undefined;
    public usersPath:string;

    constructor(){
        this.app = Express();
        this.port=process.env.PORT;
        this.usersPath='/api/users';

        // Middlewares
        this.middlewares();

        // app's routes
        this.routes();
    }

    public middlewares(){
        // CORS
        this.app.use( Cors() );

        // Read and parse of Body
        this.app.use( Express.json() );

        // public directory
        this.app.use( Express.static('public') );
    }

    public routes(){
        this.app.use( this.usersPath, router )
    }

    public listen(){
        this.app.listen(this.port, () =>{
            console.log(`Listening port: ${this.port}`);
        });
    }
}

export default Server;