const jsonserver=require('json-server')


const mediaAppServer=jsonserver.create()


const router=jsonserver.router('db.json')


const middleware=jsonserver.defaults()


const port=process.env.PORT||4000


mediaAppServer.use(middleware)
mediaAppServer.use(router)


mediaAppServer.listen(port,()=>{
    console.log('listening on the port'+port);
})