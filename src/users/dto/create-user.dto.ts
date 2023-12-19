import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateUserDto {
    @ApiProperty( { example: 'Test'} )
    @IsNotEmpty()
    readonly username: string;

    @ApiProperty( { example: 'test123'} )
    @IsNotEmpty()
    readonly password: string;

    @ApiProperty( { example: 'test@gmail.com'} )
    @IsNotEmpty()
    readonly email: string;
}