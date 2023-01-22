import { IsString } from "class-validator"

export class CreateMessageBody {
    @IsString()
    content: string
}