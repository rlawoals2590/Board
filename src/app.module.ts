import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BoardModule } from './boards/board.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL),
    BoardModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
