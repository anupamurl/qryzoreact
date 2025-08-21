import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(loginDto: {
        email: string;
        password: string;
    }): Promise<{
        access_token: string;
        admin: {
            id: any;
            name: any;
            email: any;
            role: any;
        };
    }>;
    getProfile(req: any): any;
}
