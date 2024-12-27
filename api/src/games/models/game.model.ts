import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Team } from 'src/teams/team.model';

@Table({ underscored: true })
export class Game extends Model {
  @ApiProperty()
  @ForeignKey(() => Team)
  @Column
  hId: number;

  @BelongsTo(() => Team, 'hId')
  h: Team;

  @ApiProperty()
  @ForeignKey(() => Team)
  @Column
  aId: number;

  @BelongsTo(() => Team, 'aId')
  a: Team;

  @ApiProperty()
  @Column({ type: 'int' })
  status: number;

  @ApiProperty()
  @Column({ type: 'int' })
  hScore: number | null;

  @ApiProperty()
  @Column({ type: 'int' })
  aScore: number | null;

  @ApiProperty()
  @Column({ type: 'int' })
  tour: number;

  @ApiProperty()
  @Column('timestamp')
  datetime: Date;
}
