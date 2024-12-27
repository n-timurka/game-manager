import { Module } from '@nestjs/common';
import { Team } from './team.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [SequelizeModule.forFeature([Team])],
})
export class TeamsModule {}
