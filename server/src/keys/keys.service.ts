import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Key } from './keys.model';
import { KEY_EXPIRES_IN } from 'src/utils/consts';
import * as uuid from 'uuid'

@Injectable()
export class KeysService {

    constructor(@InjectModel(Key) private keyRepository: typeof Key) {}

    async generate() {
        const keyId = uuid.v4()
        // Time in seconds
        const expiresIn = KEY_EXPIRES_IN
        const key = await this.keyRepository.create({uuid: keyId, expiresIn})
        return key.uuid
    }
}
