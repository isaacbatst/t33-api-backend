import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PeriodsService } from './periods.service';

@ApiTags('periods')
@Controller('periods')
export class PeriodsController {
  constructor(private readonly periodsService: PeriodsService) {}

  @Get()
  findAll() {
    return this.periodsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.periodsService.findOne(+id);
  }
}
