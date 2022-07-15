const swaggerConfig = {
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Express API com Swagger",
            description: "Api simples utilizando express documentada pelo swagger",
            version: "1.0"
        },
        servers: [{
            url: "http://localhost:3334",
            description: "servidor local"
        }],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    apis: ["./src/routes/user.routes.js"]
}

export default swaggerConfig;