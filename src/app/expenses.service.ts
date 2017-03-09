import { Injectable } from '@angular/core';

@Injectable()
export class ExpensesService {
  expenses = [
    {
      'title': 'House rent',
      'category': 'Rent',
      'amount': 25000
    },
    {
      'title': 'Wifi',
      'category': 'Rent',
      'amount': 3000
    },
    {
      'title': 'Electicity',
      'category': 'Rent',
      'amount': 5000
    },
    {
      'title': 'Maid',
      'category': 'Household',
      'amount': 4000
    },
    {
      'title': 'Groceries',
      'category': 'Household',
      'amount': 8000
    }
  ];

  constructor() { }
}
