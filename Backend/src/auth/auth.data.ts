import { Inject, Injectable} from "@nestjs/common";
import { Sequelize, QueryTypes } from 'sequelize';
import { UserRegistrationStep1 } from "./dto/auth.dto";

@Injectable()
export class AuthData {
    constructor(@Inject('SEQUELIZE') private readonly sequelize: Sequelize) {}

    async registrationStep1(user: UserRegistrationStep1): Promise<any> {
        try {
            const {firstName, lastName, email, mobileNumber} = user;
            const procedureName = 'usp_user_registration_step1';

            const result = await this.sequelize.query(`CALL ${procedureName}(:firstName, :lastName, :email, :mobileNumber)`, {
                replacements: {firstName, lastName, email, mobileNumber},
                type: QueryTypes.RAW
            })

            return result;
        } catch (error) {
            throw error;
        }
    }
}