import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageBody } from './dto/create-message.dto';
import { MessagesService } from './messages.services';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messagesService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageBody) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  getMessage(@Param('id') messageId: string) {
    return this.messagesService.findOne(messageId);
  }
}
