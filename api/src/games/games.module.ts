import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Game } from './models/game.model';
import { GamesController } from './games.controller';
import { Team } from 'src/teams/team.model';

@Module({
  imports: [SequelizeModule.forFeature([Game, Team])],
  providers: [GamesService],
  controllers: [GamesController],
})
export class GamesModule {}
