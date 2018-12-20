import { Component, OnInit } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "../../../services/order.service";
import { MatSnackBar } from "@angular/material";
import { Location } from "@angular/common";
import { OrderModel } from "../../../models/order.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-view-order",
  templateUrl: "./view-order.component.html",
  styleUrls: ["./view-order.component.css"]
})
export class ViewOrderComponent implements OnInit {
  id: string;
  order: OrderModel;
  sub: Subscription;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  back(): void {
    this.location.back();
  }

  private getCustomer(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.sub = this.orderService.getOrderById(this.id).subscribe(data => {
      this.order = data;
    });
  }
}
