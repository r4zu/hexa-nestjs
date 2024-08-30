import { Module } from '@nestjs/common';
import { OrdersController } from './adapters/controllers/order.controller';
import { OrderService } from './services/order.service';
import { OrderRepository } from './domain/ports/order.repository';
import { OrderRepositoryImpl } from './adapters/db/order.repository.impl';

@Module({
  imports: [],
  controllers: [OrdersController],
  providers: [
    OrderService,
    {
      provide: OrderRepository,
      useClass: OrderRepositoryImpl,
    },
  ],
})
export class OrderModule {}
