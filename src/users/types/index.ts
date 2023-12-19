import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
    @ApiProperty({ example: 'Test'})
    username: string;

    @ApiProperty({ example: 'test123'})
    password: string;
}

export class LoginUserResponse {
    @ApiProperty({ example: {user:{
        userIdL: 1,
        username: 'Test',
        password: 'test123',
    }}})
    user: {
        userIdL: number;
        username: string;
        password: string;
    }

    @ApiProperty({ example: 'Logged In'})
    msg: string;
}

export class LogoutUserResponse {
    @ApiProperty({ example: 'session has ended'})
    msg: string;
}

export class LoginCheckResponse {
    @ApiProperty({ example: 1})
    userId: number;

    @ApiProperty({ example: 'Test'})
    username: string;

    @ApiProperty({ example: 'test@gmail.com'})
    email: string;
}

export class SignupResponse {
    @ApiProperty({ example: 1})
    userId: number;

    @ApiProperty({ example: 'Test'})
    username: string;

    @ApiProperty({ example: '$2b$10$lAhoUjL50W.jLNOU0iVxJuyrVi8SETFuNneHCGqsUql/B5QvYVUia'})
    password: string;

    @ApiProperty({ example: 'test@gmail.com'})
    email: string;

    @ApiProperty({ example: '2023-12-17T13:36:50.940Z'})
    updatedAt: string;

    @ApiProperty({ example: '2023-12-17T13:36:50.940Z'})
    createdAt: string;
}