import { Component, OnInit } from '@angular/core';
import { ExpensesService } from '../expenses.service';

@Component({
  selector: 'app-expense-sheet',
  templateUrl: './expense-sheet.component.html',
  styleUrls: ['./expense-sheet.component.css']
})
export class ExpenseSheetComponent implements OnInit {

  expenses: Object[];

  checkedArr: Array<number> = [];
  checkedState = false;

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {
    this.expenses = this.expensesService.expenses;
  }

  totalAmount(): number {
    let sum = 0;
    for (const exp of this.expenses) {
      sum += exp['amount'];
    }
    return sum;
  }

  deleteTask() {
    this.checkedArr = this.checkedArr.sort();
    for (let i = this.checkedArr.length - 1; i >= 0; i--) {
      this.expenses.splice(this.checkedArr[i], 1);
    }
    this.checkedArr = [];
  }

  updateCheckedOptions(i: number, e: Event) {
    if (e.target['checked'] === true) {
      this.checkedArr.push(i);
    } else {
      this.checkedArr.splice(this.checkedArr.indexOf(i), 1);
    }
  }
}
