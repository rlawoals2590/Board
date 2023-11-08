import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardController } from './board.controller';
import { Board, BoardSchema } from './schema/board.schema';
import { BoardsService } from './board.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema}])],
    controllers: [BoardController],
    providers: [BoardsService],
    exports: []
})
export class BoardModule {}
