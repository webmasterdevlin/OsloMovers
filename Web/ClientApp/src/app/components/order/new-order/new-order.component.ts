import { Component, OnDestroy, OnInit } from "@angular/core";
import { OrderService } from "../../../services/order.service";
import { Location } from "@angular/common";
import { MatSnackBar } from "@angular/material";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { OrderType } from "../../../models/order-type.model";
import { Subscription } from "rxjs";
import { OrderTypes } from "../../../shared/utils/constants";

@Component({
  selector: "app-new-order",
  templateUrl: "./new-order.component.html",
  styleUrls: ["./new-order.component.css"]
})
export class NewOrderComponent implements OnInit, OnDestroy {
  orderForm: FormGroup;
  isDisable: boolean = false;
  sub: Subscription;
  orders: OrderType[] = OrderTypes;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.formBuilderInit();
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  onSubmit() {
    this.createOrder();
  }

  back(): void {
    this.location.back();
  }

  private createOrder(): void {
    if (this.orderForm.status == "INVALID") {
      this.requiredFieldsSnackBar();
      return;
    }

    this.sub = this.orderService.postOrder(this.orderForm.value).subscribe();
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
      orderType: ["", Validators.required],
      movingFrom: ["", Validators.required],
      movingTo: ["", Validators.required],
      movedDate: ["", Validators.required],
      note: [""],
      customer: this.fb.group({
        firstName: ["", Validators.required],
        lastName: [""],
        phoneNumber: ["", Validators.required],
        email: ["", Validators.email]
      })
    });
  }
}
