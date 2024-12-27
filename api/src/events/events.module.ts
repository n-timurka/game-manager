import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { Event } from './event.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Player } from 'src/players/player.model';
import { Game } from 'src/games/models/game.model';

@Module({
  controllers: [EventsController],
  imports: [SequelizeModule.forFeature([Event, Game, Player])],
  providers: [EventsService],
})
export class EventsModule {}
