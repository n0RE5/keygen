import { AppModule } from "./app.module"
import { NestFactory } from "@nestjs/core"
import * as requestIp from 'request-ip'

const start = async () => {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule, {
        rawBody: true, 
        bodyParser: true
    })
    app.enableCors();
    app.use(requestIp.mw())
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start()