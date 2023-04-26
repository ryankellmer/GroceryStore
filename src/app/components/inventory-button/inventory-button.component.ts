import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inventory-button',
  templateUrl: './inventory-button.component.html',
  styleUrls: ['./inventory-button.component.css'],
})
export class InventoryButtonComponent implements OnInit {
  @Input() label: string = '';
  @Output() onClick = new EventEmitter<any>();

  onClickButton(event: MouseEvent) {
    this.onClick.emit(event);
  }
  ngOnInit(): void {}
}
