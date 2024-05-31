import express from 'express'
import UserRouter from './routers/UserRouter.js'
import swaggerDocs from './swagger.js'

class Server {
    constructor() {
        this.app = express()
        this.port = process.env.PORT || 3000
        this.userRouter = new UserRouter()

        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.routes()    
    }

    // getConnection() {}
    // middlewares() {}

    routes() {
        // this.app.get('/', (req, res) => res.redirect('/api'))
        // this.app.use('/api', (req, res) => res.json({ status: 'success', payload: 'The API server is OK' }))
        this.app.use('/api/user', this.userRouter.getRouter())
    }

    listen() {
        this.app.listen(this.port, () => { 
            console.log(`🚀 Server running on PORT=${this.port}`)
            swaggerDocs(this.app, this.port)
        })
    }
}

export default Server