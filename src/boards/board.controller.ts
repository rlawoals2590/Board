import { Body, Controller, Delete, Get, Param, Patch, Post, UsePipes, ValidationPipe, HttpStatus, Res} from '@nestjs/common';
import { BoardsService } from './board.service';
import { BoardsStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/boards-status-validation-pipe';

@Controller('boards')
export class BoardController {
    constructor(private boardsService: BoardsService) {}

    @Get('/')
    async getAllBoards(@Res() response) {
        try {
            const boardData = await this.boardsService.getAllBoards();

            return response.status(HttpStatus.OK).json({message: 'Board found successfully', boardData,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Post('/')
    // handler 유효성 검사
    @UsePipes(ValidationPipe)
    async createBoard(@Res() response, @Body() createBoardDto: CreateBoardDto) {
        try {
            const newBoard = await this.boardsService.createBoard(createBoardDto);

            return response.status(HttpStatus.OK).json({message: 'Board has been created successfully', newBoard,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Get('/:id')
    async getBoardById(@Res() response, @Param('id') id: string) {
        try {
            const existingBoard = await this.boardsService.getBoardById(id);

            return response.status(HttpStatus.OK).json({message: 'Board found successfully', existingBoard,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Delete('/:id')
    async deleteBoardById(@Res() response, @Param('id') id: string) {
        try {
            const deleteBoard = await this.boardsService.deleteBoardById(id)

            return response.status(HttpStatus.OK).json({message: 'Board deleted successfully', deleteBoard,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }

    @Patch('/:id/status')
    async updateBoardStatus(
        @Res() response,
        @Param('id') id: string,
        @Body('status', BoardStatusValidationPipe) status: BoardsStatus,
    ) {
        try {
            const updateBoard = await this.boardsService.updateBoardStatus(id, status);

            return response.status(HttpStatus.OK).json({message: 'Board has been successfully updated', updateBoard,});
        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
}
