import { Injectable } from '@nestjs/common';
import { Event } from './event.model';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from 'src/games/models/game.model';
import { Player } from 'src/players/player.model';
import { GetEventsDto } from './dto/get-events.dto';
import { Team } from 'src/teams/team.model';

@Injectable()
export class EventsService {
  constructor(@InjectModel(Event) private eventModel: typeof Event) {}

  async findAll(params: GetEventsDto): Promise<Event[]> {
    return this.eventModel.findAll({
      limit: params.limit || 10,
      offset: (params.page - 1) * params.limit || 0,
      include: [
        { model: Player, as: 'player' },
        { model: Player, as: 'assistent' },
        {
          model: Game,
          as: 'game',
          include: [
            { model: Team, as: 'h' },
            { model: Team, as: 'a' },
          ],
        },
      ],
      order: [['created_at', 'DESC']],
    });
  }
}
