import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserData } from '../content/user-data';
import { ResultService } from '../result/result.service';

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

  @Output()
  filledPosition: EventEmitter<UserData> = new EventEmitter();

  l: number[] = []

  list: string[] = [];

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.l = Array(this.listLength);
    this.list = Array(this.listLength);
  }

  changeItem(event: any, i: number) {
    this.list[i] = event.target.value;
    console.log({user: this.user, filled: this.list.filter(item => item != undefined).length});
    this.filledPosition.emit({user: this.user, filled: this.list.filter(item => item != undefined).length});
    console.log(event.target.value);
    console.log(i);
    console.log(this.list);
    this.resultService.updateData(this.user, i, event.target.value);
    console.log(this.resultService.calculateResults());
  }

}
