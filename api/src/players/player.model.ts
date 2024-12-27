import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  NotNull,
  Table,
} from 'sequelize-typescript';
import { Team } from 'src/teams/team.model';
import { PlayerPosition } from './enums/position.enum';
import { PlayerStats } from './types/stats.type';

@Table({ underscored: true })
export class Player extends Model {
  @Column(DataType.STRING)
  name: string;

  @Column(DataType.INTEGER)
  number: number | null;

  @Column(DataType.STRING)
  photo: string | null;

  @Column(DataType.INTEGER)
  @ForeignKey(() => Team)
  teamId: number;

  @BelongsTo(() => Team, 'teamId')
  team: Team;

  // @Column(DataType.ENUM(...(Object.values(PlayerPosition) as string[])))
  // position!: PlayerPosition;

  @Column(DataType.DATE)
  birthday: Date | null;

  @Column(DataType.STRING)
  nationality: string | null;

  @Column(DataType.JSON)
  stats: PlayerStats | null;
}
