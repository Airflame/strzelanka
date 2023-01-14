import { Component, OnInit } from '@angular/core';
import { ResultRow } from './result-row';
import { ResultService } from './result.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  resultRows: ResultRow[] = [];

  constructor(private resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.result$.subscribe(resultRows => {
      this.resultRows = resultRows;
    });
  }
}
