import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  save(dto: any) {
    if(dto.hasOwnProperty('status')){
      console.log(dto);
    } else {
      console.log('123');
    }
  }
}
