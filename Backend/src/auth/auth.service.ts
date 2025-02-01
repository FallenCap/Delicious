import { Injectable } from '@nestjs/common';
import { UserRegistrationStep1 } from "./dto/auth.dto";
import { AuthData } from './auth.data';

@Injectable()
export class AuthService {
    constructor(private readonly authData: AuthData) {}

    async registrationStep1(user: UserRegistrationStep1): Promise<any> {
        try {
            const result = await this.authData.registrationStep1(user);

            return result;
        } catch (error) {
            throw error;
        }
    }
}
