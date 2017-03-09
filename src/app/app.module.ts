import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ExpenseViewerComponent } from './expense-viewer/expense-viewer.component';
import { ExpenseSheetComponent } from './expense-sheet/expense-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseViewerComponent,
    ExpenseSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
