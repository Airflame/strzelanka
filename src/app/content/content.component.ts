import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { List } from './list';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    listLength: ['', Validators.required],
  });

  userFormGroup = this._formBuilder.group({
    user: ['', Validators.required],
  });

  lists: List[] = [];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  addList() {
    this.lists.push(new List(this.userFormGroup.get('user')?.value, []));
    this.userFormGroup.reset();
  }
}
