import {OrderModel} from './order.model';

export class CustomerModel {
  customerId: number;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  orders: OrderModel[]
}
