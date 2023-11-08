import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IsNotEmpty } from 'class-validator';
import { HydratedDocument } from 'mongoose';
import { BoardsStatus } from '../board-status.enum';

export type BoardDocument = HydratedDocument<Board>;

@Schema()
export class Board{
    @Prop({ unique: true, required: true }) // MongoDB에 들어갈 설정들을 적어준다.
    @IsNotEmpty()
    id: string; // 필드 이름: 타입(타입스크립트 타입)

    @Prop()
    @IsNotEmpty()
    title: string;

    @Prop()
    @IsNotEmpty()
    description: string;

    @Prop()
    @IsNotEmpty()
    status: BoardsStatus;

}

// 위의 작성한 클래스를 바탕으로 Mongoose에서 사용하는 스키마 클래스를 만들어준다.
export const BoardSchema = SchemaFactory.createForClass(Board);