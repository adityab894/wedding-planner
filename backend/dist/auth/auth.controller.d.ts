import { RegisterUserDTO } from 'src/dto/auth.dto';
export declare class AuthController {
    registerUser(data: RegisterUserDTO): Promise<RegisterUserDTO>;
}
