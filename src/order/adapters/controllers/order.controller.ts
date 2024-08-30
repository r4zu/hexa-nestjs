import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderService } from 'src/order/services/order.service';
import { Order } from 'src/order/domain/order.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async createOrder(@Body() items: string[]): Promise<Order> {
    return this.orderService.createOrder(items);
  }

  @Get('id')
  async getOrder(@Param('id') id: string): Promise<Order | null> {
    return this.orderService.getOrder(id);
  }
}
