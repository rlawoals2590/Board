import { Module } from '@nestjs/common';
import { BoardController } from './boards/board.controller';
import { BoardModule } from './boards/board.module';
import { BoardsService } from './boards/board.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    BoardModule,
    MongooseModule.forRoot(process.env.MONGODB_URL),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
