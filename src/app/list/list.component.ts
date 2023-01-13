import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input()
  user: string = "";

  @Input()
  listLength: number = 1;

  l: number[] = []

  list: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.l = Array(this.listLength);
    this.list = Array(this.listLength);
  }

  changeItem(event: any, i: number) {
    this.list[i] = event.target.value;
    console.log(event.target.value);
    console.log(i);
    console.log(this.list)
  }

}
