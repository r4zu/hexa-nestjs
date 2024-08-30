import { Order } from '../order.entity';

export interface OrderRepository {
  save(order: Order): Promise<void>;
  findById(id: string): Promise<Order | null>;
}

export const OrderRepository = Symbol('OrderRepository');
