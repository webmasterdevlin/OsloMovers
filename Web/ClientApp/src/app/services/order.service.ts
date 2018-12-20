import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Endpoints } from "../shared/utils/constants";
import { catchError } from "rxjs/operators";
import { OrderModel } from "../models/order.model";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private http: HttpClient) {}

  getOrders(): Observable<OrderModel[]> {
    return this.http
      .get<OrderModel[]>(Endpoints.orderUrl)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  getOrderById(id: string): Observable<OrderModel> {
    return this.http
      .get<OrderModel>(`${Endpoints.orderUrl}${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  postOrder(order: OrderModel): Observable<any> {
    return this.http
      .post<OrderModel>(`${Endpoints.orderUrl}`, order)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  putOrder(id: string, order: OrderModel): Observable<any> {
    return this.http
      .put<OrderModel>(`${Endpoints.orderUrl}${id}`, order)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  deleteOrder(id: string): Observable<any> {
    return this.http
      .delete<OrderModel>(`${Endpoints.orderUrl}${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }
}
