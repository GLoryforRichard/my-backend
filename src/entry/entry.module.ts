import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EntryController } from './entry.controller';
import { EntryService } from './entry.service';
import { Entry, EntrySchema } from './entry.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Entry.name, schema: EntrySchema }]),
  ],
  controllers: [EntryController],
  providers: [EntryService],
})
export class EntryModule {}
