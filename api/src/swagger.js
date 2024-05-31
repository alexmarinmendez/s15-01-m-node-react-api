import swaggerJSDoc from "swagger-jsdoc"
import swaggerUi from "swagger-ui-express"

//Metadata info about our API
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Indie-Zone API",
            version: "1.0.0"
        },
    },
    apis: ["src/docs/**/*.yaml"]
}

const swaggerSpec = swaggerJSDoc(options)

//Function to setup our docs
const swaggerDocs = (app, port) => {
    app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    console.log(`📙 Documentation available at http://localhost:${port}/api/docs`)
}

export default swaggerDocs