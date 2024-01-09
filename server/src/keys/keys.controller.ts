import { Body, Controller, Get, Post } from '@nestjs/common';
import { KeysService } from './keys.service';
import { IpAddress } from 'src/decorators/ipaddress';

@Controller('keys')
export class KeysController {

    constructor(private keyService: KeysService) {}

    @Get()
    generate(@IpAddress() userIp) {
        return this.keyService.generate(userIp)
    }

    @Post()
    validate(@Body('uuid') uuid: string) {
        return this.keyService.validate(uuid)
    }
}
