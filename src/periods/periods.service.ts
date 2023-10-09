import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePeriodDto } from './dto/create-period.dto';
import { UpdatePeriodDto } from './dto/update-period.dto';
import { database } from '../database';

@Injectable()
export class PeriodsService {
  create(createPeriodDto: CreatePeriodDto) {
    return 'This action adds a new period';
  }

  findAll() {
    return database.periods;
  }

  findOne(id: number) {
    const found = database.periods.find((period) => period.id === id);
    if (!found) throw new NotFoundException('Período não encontrado');
    const sections = database.sections.filter(
      (section) => section.periodId === id,
    );
    return {
      ...found,
      sections,
    };
  }
}
