import { Controller, Body, Post } from '@nestjs/common';
import { loginDto } from './dto/login.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('login')
    async login(@Body() loginBody: loginDto) {
        const {username, password} = loginBody

        const token = await this.authService.signIn(username, password)

        return token

        
        
    }

}
