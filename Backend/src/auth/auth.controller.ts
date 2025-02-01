import {
  Body,
  Controller,
  ForbiddenException,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { UserRegistrationStep1 } from './dto/auth.dto';
import { AuthService } from './auth.service';
import { successResponseWithData } from 'src/helpers/apiResponse';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registerationStep1')
  async registrationStep1(
    @Body(
      new ValidationPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    user: UserRegistrationStep1,
  ): Promise<any> {
    try {
      const result = await this.authService.registrationStep1(user);

      if (result[0].userId) {
        return successResponseWithData('User Created Sucessfully.', result[0]);
      } else {
        throw new ForbiddenException('Error while registration!');
      }
    } catch (error) {
      throw error;
    }
  }
}
