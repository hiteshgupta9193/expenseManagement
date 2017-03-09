import { Component, OnInit,OnChanges } from '@angular/core';
import { expenses } from '../expenses';

@Component({
  selector: 'app-expense-sheet',
  templateUrl: './expense-sheet.component.html',
  styleUrls: ['./expense-sheet.component.css']
})
export class ExpenseSheetComponent implements OnInit, OnChanges {

  expenses = expenses;

checkedArr: Array<number> = [];
checkedState = false;

  constructor() { }

  ngOnInit() {
  }

  totalAmount(): number {
    let sum = 0;
    for (let exp of this.expenses) {
      sum += exp.amount;
    }
    return sum;
  }

  deleteTask(){
    for (let i = 0; i < this.checkedArr.length; i++) {
      this.expenses.splice(this.checkedArr[i], 1);
    }
  }

  updateCheckedOptions(i: number, e: Event) {
    if (e.target['checked'] === true) {
      this.checkedArr.push(i);
    } else {
      this.checkedArr.splice(this.checkedArr.indexOf(i), 1);
    }
  }

  ngOnChanges(change) {
    // if(change.expenses)
    // this.checkedState = false;
  }
}
