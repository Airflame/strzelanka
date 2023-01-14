import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ListData } from './list-data';
import { ResultRow } from './result-row';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private listLength: number = 1;

  private lists: ListData[] = [];

  private resultRows: ResultRow[] = [];

  result$: Subject<ResultRow[]> = new Subject();

  constructor() { }

  setListLength(listLength: number) {
    this.listLength = listLength;
  }

  updateData(user: string, position: number, value: string): void {
    let listData: ListData | undefined = this.lists.find(list => list.user == user);
    if (listData != undefined) {
      listData.list[position] = value;
    } else {
      listData = {user: user, list: Array(this.listLength)};
      listData.list[position] = value;
      this.lists.push(listData);
    }
  }

  calculateResults(): ResultRow[] {
    this.resultRows = [];
    this.lists.forEach(listData => {
      let user: string = listData.user;
      listData.list.forEach((item, index) => {
        let resultRow: ResultRow | undefined = this.resultRows.find(row => row.value == item);
        let score: number = this.listLength - index;
        if (resultRow != undefined) {
          resultRow.points += score;
          resultRow.votes.push({score: score, user: user});
        } else {
          resultRow = {value: item, points: score, votes: [{score: score, user: user}]};
          this.resultRows.push(resultRow);
        }
      })
    })
    this.resultRows.sort((row1, row2) => row2.points - row1.points);
    this.result$.next(this.resultRows);
    return this.resultRows;
  }
}
