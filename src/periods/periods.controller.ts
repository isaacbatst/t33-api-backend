import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PeriodsService } from './periods.service';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';
import { ApiTags } from '@nestjs/swagger';

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
