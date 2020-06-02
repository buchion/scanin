import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../dashboardmodules/sidebar/sidebar.component';
import {
  MatButtonModule, MatInputModule,
  MatFormFieldModule, MatSidenavModule,
  MatIconModule, MatToolbarModule,
  MatListModule, MatCardModule, MatTableModule, MatDialogModule
}
  from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    //Materials
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    FormsModule,
    HttpClientModule,

  ],
  exports: [
    SidebarComponent,
    CommonModule,

    //Materials
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    LayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterModule,
    MatCardModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class SharedModule { }
