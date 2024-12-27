import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Game } from './models/game.model';
import { GetGamesDto } from './dto/get-games.dto';
import { Team } from 'src/teams/team.model';

@Injectable()
export class GamesService {
  constructor(@InjectModel(Game) private gameModel: typeof Game) {}

  async findAll(params: GetGamesDto): Promise<Game[]> {
    return this.gameModel.findAll({
      limit: params.limit || 10,
      offset: (params.page - 1) * params.limit || 0,
      include: [
        { model: Team, as: 'h' },
        { model: Team, as: 'a' },
      ],
      where: {
        status: 2,
      },
      order: [['datetime', 'DESC']],
    });
  }

  async findOne(id: number): Promise<Game> {
    return this.gameModel.findOne({
      where: { id },
    });
  }
}
