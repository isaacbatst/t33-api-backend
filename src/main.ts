import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Módulo de Back-end')
    .setDescription(
      'Boas vindas, Turma 33! Conheçam o time e as tecnologias que compõem o módulo!',
    )
    .addTag('periods')
    .setVersion('v33.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // const documentPath = path.resolve(__dirname, 'openapi.json');
  // await writeFile(documentPath, JSON.stringify(document));
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
