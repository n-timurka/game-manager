import { Controller, Get, Query } from '@nestjs/common';
import { EventsService } from './events.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetEventsDto } from './dto/get-events.dto';

@ApiTags('events')
@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  @ApiOkResponse()
  async findAll(@Query() params: GetEventsDto) {
    return this.eventsService.findAll(params);
  }
}
