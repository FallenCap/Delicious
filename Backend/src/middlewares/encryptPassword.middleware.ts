import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import md5 from 'md5';

@Injectable()
export class EncryptPasswordMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.body.password) {
      req.body.password = md5(req.body.password);
      console.log(`password after encryption ${req.body.password}`);
    }
    next();
  }
}
