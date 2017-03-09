import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ExpenseViewerComponent } from './expense-viewer/expense-viewer.component';
import { ExpenseSheetComponent } from './expense-sheet/expense-sheet.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'expensesheet',
    pathMatch: 'full',
  },
  {
    path: 'expensesheet',
    component: ExpenseSheetComponent
  },
  {
    path: 'expenseviewer/:id',
    component: ExpenseViewerComponent
  },
  {
    path: 'expenseviewer',
    component: ExpenseViewerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }