import { Injectable } from '@nestjs/common';
import { a } from "../../core/src"

@Injectable()
export class AppService {
  getHello(): string {
    return 'Oi' + a;
  }
}
