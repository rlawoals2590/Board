import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardsStatus } from './board-status.enum';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Board } from './schema/board.schema';
import { Model } from 'mongoose';

@Injectable()
export class BoardsService {
    constructor(@InjectModel(Board.name) private boardModel: Model<Board>){}

    async getAllBoards(): Promise<Board[]> {
        const boardData = await this.boardModel.find();
        if (!boardData || boardData.length == 0) {
            throw new NotFoundException('Board data not found!');
        }
        return boardData;
    }

    async createBoard(createBoardDto: CreateBoardDto) {
        // js에서 값을 받는 인자와 인수의 이름이 같으면 아래처럼 하나번만 써줘도 인식함
        const board = new this.boardModel({
            // unique id
            id: uuid(),
            createBoardDto,
            // BoardsStatus에서 지정해준 PUBLIC과 PRIVATE만 가져올 수 있음
            status: BoardsStatus.PUBLIC
        });
        return board.save()
    }

    async getBoardById(id: string): Promise<Board> {
        const found = await this.boardModel.findOne({id: id});

        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }

        return found;
    }

    async deleteBoardById(id: string): Promise<Board> {
        const deleteBoard = await this.boardModel.findOneAndDelete({id: id});

        if (!deleteBoard) {
            throw new NotFoundException(`Board #${deleteBoard} not found`);
        }       
        return deleteBoard;
    }

    async updateBoardStatus(id: string, status: BoardsStatus) {
        const updateBoard = await this.boardModel.findOneAndUpdate({id: id}, {
            status: status
        });

        if (!updateBoard) {
            throw new NotFoundException(`Board #${updateBoard} not found`);
        }
        return updateBoard;
    }
}
