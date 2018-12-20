import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { CustomerModel } from "../models/customer.model";
import { Endpoints } from "../shared/utils/constants";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomers(): Observable<CustomerModel[]> {
    console.log("GETTING DATA");
    return this.http
      .get<CustomerModel[]>(Endpoints.customerUrl)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  getCustomerById(id: string): Observable<CustomerModel> {
    return this.http
      .get<CustomerModel>(`${Endpoints.customerUrl}${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  postCustomer(customer: CustomerModel): Observable<any> {
    return this.http
      .post<CustomerModel>(`${Endpoints.customerUrl}`, customer)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  postNewOrderToExistingCustomer(
    id: string,
    customer: CustomerModel
  ): Observable<any> {
    return this.http
      .post<CustomerModel>(`${Endpoints.customerUrl}${id}`, customer)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  putCustomer(customer: CustomerModel): Observable<any> {
    return this.http
      .put<CustomerModel>(`${Endpoints.customerUrl}`, customer)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }

  deleteCustomer(id: string): Observable<any> {
    return this.http
      .delete<CustomerModel>(`${Endpoints.customerUrl}${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) =>
          throwError(new Error(err.message))
        )
      );
  }
}
