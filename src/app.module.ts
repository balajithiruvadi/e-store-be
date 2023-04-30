import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LaptopsModule } from './laptops/laptops.module';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://rwUser:${process.env.pwd}@cluster0.oz3czjs.mongodb.net/?retryWrites=true&w=majority`), UserModule, LaptopsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
