import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['cheerful-dinosaur-6203-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Y2hlZXJmdWwtZGlub3NhdXItNjIwMyR34D8cwLyiAAlJgE3gR0H6cgtE3V8jqmk',
          password:
            'M4cfYe8DPnrNa0C0qoC09UTltbeFyFrkxfJTbSJMVUQ0BGks1SFs_6lSh342zHJsgLbSyg==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
