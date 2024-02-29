import {ApolloServer,gql} from "apollo-server";
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import mongoose from "mongoose";
import { MONGO_URL } from "./config.js";


mongoose.connect(MONGO_URL);

mongoose.connection.on("connected", ()=>{
    console.log("coneected to mongoDB")
})

mongoose.connection.on("error", (err)=>{
    console.log("coneected to mongoDB", err)
})

import './models/Quotes.js';
import './models/User.js';



import resolvers from "./resolvers.js";
import typeDefs from "./schema.js";



const server = new ApolloServer({
    //typeDefs: typeDefs
    //resolvers: resolvers its key value pair 
    
    typeDefs,
    resolvers,
    plugins:[
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})
server.listen().then(({url})=>{
    console.log(`server ready at ${url}`);

});
