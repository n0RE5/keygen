import { Module } from '@nestjs/common';
import { KeysService } from './keys.service';
import { KeysController } from './keys.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Key } from './keys.model';

@Module({
  providers: [KeysService],
  controllers: [KeysController],
  imports: [
    SequelizeModule.forFeature([Key])
  ]
})
export class KeysModule {}
