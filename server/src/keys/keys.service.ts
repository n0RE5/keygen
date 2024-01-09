import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Key } from './keys.model';
import { KEY_EXPIRES_IN } from 'src/utils/consts';
import * as uuidGen from 'uuid'

@Injectable()
export class KeysService {

    constructor(@InjectModel(Key) private keyRepository: typeof Key) {}

    async generate(userIp: string) {
        const uuid = uuidGen.v4()
        const timestamp = Date.now()
        const expiresIn = KEY_EXPIRES_IN
        const avaiableKey = await this.findAvailableKey(userIp)
        if(avaiableKey) {
            return avaiableKey.uuid
        }
        const key = await this.keyRepository.create({
            uuid, 
            timestamp,
            expiresIn,
            userIp
        })
        return key.uuid
    }

    async findAvailableKey(userIp: string) {
        const keys = await this.keyRepository.findAll({where: {userIp}})
        const timestamp = Date.now()
        for (let key of keys) {
            const expired = (timestamp - key.timestamp) > key.expiresIn
            if(!expired) {
                return key
            }
        }
        return false
    }

    async validate(uuid: string) {
        const timestamp = Date.now()
        const key = await this.keyRepository.findOne({where: {uuid}})
        if(!key) {
            throw new HttpException("Key doesn't exists.", HttpStatus.BAD_REQUEST)
        }
        const expired = (timestamp - key.timestamp) > key.expiresIn
        console.log(key.createdAt)
        if(expired) {
            throw new HttpException("Expired key.", HttpStatus.FORBIDDEN)
        }
        return true
    }
}
