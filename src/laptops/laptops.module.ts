import { Module } from '@nestjs/common';
import { LaptopsController } from './laptops.controller';
import { LaptopsService } from './laptops.service';
import { Laptop, LaptopSchema } from './laptops.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: Laptop.name, schema: LaptopSchema }])],
  controllers: [LaptopsController],
  providers: [LaptopsService]
})
export class LaptopsModule {}
