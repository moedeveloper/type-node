import "reflect-metadata";
import {ConnectionOptions} from "typeorm";
 
 export let dbOptions: ConnectionOptions = {
    type: "mysql",
    host: "eu-cdbr-azure-north-e.cloudapp.net",
    port:3306,
    username: "b5d9d73b488cf1",
    password: "89053fff",
    database: "mo3dat076",
    entities: [
         "./entities/*.js"
    ],
    synchronize: true,
}