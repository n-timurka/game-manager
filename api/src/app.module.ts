import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { GamesModule } from './games/games.module';
import { TeamsModule } from './teams/teams.module';
import { EventsModule } from './events/events.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (ConfigService: ConfigService) => ({
        dialect: 'postgres',
        host: ConfigService.get<string>('DB_HOST'),
        port: ConfigService.get<number>('DB_PORT'),
        username: ConfigService.get<string>('DB_USER'),
        password: ConfigService.get<string>('DB_PASSWORD'),
        database: ConfigService.get<string>('DB_NAME'),
        // synchronize: process.env.NODE_ENV !== 'production',
        autoLoadModels: true,
      }),
    }),
    GamesModule,
    TeamsModule,
    EventsModule,
    PlayersModule,
  ],
})
export class AppModule {}
