import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetEventsDto {
  @ApiPropertyOptional()
  page?: number;

  @ApiPropertyOptional()
  limit?: number;

  @ApiPropertyOptional()
  gameId?: number;
}
