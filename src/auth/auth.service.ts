import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly jwtService: JwtService) {}

    async signIn(username, pass) {
        const user = {
            username: '20191ads0401',
            password: 'renansenha'

        }

        if (user?.password != pass) {
            throw new UnauthorizedException()
        }

        return {
            access_token: await this.jwtService.signAsync({
                sub: user.username, username: user.username
            })
        }
    }

}
