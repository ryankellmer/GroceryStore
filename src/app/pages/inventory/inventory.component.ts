import { Component } from '@angular/core';
import { Inventory } from '../../models/inventory';
import { Tax } from '../../models/tax';
import { IDropdownSettings } from 'ng-multiselect-dropdown/multiselect.model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent {
  addLabel: string = 'Add';

  inventory: Inventory[] = [];
  newItem: Inventory = new Inventory();

  selectedTaxForm: FormGroup;
  disabled = false;
  ShowFilter = false;
  limitSelection = false;
  taxes: Tax[] = [];
  tax: Tax = new Tax();
  selectedTaxes: Tax[] = [];
  selectedTaxesSettings: IDropdownSettings = {};

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.taxes = [
      { name: 'Tax 1 - 8.0%', percentage: 8.0 },
      { name: 'Tax 2 - 2.5%', percentage: 2.5 },
      { name: 'Tax 3 - 3.0%', percentage: 3.0 },
      { name: 'Tax 4 - 1.5%', percentage: 1.5 },
    ];
    this.selectedTaxes = [];
    this.selectedTaxesSettings = {
      singleSelection: false,
      idField: 'percentage',
      textField: 'name',
      itemsShowLimit: 3,
      allowSearchFilter: this.ShowFilter,
      enableCheckAll: false,
    };
    this.inventory = [
      { id: 1, name: 'Apples', price: 1.99, tax: 0.0 },
      { id: 2, name: 'Bread', price: 2.95, tax: 0.0 },
      { id: 3, name: 'Milk', price: 3.99, tax: 0.0 },
      { id: 4, name: 'Cheese', price: 4.99, tax: 0.0 },
    ];
    this.selectedTaxForm = this.fb.group({
      taxes: [this.selectedTaxes],
    });
  }

  saveItem() {
    let item = new Inventory();
    if (this.addLabel === 'Add') {
      item.id = this.inventory.length + 1;
      item.name = this.newItem.name;
      item.price = this.newItem.price;
      item.tax = this.newItem.tax;
      this.inventory.push(item);
      this.newItem = new Inventory();
    } else if (this.addLabel === 'Update') {
      this.updateItem(this.newItem);
      this.addLabel = 'Add';
      this.newItem = new Inventory();
    }
  }

  deleteItem(id: number) {
    this.inventory = this.inventory.filter((item) => item.id !== id);
    this.refreshId();
  }

  editItem(id: number) {
    this.inventory = this.inventory.map((item) => {
      if (item.id === id) {
        this.addLabel = 'Update';
        this.newItem = item;
      }
      return item;
    });
  }

  updateItem(updatedItem: Inventory) {
    this.inventory = this.inventory.map((existingItem) => {
      if (existingItem.id === updatedItem.id) {
        existingItem.name = updatedItem.name;
        existingItem.price = updatedItem.price;
        existingItem.tax = updatedItem.tax;
      }
      return existingItem;
    });
  }

  refreshId() {
    this.inventory.forEach((item, index) => {
      item.id = index + 1;
    });
  }

  onItemSelect(event: any, id: number) {
    this.CalculateTaxAmount(event, id);
  }

  onItemDeSelect(event: any, id: number) {
    this.RemoveTaxAmount(event, id);
  }

  RemoveTaxAmount(removedTax: Tax, id: number) {
    this.inventory = this.inventory.map((item) => {
      if (item.id === id) {
        this.newItem = item;
        this.newItem.tax -= removedTax.percentage * 0.01;
      }
      return item;
    });
  }

  CalculateTaxAmount(addTax: Tax, id: number) {
    this.inventory = this.inventory.map((item) => {
      if (item.id === id) {
        this.newItem = item;
        this.newItem.tax += addTax.percentage * 0.01;
      }
      return item;
    });
  }

  functioncall(event: MouseEvent) {
    console.log('functioncall', event);
  }

  decimalFilter(event: any) {
    const twoDecimalRegularExpression: RegExp = /^-?\d*(\.\d{0,2})?$/;
    let input = event.target.value + String.fromCharCode(event.charCode);

    if (!twoDecimalRegularExpression.test(input)) {
      event.preventDefault();
    }
  }

  formatPrice(price: number) {
    return price.toFixed(2);
  }
}
