const {ApolloServer}=require('apollo-server');
const mongoose=require('mongoose')

const typeDefs=require('./graphql/typeDefs')
const {MONGODB}=require('./config.js')
const resolvers=require('./graphql/resolver/index')


const server=new ApolloServer({
    typeDefs,
    resolvers,
    context:({req})=>({req})
})

mongoose.connect(MONGODB,{useNewUrlParser:true})
    .then(()=>{
        console.log('DB connected ')
        return server.listen({port:5001})
    })
    .then(res=>{
        console.log(`Server is running at ${res.url}`);
    })