import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    // 비어있는 값인지 아닌지 검사
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}