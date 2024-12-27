import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  NotNull,
  Table,
} from 'sequelize-typescript';
import { Game } from 'src/games/models/game.model';
import { Player } from 'src/players/player.model';
import { EventType } from './enums/type.enum';

@Table({ underscored: true, tableName: 'game_events' })
export class Event extends Model {
  @ApiProperty()
  @Column(DataType.INTEGER)
  @ForeignKey(() => Player)
  playerId: number;

  @ApiProperty()
  @BelongsTo(() => Player, 'playerId')
  player: Player;

  @ApiProperty()
  @Column(DataType.INTEGER)
  assistentId: number | null;

  @ApiProperty()
  @BelongsTo(() => Player, 'assistentId')
  assistent: Player;

  @ApiProperty()
  @Column(DataType.INTEGER)
  @ForeignKey(() => Game)
  gameId: number;

  @ApiProperty()
  @BelongsTo(() => Game, 'gameId')
  game: Game;

  @Column(DataType.INTEGER)
  minute: number;

  @Column(DataType.ENUM(...Object.values(EventType)))
  type: EventType;

  @Column({ type: DataType.JSON })
  info: Record<string, any> | null;
}
