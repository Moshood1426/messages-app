import { Injectable } from '@nestjs/common';
import { readFile, writeFile } from 'fs/promises';
import path from 'path';

@Injectable()
export class MessagesRepository {
  async findAll() {
    const data = await readFile(
      path.resolve(__dirname, '../../', 'messages.json'),
      'utf-8',
    );
    const messages = JSON.parse(data);

    return messages;
  }

  async findOne(id: string) {
    const data = await readFile(
      path.resolve(__dirname, '../../', 'messages.json'),
      'utf-8',
    );
    const messages = JSON.parse(data);

    return messages[id];
  }

  async create(message: string) {
    const data = await readFile(
      path.resolve(__dirname, '../../', 'messages.json'),
      'utf-8',
    );

    const messages = JSON.parse(data);
    const randomNum = Math.floor(Math.random() * 999);
    messages[randomNum] = { id: randomNum, content: message };

    await writeFile(
      path.resolve(__dirname, '../../', 'messages.json'),
      JSON.stringify(messages),
    );
  }
}
