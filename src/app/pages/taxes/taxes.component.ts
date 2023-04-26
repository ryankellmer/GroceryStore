import { Component } from '@angular/core';
import { Tax } from '../../models/tax';

@Component({
  selector: 'app-taxes',
  templateUrl: './taxes.component.html',
  styleUrls: ['./taxes.component.css'],
})
export class TaxesComponent {
  taxes: Tax[] = [];
  tax: Tax = new Tax();

  addLabel: string = 'Add';

  ngOnInit() {
    this.taxes = [
      { name: 'Tax 1', percentage: 8.0 },
      { name: 'Tax 2', percentage: 2.5 },
      { name: 'Tax 3', percentage: 3.0 },
      { name: 'Tax 4', percentage: 1.5 },
    ];
  }

  saveItem() {
    let tax = new Tax();
    if (this.addLabel === 'Add') {
      tax.name = this.tax.name;
      tax.percentage = this.tax.percentage;
      this.taxes.push(tax);
      this.tax = new Tax();
    }
  }

  functioncall(event: MouseEvent) {
    console.log('functioncall', event);
  }

  formatPercentage(percentage: number) {
    return percentage.toFixed(2) + '%';
  }
}
