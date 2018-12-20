import { CustomerModel } from "./customer.model";

export class OrderModel {
  orderId: number;
  customerId: number;
  orderType: string;
  movingFrom: string;
  movingTo: string;
  movedDate: Date;
  note: string;
  customer: CustomerModel;
}
