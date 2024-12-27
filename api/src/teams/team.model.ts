import { Column, Model, Table } from 'sequelize-typescript';

@Table({ underscored: true })
export class Team extends Model {
  @Column
  title: string;

  @Column({ unique: true })
  slug: string;

  @Column({ type: 'simple-json' })
  info: Record<string, string> | null;

  @Column
  logo: string | null;

  @Column({ type: 'simple-array' })
  colors: string[] | null;
}
