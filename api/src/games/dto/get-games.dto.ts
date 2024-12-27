import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetGamesDto {
  @ApiPropertyOptional()
  page?: number;

  @ApiPropertyOptional()
  limit?: number;
}
