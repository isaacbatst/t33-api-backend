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
    .addTag('Períodos de Backend')
    .setVersion('v33.0.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // const documentPath = path.resolve(__dirname, 'openapi.json');
  // await writeFile(documentPath, JSON.stringify(document));
  SwaggerModule.setup('api', app, document, {
    customJs: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.0/swagger-ui-bundle.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.0/swagger-ui-standalone-preset.min.js',
    ],
    customCssUrl: [
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.0/swagger-ui.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.0/swagger-ui-standalone-preset.min.css',
      'https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.9.0/swagger-ui.css',
    ],
  });

  await app.listen(3000);
}
bootstrap();
