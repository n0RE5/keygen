import { AppModule } from "./app.module"
import { NestFactory } from "@nestjs/core"

const start = async () => {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule, {
        rawBody: true, 
        bodyParser: true
    })
    app.enableCors();
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
}

start()