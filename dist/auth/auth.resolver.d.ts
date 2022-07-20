import { AuthService } from './auth.service';
import { LoginUserInput } from './dto/login-user.input';
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    login(loginUserInput: LoginUserInput, context: any): Promise<{
        access_token: string;
        user: import("../users/entities/user.entity").User;
    }>;
}
