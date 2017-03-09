import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { expenses } from '../expenses';

@Component({
  selector: 'app-expense-viewer',
  templateUrl: './expense-viewer.component.html',
  styleUrls: ['./expense-viewer.component.css']
})
export class ExpenseViewerComponent implements OnInit {
  sub: any;
  id: number;
  expenses = expenses;
  expense = {
    title: '',
    category: '',
    amount: 0
  };
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number
       if (this.id >= 0) {
         this.expense.title = this.expenses[this.id].title;
         this.expense.category = this.expenses[this.id].category;
         this.expense.amount = this.expenses[this.id].amount;
       }
    });
  }

  AddTask(){
    this.expenses.push(this.expense);
    this.router.navigate(['/expensesheet']);
  }

  UpdateTask()
  {
    this.expenses[this.id] = this.expense;
    this.router.navigate(['/expensesheet']);
  }
}
