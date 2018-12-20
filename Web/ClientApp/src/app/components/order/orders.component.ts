import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../services/order.service";
import { Observable } from "rxjs";
import { OrderModel } from "../../models/order.model";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "@angular/animations";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.css"],
  animations: [
    trigger("fade", [
      state("void", style({ opacity: 0 })),
      transition("void => *", [animate(1500)]),
      transition("* => void", [animate(1500)])
    ])
  ]
})
export class OrdersComponent implements OnInit {
  loadOrdersResult$: Observable<OrderModel[]>;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  done(order: OrderModel): void {
    this.removeOrder(order);
  }

  private removeOrder(order: OrderModel) {
    this.orderService
      .deleteOrder(order.orderId.toString())
      .subscribe(() => this.loadOrders());
  }

  private loadOrders(): void {
    this.loadOrdersResult$ = this.orderService.getOrders();
  }
}
