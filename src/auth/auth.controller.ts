import { Body, Controller, Post, HttpCode } from '@nestjs/common';
import { AuthRDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    @Post('register')
    async register(@Body() dto: AuthRDto) {}

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthRDto) {}
}