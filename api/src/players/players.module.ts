import { Module } from '@nestjs/common';
import { Player } from './player.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Team } from 'src/teams/team.model';

@Module({
  imports: [SequelizeModule.forFeature([Player, Team])],
})
export class PlayersModule {}
