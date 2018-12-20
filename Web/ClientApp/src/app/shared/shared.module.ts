import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatTableModule,
    MatButtonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSelectModule,
    MatDialogModule,
    MatCheckboxModule,
    MatNativeDateModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule
  ]
})
export class SharedModule {}
