import { Controller, Get, Param, Query } from '@nestjs/common';
import { GamesService } from './games.service';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetGamesDto } from './dto/get-games.dto';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Get()
  @ApiOkResponse()
  async findAll(@Query() params: GetGamesDto) {
    return this.gamesService.findAll(params);
  }

  @Get(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  async findOne(@Param('id') id: string) {
    return this.gamesService.findOne(+id);
  }
}
