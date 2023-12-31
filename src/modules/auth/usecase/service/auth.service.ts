import { Injectable } from '@nestjs/common';
import { AuthRepository } from '../../adapter/repository/auth.repository';

@Injectable()
export class AuthService {
    constructor(private readonly authRepository: AuthRepository) {}

    async login(email: string): Promise<void> {
        await this.authRepository.login(email);
    }
}
