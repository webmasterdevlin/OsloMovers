import { Component, OnDestroy, OnInit } from "@angular/core";
import { OrderModel } from "../../../models/order.model";
import { Subscription } from "rxjs";
import { ActivatedRoute } from "@angular/router";
import { OrderService } from "../../../services/order.service";
import { Location } from "@angular/common";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OrderType } from "../../../models/order-type.model";
import { MatSnackBar } from "@angular/material";
import { OrderTypes } from "../../../shared/utils/constants";

@Component({
  selector: "app-edit-order",
  templateUrl: "./edit-order.component.html",
  styleUrls: ["./edit-order.component.css"]
})
export class EditOrderComponent implements OnInit, OnDestroy {
  order: OrderModel;
  sub: Subscription;
  id: string;
  orderId: number;
  customerId: number;
  orderForm: FormGroup;
  isDisable: boolean = false;
  orders: OrderType[] = OrderTypes;

  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private orderService: OrderService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}
  ngOnInit(): void {
    this.getOrder();
    this.formBuilderInit();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onSubmit(): void {
    this.orderForm.value.orderId = this.orderId;
    this.orderForm.value.customerId = this.customerId;
    this.orderForm.value.customer.customerId = this.customerId;
    this.updateOrder();
  }

  back(): void {
    this.location.back();
  }

  private getOrder(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");

    this.sub = this.orderService.getOrderById(this.id).subscribe(data => {
      this.order = data;
      this.orderId = data.orderId;
      this.customerId = data.customerId;
    });
  }

  private updateOrder(): void {
    if (this.orderForm.status == "INVALID") {
      this.requiredFieldsSnackBar();
      return;
    }
    this.sub = this.orderService
      .putOrder(this.id, this.orderForm.value)
      .subscribe();
    this.isDisable = true;
    this.createSnackBar();
  }

  private createSnackBar(): void {
    this.snackBar.open("New Moving Order", "Successfully saved!", {
      duration: 2000
    });
  }

  private requiredFieldsSnackBar(): void {
    this.snackBar.open("Please fill out the required fields", "Ok", {
      duration: 4000
    });
  }
  private formBuilderInit(): void {
    this.orderForm = this.fb.group({
      orderId: [""],
      orderType: ["", Validators.required],
      movingFrom: ["", Validators.required],
      movingTo: ["", Validators.required],
      movedDate: ["", Validators.required],
      note: [""],
      customer: this.fb.group({
        customerId: [""],
        firstName: ["", Validators.required],
        lastName: [""],
        phoneNumber: ["", Validators.required],
        email: ["", Validators.email]
      })
    });
  }
}
