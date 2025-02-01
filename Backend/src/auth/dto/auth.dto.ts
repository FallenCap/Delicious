import {PartialType} from '@nestjs/mapped-types';
import { IsString, IsInt, IsEmail, IsMobilePhone, IsNotEmpty, MaxLength, Matches } from 'class-validator';

export class UserRegistrationStep1 {

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @Matches(/^\S.*\S$/, { message: 'firstName should not be empty or contain only spaces' })
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @MaxLength(50)
    @Matches(/^\S.*\S$/, { message: 'lastName should not be empty or contain only spaces' })
    lastName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsMobilePhone()
    mobileNumber: string;
}