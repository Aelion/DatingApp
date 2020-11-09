import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  name: string; // added name property
  age: number;
  constructor() { 
    this.name = "Mario";
    this.age = 10;
  }

  ngOnInit(): void {
  }

}
